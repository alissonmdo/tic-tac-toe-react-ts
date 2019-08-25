import React from 'react'
import Board from './Board'
import styled from 'styled-components'
import Panel from './Panel'

const Game: React.FC<any> = () => {
  const [history, setHistory] = React.useState([
    { squares: Array(9).fill(null) },
  ])
  const [player, setPlayer] = React.useState('X')
  const [step, setStep] = React.useState(0)

  const currentBoard = (): string[] => {
    const tHistory = history.slice(0, step + 1)
    const current = tHistory[tHistory.length - 1]
    return current.squares.slice()
  }
  const handleClick = (e: number) => {
    const squares = currentBoard()
    if (calculateWinner(squares) || squares[e]) return
    squares[e] = player
    setHistory(history.slice(0, step + 1).concat([{ squares: squares }]))
    setStep(history.slice(0, step + 1).length)
    setPlayer(selectNext(player))
  }

  const selectNext = (current: string): string => {
    return current === 'X' ? 'O' : 'X'
  }

  const jumpTo = (nextStep: number) => {
    if (0 <= nextStep && nextStep <= history.length - 1) {
      setStep(nextStep)
      setPlayer(nextStep % 2 === 0 ? 'X' : 'O')
    }
  }

  const calculateWinner = (squares: string[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  return (
    <MyGame className="Game">
      <Board
        squares={currentBoard()}
        onClick={(e: number) => handleClick(e)}
      ></Board>
      <Panel
        jump={e => jumpTo(e)}
        winner={calculateWinner(currentBoard())}
        longestMove={history.length}
        player={player}
        step={step}
      ></Panel>
    </MyGame>
  )
}

export default Game

const MyGame = styled.div`
  /* background: radial-gradient(
    1293.83px at 27.36% 25.63%,
    #00f4c3 0%,
    #5689ef 100%
  ); */

  width: 100%;
  height: 600px;
  display: flex;
  align-content: stretch;
`
