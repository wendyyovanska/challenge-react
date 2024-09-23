import './App.css';
import FirmCard from './components/FirmCard';

const buttons = [
  { 
    text: "This is a two line button that terminates with a really long text", 
    hasIcon: false ,
    status: 'initial',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: true
  },
  { 
    text: "dos", 
    hasIcon: true,
    status: 'disabled',
    cardStatus: 'notworking',
    isBgChanging: false,
    isCentered: false
    
  },
  { 
    text: "tres", 
    hasIcon: true,
    status: 'stroke',
    cardStatus: 'working',
    isBgChanging: true,
    isCentered: true
  }
]

function App() {
  return (
    <div className="App">
      <FirmCard 
        text={buttons[0].text} 
        hasIcon={buttons[0].hasIcon} 
        status={buttons[0].status} 
        isBgChanging={buttons[0].isBgChanging}
        cardStatus={buttons[0].cardStatus}
        isCentered={buttons[0].isCentered}
      />
      <FirmCard 
        text={buttons[1].text} 
        hasIcon={buttons[1].hasIcon} 
        status={buttons[1].status} 
        isBgChanging={buttons[1].isBgChanging}
        cardStatus={buttons[1].cardStatus}
        isCentered={buttons[1].isCentered}
      />
      <FirmCard 
        text={buttons[2].text} 
        hasIcon={buttons[2].hasIcon} 
        status={buttons[2].status} 
        isBgChanging={buttons[2].isBgChanging}
        cardStatus={buttons[2].cardStatus}
        isCentered={buttons[2].isCentered}
      />
    </div>
  );
}

export default App;

