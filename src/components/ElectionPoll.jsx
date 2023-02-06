import React from 'react';

const ElectionPoll = ({ poll }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-2xl font-bold text-gray-700">{poll.name}</h2>
      <p className="text-gray-600 text-sm mt-2">{poll.description}</p>
      <div className="mt-6">
        {poll.choices.map((choice) => (
          <button
            key={choice.id}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mr-4"
          >
            {choice.name} ({choice.votes} votes)
          </button>
        ))}
      </div>
    </div>
  );
};

export default ElectionPoll;
