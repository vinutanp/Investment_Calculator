import './App.css';
import Player from './component/Player';
import TimeChallenger from './component/TimeChallenger';

function App() {
 
  return (
    <>
      <Player/>
      <div id="challenges">
        <TimeChallenger title="easy" targetTime={1}/>
        <TimeChallenger title="Not easy" targetTime={5}/>
        <TimeChallenger title="difficult" targetTime={10}/>
        <TimeChallenger title="Pros Only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
