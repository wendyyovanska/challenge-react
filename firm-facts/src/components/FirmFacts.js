import './FirmFacts.scss';
import FirmCard from './FirmCard'

const buttons = [
  {
    text: "1 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'initial',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: true
  },
  {
    text: "4 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'stroke',
    cardStatus: 'working',
    isBgChanging: true,
    isCentered: true
  },
  {
    text: "This is a one line button",
    hasIcon: false,
    status: 'stroke',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: true
  },
  {
    text: "5 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'stroke',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: true
  },
  {
    text: "6 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'initial',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: false
  },
  
  {
    text: "2 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'disabled',
    cardStatus: 'notworking',
    isBgChanging: false,
    isCentered: false
  },
  {
    text: "7 This is a two line button that terminates with a really long text",
    hasIcon: true,
    status: 'stroke',
    cardStatus: 'working',
    isBgChanging: false,
    isCentered: false
  }
]

function FirmFacts({ text, hasIcon, status, isBgChanging, cardStatus, isCentered }) {
  return (
    <div className="grid-container">
      <div className="grid-item item1">
        <FirmCard
          text={buttons[0].text}
          hasIcon={buttons[0].hasIcon}
          status={buttons[0].status}
          isBgChanging={buttons[0].isBgChanging}
          cardStatus={buttons[0].cardStatus}
          isCentered={buttons[0].isCentered}
          className="h-full"
          style={{height: '100%'}}
        />
      </div>
      <div className="grid-item item2">
        <FirmCard
          text={buttons[1].text}
          hasIcon={buttons[1].hasIcon}
          status={buttons[1].status}
          isBgChanging={buttons[1].isBgChanging}
          cardStatus={buttons[1].cardStatus}
          isCentered={buttons[1].isCentered}
        />
      </div>
      <div className="grid-item item3">
        <FirmCard
          text={buttons[2].text}
          hasIcon={buttons[2].hasIcon}
          status={buttons[2].status}
          isBgChanging={buttons[2].isBgChanging}
          cardStatus={buttons[2].cardStatus}
          isCentered={buttons[2].isCentered}
        />
      </div>
      <div className="grid-item item4">
        <FirmCard
          text={buttons[3].text}
          hasIcon={buttons[3].hasIcon}
          status={buttons[3].status}
          isBgChanging={buttons[3].isBgChanging}
          cardStatus={buttons[3].cardStatus}
          isCentered={buttons[3].isCentered}
        />
      </div>
      <div className="grid-item item5">
        <FirmCard
          text={buttons[4].text}
          hasIcon={buttons[4].hasIcon}
          status={buttons[4].status}
          isBgChanging={buttons[4].isBgChanging}
          cardStatus={buttons[4].cardStatus}
          isCentered={buttons[4].isCentered}
        />
      </div>
      <div className="grid-item item6">
        <FirmCard
          text={buttons[5].text}
          hasIcon={buttons[5].hasIcon}
          status={buttons[5].status}
          isBgChanging={buttons[5].isBgChanging}
          cardStatus={buttons[5].cardStatus}
          isCentered={buttons[5].isCentered}
        />
      </div>
      <div className="grid-item item7">
        <FirmCard
          text={buttons[6].text}
          hasIcon={buttons[6].hasIcon}
          status={buttons[6].status}
          isBgChanging={buttons[6].isBgChanging}
          cardStatus={buttons[6].cardStatus}
          isCentered={buttons[6].isCentered}
        />
      </div>


    </div>
  )
};

export default FirmFacts;