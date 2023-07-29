import React from 'react';

/* import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'; */
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import CourseTable from '../CourseTable';

const defaultTheme =
  createTheme(/* {
  breakpoints: {},
} */);

function Popup() {
  const [from, setFrom] = React.useState(10);

  const handleChange = (event) => {
    setFrom(event.target.value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          border: '1px solid grey',
          height: '400px',
          width: '500px',
        }}
      >
        <Container
          sx={{
            padding: '10px',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField id="country" fullWidth size="small" select onChange={handleChange} defaultValue={20} label="From">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField id="countr" fullWidth size="small" select onChange={handleChange} defaultValue={30} label="To">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField id="country" fullWidth size="small" select onChange={handleChange} defaultValue={20}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField id="countr" fullWidth size="small" select onChange={handleChange} defaultValue={30}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <CourseTable />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default Popup;
