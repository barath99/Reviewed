// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@mantlejs/mantle/contracts/MantleStorage.sol";


contract Reviewed{
    struct Review {
        uint256 reviewId;
        uint256 categoryId;
        address author;
        string text;
        uint256 upvotes;
        uint256 createDate;
    }

    struct Category{
        uint256 categoryId;
        string categoryName;
    }
    
    struct Product {
        uint256 productId;
        string name;
        uint256 categoryId;
        string colour;
        uint256 price;
        uint256 rating;
        address[] voters;
    }



    mapping(uint256 => Category) private category;
    mapping(uint256 => Review) private reviews;
    uint256 private reviewCount;
    
    mapping(uint256 => Product) private products;
    uint256 private productCount;
    
    mapping(address => uint256) private reputation;
    mapping(address => uint256) private lastLogin;
    
    event NewReview(address author, uint256 reviewId, uint256 tokenId);
    event Upvote(uint256 reviewId, uint256 upvotes);
    event NewProduct(uint256 productId, string name);
    event Vote(uint256 productId, uint256 votes);

    address private mantleStorageAddress;
    
    
    function createReview(string memory text , uint256 categoryId) public {
        require(bytes(text).length > 0, "Text cannot be empty");
        
        Review storage review = reviews[++reviewCount];
        review.author = msg.sender;
        review.text = storeText(text);
        review.upvotes = 0;
        review.categoryId = categoryId;
        review.createDate = block.timestamp;
        

        emit NewReview(msg.sender, reviewCount);
    }
    
    function upvoteReview(uint256 reviewId) public {
        Review storage review = reviews[reviewId];
        
        require(review.author != address(0), "Review does not exist");
        require(getReputation(msg.sender) > 0, "You must have a reputation greater than 0 to upvote");
        require(block.timestamp >= getLastLogin(msg.sender) + 5 days, "You must have logged in for at least 5 days to upvote");
        
        review.upvotes++;
        reputation[review.author]++;
        
        emit Upvote(reviewId, review.upvotes);
    }
    
    function createProduct(string memory name , uint256 categoryId , uint256 price, string memory colour) public {
        require(bytes(name).length > 0, "Name cannot be empty");
        
        Product storage product = products[++productCount];
        product.name = name;
        product.categoryId = categoryId;
        product.price = price;
        product.colour = colour;
        product.voters = new address[](0);
         
        emit NewProduct(productCount, name);
    }
    
   function ratingForProduct(uint256 productId , uint256 rating) public {
        Product storage product = products[productId];
        
        for (uint i = 0; i < product.voters.length; i++) {
        require(product.voters[i] != msg.sender, "You can only vote for a product once");
    }
        product.rating = (product.rating * product.voters.length + rating) / product.voters.length;
        product.voters.push(msg.sender);
        
        emit Vote(productId, product.rating);
     }
    
    function getReviews(uint256 categoryId) public view returns (Review[] memory) {
        uint256 numReviews = reviewCount;

        Review[] memory reviewsInCategory = new Review[](numReviews);
        uint256 reviewIdx = 0;

        for (uint256 i = 1; i <= numReviews; i++) {
            Review storage review = reviews[i];
            if (review.categoryId == categoryId) {
                reviewsInCategory[reviewIdx] = review;
                reviewIdx++;
             }
         }

        return reviewsInCategory;
    }
    

    function getProducts(uint256 categoryId) public view returns (Product[] memory) {
    uint256 numProducts = productCount;
    Product[] memory productsInCategory = new Product[](numProducts);
    uint256 productIdx = 0;

    for (uint256 i = 1; i <= numProducts; i++) {
        Product storage product = products[i];
        if (product.categoryId == categoryId) {
            productsInCategory[productIdx] = product;
            productIdx++;
        }
    }

    return productsInCategory;
}

 //to store text on Mantle
  function storeText(string memory text) public returns (bytes32) {
    
    bytes32 key = keccak256(abi.encodePacked(text));

    MantleStorage mantleStorage = MantleStorage(mantleStorageAddress);

    mantleStorage.setString(key, text);

    return key;
  }

  // retrieve text from Mantle
  function getText(bytes32 key) public view returns (string memory) {
    MantleStorage mantleStorage = MantleStorage(mantleStorageAddress);

    string memory text = mantleStorage.getString(key);

    return text;
  }

    
    function getReputation(address user) public view returns (uint256) {
        return reputation[user];
    }

    function updateLastLogin() public {
        lastLogin[msg.sender] = block.timestamp;
    }
    
    function getLastLogin(address user) public view returns (uint256) {
        return lastLogin[user];
    }
}
