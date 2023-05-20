// Write your code here.
import './index.css'

const WinOrLoose = props => {
  const {scoreDetails, resetGame} = props
  const {emojisList, score} = scoreDetails
  const playGame = () => {
    resetGame()
  }
  const textScore = emojisList.length === score ? 'Best Score' : 'Score'
  const gameStatus = emojisList.length === score ? 'Won' : 'Lose'
  const imgurl =
    emojisList.length === score
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <>
      <div className="scoreCard-Det">
        <h1>You {gameStatus}</h1>
        <p className="score-text">{textScore}</p>
        <p className="score-number">{`${score}/${emojisList.length}`}</p>
        <div>
          <button type="button" className="play-again" onClick={playGame}>
            Play Again
          </button>
        </div>
      </div>
      <div className="playImg-Container">
        <img src={imgurl} alt="win or lose" className="PlayImage" />
      </div>
    </>
  )
}

export default WinOrLoose
