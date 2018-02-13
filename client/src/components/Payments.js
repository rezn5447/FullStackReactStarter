import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Amounts are in cents
class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button type="button" className="btn" style={{ marginRight: '10px' }}>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
