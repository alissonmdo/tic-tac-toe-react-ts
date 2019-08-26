import React from 'react'
import styled from 'styled-components'
import Square from './Square'

type RowProps = {
  squares: string[]
  onClick: (e: number) => any
}
const Board: React.FC<RowProps> = ({ squares, onClick }) => {
  const Squares = []

  for (let i = 0; i < 9; i++) {
    Squares.push(
      <Square
        key={i}
        number={i}
        player={squares[i]}
        onClick={() => onClick(i)}
      ></Square>,
    )
  }

  return <MyBoard className="board">{Squares}</MyBoard>
}

export default Board

const MyBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: 100px 100px;
  width: 350px;

  padding: 25px 25px;
  height: 350px;
  justify-self: center;
`
