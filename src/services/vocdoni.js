import { Vocdoni } from '@vocdoni/vocdoni-sdk';

const vocdoni = new Vocdoni({
    apiKey: 'your-api-key',
  });
  
  const pollParams = {
    metadata: {
      name: 'My Poll',
      description: 'This is a sample poll',
    },
    questions: [
      {
        text: 'What is your favorite color?',
        choices: ['Red', 'Green', 'Blue'],
        type: 'single',
      },
    ],
  };
  
  vocdoni
    .createPoll(pollParams)
    .then((response) => {
      // handle the response
    })
    .catch((error) => {
      // handle the error
    });
