import ElectionPoll from './components/ElectionPoll';
import Landing from './pages/Landing';

const poll = {
  "name": "Example Poll",
  "description": "An example poll using Tailwind CSS and React",
  "choices": [
    { "id": 1, "name": "Option 1", "votes": 10 },
    { "id": 2, "name": "Option 2", "votes": 20 },
    { "id": 3, "name": "Option 3", "votes": 30 }
  ]
};

function App() {
  return (
    <div className="App">
      <Landing/>
      {/* <ElectionPoll poll={poll} /> */}
    </div>
  );
}

export default App;
