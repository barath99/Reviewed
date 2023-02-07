// import { Election, EnvOptions, VocdoniSDKClient, PlainCensus } from '@vocdoni/sdk';
// import React, {useEffect, useState} from 'react';


// // Initialize the Vocdoni SDK client
// const client = new VocdoniSDKClient({
//   env: EnvOptions.STG,
//   // wallet: Metamask // Replace "signer" with your signer object, e.g. Metamask or Walletconnect
// });

// async function createAndFundAccount() {
//   try {
//     const info = await client.createAccount();
//     if (info.balance === 0) {
//       await client.collectFaucetTokens();
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// createAndFundAccount();

// const census = new PlainCensus()
// // accepts any ethereum-alike addresses
// // census.add(address)
// census.add('0x0000000000000000000000000000000000000000')
// (async () => {
//   // random wallet, for example purposes
//   // census.add(await 0x0000000000000000000000000000000000000000)
// })();

// // Create a new election
// // const createElection = async () => {
// //   const election = await client.createElection({
// //     title: 'Test Election',
// //     description: 'This is a test election',
// //     startDate: '2022-01-01',
// //     endDate: '2023-01-02',
// //     options: ['iPad pro', 'Samsung Galaxy']
// //   });
// //   setElection(election);
// // };

// const election = Election.from({
//   title: 'Election title',
//   description: 'Election description',
//   // a header image for your process (this is for example purposes; avoid using random sources)
//   header: 'https://source.unsplash.com/random/2048x600',
//   endDate: new Date('2023-01-23 23:23:23'),
//   census,
// })

// election.addQuestion('Ain\'t this process awesome?', [
//   {
//     title: 'Yes',
//     value: 0,
//   },
//   {
//     title: 'No',
//     value: 1,
//   },
// ]).addQuestion('How old are you?', [
//   {
//     title: 'Child (0-9 yo)',
//     value: 0,
//   },
//   {
//     title: 'Kid (10-16 yo)',
//     value: 1,
//   },
//   {
//     title: 'Adult (17-60 yo)',
//     value: 2,
//   },
//   {
//     title: 'Elder (60+ yo)',
//     value: 3,
//   },
// ])

// var electionId;

// (async () => {
//   const id = await client.createElection(election)
//   console.log(id) // will show the created election id
//   electionId= id;
// })();

// (async () => {
//   const info = await client.fetchElection(electionId)
//   console.log(info) // shows election information and metadata
// })();

// // Submit a vote
// // const submitVote = async () => {
// //   await client.submitVote(election.id, option);
// //   setVoted(true);
// // };

// // A custom radio button component that displays the option name and description
// const ElectionOption = ({ option }) => {
//   return (
//     <div className='flex items-center'>
//       <input type={"radio"} value={option} />
//       <div className='ml-2'>
//         <h1 className='text-lg'>{option}</h1>
//       </div>
//     </div>
//   );
// };

// // A custom form component that displays the election options and allows the user to select and submit a vote
// const ElectionForm = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   return (
//     <div className='form-control'>
//       <label className='form-label'>Select an option:</label>
//       <form
//         value={selectedOption}
//         onChange={(e) => setSelectedOption(e.target.value)}
//       >
//         {election.options.map((option) => (
//           <ElectionOption key={option} option={option} />
//         ))}
//       </form>
//       <button
//         className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
//         // onClick={() => submitVote(selectedOption)}
//       >
//         Submit Vote
//       </button>
//     </div>

//   );
// };

// // The main component that displays the election form and allows the user to create an election
// const Vocdoni = () => {
//   const [election, setElection] = useState<Election>(null);
//   const [voted, setVoted] = useState(false);

//   return (
//     <div fontSize='xl' m={20}>
//       {election && !voted &&
//           <ElectionForm />
//         }
//           <button variantColor='blue'>
//             Create Election
//           </button>
//     </div>
//   );
// };

// export default Vocdoni;
