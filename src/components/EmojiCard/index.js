// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {cardDetails, getIdFunc, list} = props
  const {id, emojiName, emojiUrl} = cardDetails
  const sendId = () => {
    getIdFunc(id)
  }
  const highLight = list.includes(id) ? 'highLight' : ''
  return (
    <li className="emojiItem">
      <button
        type="button"
        className={`emojiBtn ${highLight}`}
        onClick={sendId}
      >
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
