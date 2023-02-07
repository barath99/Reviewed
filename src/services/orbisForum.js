import { Orbis } from '@orbisclub/orbis-sdk';

async function createForum() {
  
  let orbis = new Orbis();

  // Create a new post using the createPost method
  const post = await orbis.createPost({
    title: 'Hello, world!',
    content: 'This is my first post on the forum.',
  });
  console.log(`Post created with ID: ${post.id}`);

  // Edit the post using the editPost method
  await orbis.editPost(post.id, {
    content: 'This is my first post on the forum. I have edited it to add more information.',
  });
  console.log(`Post edited with ID: ${post.id}`);

  // React to the post using the react method
  await orbis.react(post.id, 'like');
  console.log(`Post liked with ID: ${post.id}`);

  // Update the user's profile using the updateProfile method
  await orbis.updateProfile({
    displayName: 'John Doe',
    bio: 'I am a forum user and I like to talk about various topics.',
  });
  console.log('Profile updated');

  // Follow another user using the setFollow method
  await orbis.setFollow('user-id', true);
  console.log('Followed user');

  // Create a new group using the createGroup method
  const group = await orbis.createGroup({
    name: 'My Group',
    description: 'This is my group on the forum.',
  });
  console.log(`Group created with ID: ${group.id}`);

  // Add a user to the group using the setGroupMember method
  await orbis.setGroupMember(group.id, 'user-id', 'member');
  console.log(`User added to group with ID: ${group.id}`);

  // Create a new channel within the group using the createChannel method
  const channel = await orbis.createChannel({
    groupId: group.id,
    name: 'My Channel',
    description: 'This is my channel within the group.',
  });
  console.log(`Channel created with ID: ${channel.id}`);

  // Update the channel using the updateChannel method
  await orbis.updateChannel(channel.id, {
    name: 'Updated Channel Name',
  });
  console.log(`Channel updated with ID: ${channel.id}`);

  // Create a new conversation using the createConversation method
  const conversation = await orbis.createConversation({
    participants: ['user-id-1', 'user-id-2'],
  });
  console.log(`Conversation created with ID: ${conversation.id}`);

    // Send a message to the conversation using the sendMessage method
    await orbis.sendMessage(conversation.id, {
        content: 'Hello, this is a message in a private conversation.',
      });
      console.log(`Message sent to conversation with ID: ${conversation.id}`);
    
      // Upload a media file using the uploadMedia method
      const media = await orbis.uploadMedia('path/to/file.jpg');
      console.log(`Media uploaded with ID: ${media.id}`);
    }
    
    // Run the createForum function
    createForum();
    