// Write your code here.
import './index.css'

const DisplayScore = props => {
  const {scoreDet} = props
  const {score, topScore} = scoreDet
  return (
    <li className="scoreCard">
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </li>
  )
}

const Navbar = props => {
  const {item} = props
  const {isActive} = item
  return (
    <nav>
      <ul className="ulCard">
        <li className="logoList">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1>Emoji Game</h1>
        </li>
        {isActive ? <DisplayScore scoreDet={item} /> : <></>}
      </ul>
    </nav>
  )
}
export default Navbar
