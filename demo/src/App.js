import './App.css';
import {Test,Two} from './test';
import Hello from './hello';
import ClassTest from './ClassTest';
import {Functional} from './functional';

function App() {
  return (
    <div className="App">
      <div className="test">
        <Test/>
      </div>
      <Hello/>
      
      <Two/>
      <ClassTest/>
      <Functional/>
    </div>
  );
}

export default App;
