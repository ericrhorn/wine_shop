import './App.css';
import Stag from './components/Stag';


function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightblue', height: '100vh'}}>
     
      <h1>Hello World</h1>
      <div style={{height: '500px', border:'solid black 1px'}}>
        <Stag/>
      </div>
    </div>
  );
}

export default App;
