/* import * as Api from '../helpers/api';
import { UPDATE_INTERVAL } from '../helpers/constant';

const fetchKoronaRates = async () => {
  const name = 'korona';
  try {
    const response = await Api.getRatesData(name);
    const { exchangeRate, sendingTransferCommission, sendingAmount, receivingAmount } = response?.data?.[0] || {};
    const data = {
      rate: exchangeRate,
      commission: sendingTransferCommission,
      sendingAmount,
      receivingAmount,
      error: null,
    };
    console.log({ data });
    return { [name]: data };
  } catch (e) {
    return { [name]: { error: e } };
  }
};

const fetchAllRates = () => {
  Promise.allSettled([fetchKoronaRates]).then((results) => {
    const rates = results.reduce((acc, result) => ({ ...acc, ...result }), {});
    console.log({ rates, chrome }, chrome.storage);
    chrome.storage.local.set({ rates }).then(() => {
      chrome.runtime.sendMessage({ type: 'RATES_UPDATED' });
      console.log('fetchAllRatess');
    });
    chrome.runtime.sendMessage({ type: 'RATES_UPDATED' });
    console.log('fetchAllRatess');
  });
};

function updateCurrencyRates() {
  fetchAllRates();
  setInterval(fetchAllRates, UPDATE_INTERVAL);
}

updateCurrencyRates(); */
