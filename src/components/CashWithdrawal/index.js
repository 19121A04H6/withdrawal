// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  render() {
    const {denominationList} = this.props
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="account-container">
          <div className="profile-container">
            <button type="button" className="profile">
              S
            </button>
            <p className="profile-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-heading">Your Balance</p>
            <div className="balance">
              <p className="count">{count}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdrawal-container">
            <h1 className="withdraw">Withdraw</h1>
            <p className="choose-sum">CHOOSE SUM(IN RUPEES)</p>
          </div>
          <ul className="button-container">
            {denominationList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
