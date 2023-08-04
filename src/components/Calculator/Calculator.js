import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

import Table from '../Table';
import { COMPANIES } from '../../helpers/constant';

function Calculator({ rates }) {
  const [amount, setAmount] = useState(500);
  const [data, setData] = useState([]);

  const calculateData = () =>
    COMPANIES.map(({ name, title }) => {
      const columns = ['rate'];
      return [
        title,
        ...columns.map((column) => {
          if (column === 'rate') {
            const rate = rates?.[name]?.[column];
            return rate && amount ? (rate * amount).toFixed(2) : '';
          }
          return rates?.[name]?.[column];
        }),
      ];
    });

  useEffect(() => {
    const calcData = calculateData();
    setData(calcData);
  }, [rates, amount]);

  const handleChange = (event) => {
    setAmount(event.target.value);
  };
  return (
    <Box marginTop={2}>
      <Paper>
        <Box p={2}>
          <TextField fullWidth onChange={handleChange} label="Amount - $" size="small" value={amount} type="number" />
        </Box>
        <Table data={data} />
      </Paper>
    </Box>
  );
}
export default Calculator;
