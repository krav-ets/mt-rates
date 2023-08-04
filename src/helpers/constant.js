export const KORONA_URL = 'https://koronapay.com/transfers/online/api/transfers/tariffs';
export const KORONA_PARAMS = {
  sendingCountryId: 'RUS',
  sendingCurrencyId: 810,
  receivingCountryId: 'GEO',
  receivingCurrencyId: 840,
  paymentMethod: 'debitCard',
  receivingAmount: 10000,
  receivingMethod: 'cash',
  paidNotificationEnabled: false,
};

export const UNISTREAM_URL = 'https://api7.unistream.com/api/v1/transfer/calculate';
export const UNISTREAM_PARAMS = {
  senderBankId: 373843,
  acceptedCurrency: 'RUB',
  withdrawCurrency: 'USD',
  amount: 100,
  countryCode: 'GEO',
};

export const UPDATE_INTERVAL = 60 * 1000;

export const COMPANIES = [{ name: 'korona', title: 'Золотая корона' }];
