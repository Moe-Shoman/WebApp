import Dispatcher from "../dispatcher/Dispatcher";
import FluxMapStore from "flux/lib/FluxMapStore";

class DonateStore extends FluxMapStore {

  donation_success () {
    return this.getState().success;
  }

  donation_error () {
    return this.getState().error_message_for_voter || "";
  }

  donation_response_received () {
    return this.getState().donation_response_received;
  }

  reduce (state, action) {

    switch (action.type) {
      case "donationWithStripe":
        return {
          ...state,
          donation_amount: action.res.donation_amount,
          error_message_for_voter: action.res.error_message_for_voter,
          monthly_donation: action.res.monthly_donation,
          saved_stripe_donation: action.res.saved_stripe_donation,
          success: action.res.success,
          donation_response_received: true
        };

      case "error-donateRetrieve":
        console.log(action);
        return state;

      default:
        return state;
    }
  }
}

module.exports = new DonateStore(Dispatcher);
