// App.js
import React from 'react';
import { Box, Typography, Button, Link, Container } from '@mui/material';
import { styled } from '@mui/system';
import logo from './logo.svg';
import './App.css';

// Styled component for the logo
const Logo = styled('img')(({ theme }) => ({
  height: '40vmin',
  pointerEvents: 'none',
  [theme.breakpoints.down('sm')]: {
    height: '30vmin',
  },
}));

function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          backgroundColor: '#282c34',
          textAlign: 'center',
        }}
      >
        <Logo src={logo} alt="logo" />
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: '#61dafb',
            fontWeight: 'bold',
            mt: 3,
            mb: 2,
          }}
        >
          Welcome to Kubernetes Project
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: '#ffffff', mb: 4 }}
        >
          This is a project for Kubernetes and React integration. Dive in and explore the endless possibilities of containerized applications!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 2 }}
        >
          Learn React
        </Button>
        <Link
          href="https://kubernetes.io"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#61dafb', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Learn Kubernetes
        </Link>
      </Box>
    </Container>
  );
}

export default App;
