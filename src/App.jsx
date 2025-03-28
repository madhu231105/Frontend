import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import GradeEntry from './pages/GradeEntry';
import Visualizations from './pages/Visualizations';
import Login  from  './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grade-entry" element={<GradeEntry />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;