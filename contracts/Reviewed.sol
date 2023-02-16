// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Reviewed {
    struct Review {
        address author;
        string text;
        uint256 upvotes;
        uint256 lastLogin;
    }
    
    struct Product {
        string name;
        uint256 votes;
    }
    
    mapping(uint256 => Review) private reviews;
    uint256 private reviewCount;
    
    mapping(uint256 => Product) private products;
    uint256 private productCount;
    
    mapping(address => uint256) private reputation;
    mapping(address => uint256) private lastLogin;
    
    event NewReview(address author, uint256 reviewId);
    event Upvote(uint256 reviewId, uint256 upvotes);
    event NewProduct(uint256 productId, string name);
    event Vote(uint256 productId, uint256 votes);
    
    function createReview(string memory text) public {
        require(bytes(text).length > 0, "Text cannot be empty");
        
        Review storage review = reviews[++reviewCount];
        review.author = msg.sender;
        review.text = text;
        review.upvotes = 0;
        review.lastLogin = lastLogin[msg.sender];
        
        emit NewReview(msg.sender, reviewCount);
    }
    
    function upvoteReview(uint256 reviewId) public {
        Review storage review = reviews[reviewId];
        
        require(review.author != address(0), "Review does not exist");
        require(reputation[msg.sender] > 0, "You must have a reputation greater than 0 to upvote");
        require(block.timestamp >= review.lastLogin + 5 days, "You must have logged in for at least 5 days to upvote");
        
        review.upvotes++;
        reputation[review.author]++;
        
        emit Upvote(reviewId, review.upvotes);
    }
    
    function createProduct(string memory name) public {
        require(bytes(name).length > 0, "Name cannot be empty");
        
        Product storage product = products[++productCount];
        product.name = name;
        product.votes = 0;
        
        emit NewProduct(productCount, name);
    }
    
    function voteForProduct(uint256 productId) public {
        Product storage product = products[productId];
        
        require(product.votes == 0, "You can only vote for a product once");
        
        product.votes++;
        
        emit Vote(productId, product.votes);
    }
    
    function getReview(uint256 reviewId) public view returns (address, string memory, uint256, uint256) {
        Review storage review = reviews[reviewId];
        
        return (review.author, review.text, review.upvotes, review.lastLogin);
    }
    
    function getProduct(uint256 productId) public view returns (string memory, uint256) {
        Product storage product = products[productId];
        
        return (product.name, product.votes);
    }
    
    function getReputation(address user) public view returns (uint256) {
        return reputation[user];
    }
    
    function getLastLogin(address user) public view returns (uint256) {
        return lastLogin[user];
    }
}
