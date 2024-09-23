import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

const buttons = [
  { 
    text: "This is a two line button that terminates with a really long text", 
    hasIcon: false ,
    status: 'initial'
  },
  { 
    text: "dos", 
    hasIcon: true,
    status: 'disabled'
  },
  { 
    text: "tres", 
    hasIcon: true,
    status: 'stroke'
  }
]

function App() {
  return (
    <div className="App">
      <Button
        text={buttons[0].text}
        hasIcon={buttons[0].hasIcon}
        status={buttons[0].status}
      />
      <Button
        text={buttons[1].text}
        hasIcon={buttons[1].hasIcon}
        status={buttons[1].status}
      />
      <Button
        text={buttons[2].text}
        hasIcon={buttons[2].hasIcon}
        status={buttons[2].status}
      />
    </div>
  );
}

export default App;

