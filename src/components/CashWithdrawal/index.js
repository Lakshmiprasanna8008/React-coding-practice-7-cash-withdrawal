// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  adding = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state

    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    const {denominationsList} = this.props
    return (
      <div className="whole-container">
        <div className="inner-container">
          <div className="profile">
            <p className="logo">{initial}</p>
            <h3>{name}</h3>
          </div>
          <div className="your-balance-container">
            <p className="balance">Your Balance</p>
            <div className="balance-container">
              <p className="amount">{amount}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choosing">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachButton => (
              <DenominationItem
                denominationsList={eachButton}
                key={eachButton.id}
                adding={this.adding}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
