// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withDraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="account-container">
          <div className="name-container">
            <h1 className="letter-logo">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <p className="amount">
              {amount}
              <br /> <span>In Rupees</span>
            </p>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-heading">CHOOSE SUM (IN RUPEES)</p>

          <ul className="value-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                DenominationItems={eachValue}
                withDraw={this.withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
