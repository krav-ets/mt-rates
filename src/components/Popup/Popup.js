import React, { useState, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';

import Container from '@mui/material/Container';

import * as Api from '../../helpers/api';
import Table from '../Table';
import Calculator from '../Calculator';
import { COMPANIES } from '../../helpers/constant';

const defaultTheme = createTheme();

const fetchKoronaRates = async () => {
  const name = 'korona';
  try {
    const response = await Api.getRatesData(name);
    const { exchangeRate, sendingTransferCommission, sendingAmount, receivingAmount } = response?.data?.[0] || {};
    const data = {
      name,
      rate: exchangeRate,
      commission: sendingTransferCommission,
      sendingAmount,
      receivingAmount,
      error: null,
    };
    return { [name]: data };
  } catch (e) {
    return { [name]: { error: e } };
  }
};
const getRatesTableData = (rates, companies) =>
  companies.map(({ name, title }) => {
    const columns = ['rate'];
    return [title, ...columns.map((column) => rates?.[name]?.[column])];
  });

function Popup() {
  const [rates, setRates] = useState(null);
  const [ratesTableData, setRatesTableData] = useState(getRatesTableData(null, COMPANIES));

  const fetchAllRates = () => {
    Promise.allSettled([fetchKoronaRates()]).then((results) => {
      const ratesData = results.reduce((acc, result) => ({ ...acc, ...result.value }), {});
      setRates(ratesData);
    });
  };

  useEffect(() => {
    fetchAllRates();
  }, []);

  useEffect(() => {
    const tableData = getRatesTableData(rates, COMPANIES);
    setRatesTableData(tableData);
  }, [rates]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        p={2}
        sx={{
          width: '500px',
          backgroundColor: 'lightgray',
        }}
      >
        <Container disableGutters>
          <Table data={ratesTableData} />
          <Calculator rates={rates} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default Popup;
