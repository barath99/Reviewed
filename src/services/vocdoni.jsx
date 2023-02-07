import { Election, EnvOptions, VocdoniSDKClient } from 'vocdoni-sdk';
import React, {useEffect, useState} from 'react';


// Initialize the Vocdoni SDK client
const client = new VocdoniSDKClient({
  env: EnvOptions.DEV,
  // wallet: Metamask // Replace "signer" with your signer object, e.g. Metamask or Walletconnect
});

// Create a new election
const createElection = async () => {
  const election = await client.createElection({
    title: 'Test Election',
    description: 'This is a test election',
    startDate: '2022-01-01',
    endDate: '2022-01-02',
    options: ['Option 1', 'Option 2']
  });
  setElection(election);
};

// Submit a vote
const submitVote = async () => {
  await client.submitVote(election.id, option);
  setVoted(true);
};

// A custom radio button component that displays the option name and description
const ElectionOption = ({ option }) => {
  return (
    <div className='flex items-center'>
      <input type={"radio"} value={option} />
      <div className='ml-2'>
        <h1 className='text-lg'>{option}</h1>
      </div>
    </div>
  );
};

// A custom form component that displays the election options and allows the user to select and submit a vote
const ElectionForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className='form-control'>
      <label className='form-label'>Select an option:</label>
      <form
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {election.options.map((option) => (
          <ElectionOption key={option} option={option} />
        ))}
      </form>
      <button
        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={() => submitVote(selectedOption)}
      >
        Submit Vote
      </button>
    </div>

  );
};

// The main component that displays the election form and allows the user to create an election
const Vocdoni = () => {
  const [election, setElection] = useState<Election>(null);
  const [voted, setVoted] = useState(false);

  return (
    <div fontSize='xl' m={20}>
      {election && !voted &&
          <ElectionForm />
        }
          <button variantColor='blue' onClick={createElection}>
            Create Election
          </button>
    </div>
  );
};

export default Vocdoni;
