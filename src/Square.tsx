import React from 'react'
import styled from 'styled-components'
import X from './assets/svg/X.svg'
import O from './assets/svg/O.svg'

type SquareProps = {
  player?: string
  onClick?: () => any
  number: number
}

const Square: React.FC<SquareProps> = ({ player = '', onClick, number }) => {
  return (
    <MySquare
      row={Math.floor(number / 3)}
      column={number % 3}
      onClick={onClick}
      className={`square square-${number} player-${player}`}
      player={player}
    >
      <div className="styled-background"></div>
    </MySquare>
  )
}

export default Square

type SquareStyles = {
  row: number
  column: number
  player: string
}
const size = 100

const MySquare = styled.button`
  background: transparent no-repeat center;
  background-size: ${size - 50}px;
  width: ${size}px;
  height: ${size}px;
  border: 0px;
  border-bottom: ${(p: SquareStyles) => {
    return p.row < 2 ? '5px rgb(255,255,255) solid' : '0px'
  }};
  border-right: ${(p: SquareStyles) => {
    return p.column < 2 ? '5px rgb(255,255,255) solid' : '0px'
  }};
  display: block;
  font-size: 2em;
  transition: all, ease-in, 1s;
  &active {
    outline: none;
  }
  &:hover {
    opacity: 1;
    & > .styled-background {
      opacity: 0.3;
    }
  }
  & > .styled-background {
    background: transparent no-repeat center;
    mask: no-repeat center;
    width: 100%;
    height: 100%;
    ${(p: SquareStyles) => {
      console.log(p.player)
      switch (p.player) {
        case 'X':
          return `background-color: white ; mask: url(${X}) no-repeat center; opacity: 1;`
        case 'O':
          return `background-color: white; mask: url(${O}) no-repeat center; opacity: 1;`
        default:
          return 'opacity: 0;'
      }
    }}
    transition: all, ease, 0.5s;
  }
`
