// 4-pricing.js

import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;    // Use underscore attributes
    this._currency = currency;
  }

  // Getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price with currency
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // Static method to convert price using a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

export default Pricing;

