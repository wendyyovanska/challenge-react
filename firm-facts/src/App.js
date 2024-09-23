import './App.css';
import FirmFacts from './components/FirmFacts';

function App() {
  return (
    <div className="App">
      {/* {elements} */}
      {/* <FirmFacts 
        text={buttons[0].text} 
        hasIcon={buttons[0].hasIcon} 
        status={buttons[0].status} 
        isBgChanging={buttons[0].isBgChanging}
        cardStatus={buttons[0].cardStatus}
        isCentered={buttons[0].isCentered}
      /> */}
      <FirmFacts />
      
    </div>
  );
}

export default App;

