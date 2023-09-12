import React, { useState } from 'react'
import Accounts from './Components/Accounts'
import Graph from './Components/Graph'
import Payment from './Components/Payment'

const App = () => {
  const [conditions, setConditions] = useState(false)
  const [acc, setAcc] = useState()
  return (
    <div className="app">
      <h1>Accounts Repayment</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }} >
        <Accounts setConditions={setConditions} setAcc={setAcc} />
        {conditions ? <Graph data={acc} /> : <Payment data={acc} />}
      </div>
    </div>)
}

export default App