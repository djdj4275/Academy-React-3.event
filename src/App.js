import './App.css';
import EventClass from './components/EventClass';
import InputClass from './components/InputClass';
import InputArrow from './components/InputArrow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <EventClass name="이벤트"/>
          <InputClass />
          <InputArrow />
      </header>
    </div>
  );
}

export default App;
