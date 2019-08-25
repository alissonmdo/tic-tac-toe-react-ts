import React from 'react'
import styled from 'styled-components'

type PanelProps = {
  winner: string | null
  player: string
  step: number
  longestMove: number
  jump: (e: number) => any
}

const Panel: React.FC<PanelProps> = props => {
  const displayStatus = (player: string, winner: null | string) => {
    if (winner) return 'The Winner is ' + winner
    return 'The next player is: ' + player
  }

  return (
    <MyPanel>
      <div className="panel-next">
        {displayStatus(props.player, props.winner)}
      </div>
      <div className="panel-buttons">
        <button
          className="panel-button"
          onClick={() => props.jump(props.step - 1)}
          disabled={props.step <= 0 ? true : false}
        >
          Aaaaa
        </button>
        <button
          className="panel-button panel-button-middle"
          onClick={() => props.jump(0)}
          disabled={props.step <= 0 ? true : false}
        >
          Bbbbb
        </button>
        <button
          className="panel-button panel-button-right"
          onClick={() => props.jump(props.step + 1)}
          disabled={props.step >= props.longestMove - 1 ? true : false}
        >
          Ccccc
        </button>
      </div>
    </MyPanel>
  )
}

export default Panel

const MyPanel = styled.div.attrs(props => ({ className: 'panel' }))`
  background-color: red;
`
