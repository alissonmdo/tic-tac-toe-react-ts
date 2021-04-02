import React from 'react'
import styled from 'styled-components'
import { MdArrowBack, MdArrowForward, MdLoop } from 'react-icons/md'
type PanelProps = {
  winner: string | null
  player: string
  step: number
  longestMove: number
  jump: (e: number) => any
}

const Panel: React.FC<PanelProps> = props => {
  const displayStatus = (player: string, winner: null | string) => {
    if (winner) return 'VICTORY OF:'
    return 'TEST OF:'
  }
  return (
    <MyPanel>
      <MyStatus className="panel-next">
        {displayStatus(props.player, props.winner)}
        <MyPlayer>{props.winner ? props.winner : props.player}</MyPlayer>
      </MyStatus>
      <MyButtons className="panel-buttons">
        <MyButton
          className="panel-button"
          onClick={() => props.jump(props.step - 1)}
          disabled={props.step <= 0 ? true : false}
        >
          <MdArrowBack style={{ fontSize: '3em' }} />
        </MyButton>
        <MyButton
          className="panel-button panel-button-middle"
          onClick={() => props.jump(0)}
          disabled={props.step <= 0 ? true : false}
        >
          <MdLoop style={{ fontSize: '3em' }} />
        </MyButton>
        <MyButton
          className="panel-button panel-button-right"
          onClick={() => props.jump(props.step + 1)}
          disabled={props.step >= props.longestMove - 1 ? true : false}
        >
          <MdArrowForward style={{ fontSize: '3em' }} />
        </MyButton>
      </MyButtons>
    </MyPanel>
  )
}

export default Panel

const MyPanel = styled.div.attrs(props => ({ className: 'panel' }))`
  /* background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0.085) 93.8%,
    rgba(0, 0, 0, 0) 100%
  ); */
  background: rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 350px;
  text-align: center;
  border-radius: 10px;
  color: white;
  display: grid;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 100px;
    grid-template-columns: 2fr 5fr;
    padding-top: 0.2em;
  }
`
const MyPlayer = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  width: auto;
  font-size: 5em;
  @media only screen and (max-width: 600px) {
    font-size: 5em;
  }
`
const MyStatus = styled.div`
  font-size: 1.4em;
  font-family: 'Lexend Deca', sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 0.8em;
  }
`

const MyButton = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 0.2em;
  height: 4em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #ffffff;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background-color: rgba(0, 0, 0, 0.35);
  &:hover {
    border-color: rgba(255, 255, 255, 1);
  }
  &:active {
    position: relative;
    top: 3px;
  }
  &:disabled {
    opacity: 0.1;
  }
  @media only screen and (max-width: 600px) {
    padding: 0.3em 0.8em;
    margin: 0 0.1em;
    border: 0.16em solid rgba(255, 255, 255, 0);
    border-radius: 0.5em;
    height: 80px;
  }
`

const MyButtons = styled.div`
  @media only screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 3;
    padding: 0;
    margin: 0;
  }
`
