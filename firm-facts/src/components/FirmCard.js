import './FirmCard.scss';
import Button from './Button'

function FirmCard({ text, hasIcon, status, isBgChanging, cardStatus, isCentered }) {
  return (
    <div className={`
      firm-card 
      ${isBgChanging === true ? 'bg-green' : ''}
      ${cardStatus === 'working' ? 'add-border' : ''} 
      ${isCentered === false ? 'not-centered' : 'content-center'}
    `}
    >
      <Button
        text={text}
        hasIcon={hasIcon}
        status={status}
      />
    </div>
  )
};

export default FirmCard;