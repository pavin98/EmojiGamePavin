/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import Navbar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoose from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedList: [], isActive: true, score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  UpadateListId = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    if (clickedList.includes(id)) {
      this.setState(prevState => ({
        clickedList: [],
        isActive: !prevState.isActive,
      }))
    } else if (clickedList.length === emojisList.length - 1) {
      this.setState(prevState => ({
        clickedList: [],
        isActive: !prevState.isActive,
        score: parseInt(prevState.score) + 1,
      }))
    } else {
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
        score: parseInt(prevState.score) + 1,
      }))
    }
  }

  ResetGame = () => {
    const {score, topScore} = this.state
    if (topScore < score) {
      this.setState(prevState => ({
        clickedList: [],
        isActive: !prevState.isActive,
        score: 0,
        topScore: score,
      }))
    } else {
      this.setState(prevState => ({
        clickedList: [],
        isActive: !prevState.isActive,
        score: 0,
      }))
    }
  }

  render() {
    const {emojisList} = this.props
    const {clickedList, isActive, score, topScore} = this.state
    const navbarDetails = {isActive, score, topScore}
    const scoreDetails = {emojisList, score}
    const shuffledList = this.shuffledEmojisList()
    return (
      <div className="bgDetails">
        <Navbar item={navbarDetails} />
        <div className="Main-card">
          {isActive ? (
            <ul className="emoji-Container">
              {shuffledList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  cardDetails={eachItem}
                  getIdFunc={this.UpadateListId}
                  list={clickedList}
                />
              ))}
            </ul>
          ) : (
            <div className="ScoreCard-Det">
              <WinOrLoose
                scoreDetails={scoreDetails}
                resetGame={this.ResetGame}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
