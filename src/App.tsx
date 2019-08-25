import React from 'react'
import styled from 'styled-components'
import Game from './Game'
const App = () => {
  return (
    <MyApp>
      <Game></Game>
    </MyApp>
  )
}

export default App

const MyApp = styled.div`
  background-color: black;
  height: 100vh;
`
