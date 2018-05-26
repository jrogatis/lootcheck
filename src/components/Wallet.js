import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';


export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: undefined
    }
  }
updateBalance = event => {
  const { target: { value } } = event;
  this.setState({ balance: parseInt(value, 10) });
}

deposit = () => this.props.deposit(this.state.balance);

withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    const { balance } = this.props;
    return (
      <div>
        <h3 className='balance'>Wallet balance: {balance}</h3>
        <br />
        <input className='input-wallet' onChange={this.updateBalance}/>
        <button className='btn-deposit' onClick={this.deposit} > deposit </button>
        <button className='btn-withdraw' onClick={this.withdraw} > Withdraw </button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  balance: state.balance,
});

export default connect(mapStateToProps, { deposit, withdraw })(Wallet);