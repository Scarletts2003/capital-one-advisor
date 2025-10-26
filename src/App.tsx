import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import VirtualAdvisor from './components/VirtualAdvisor/VirtualAdvisor';

/**
 * Main App component
 * Sets up routing and theme provider
 * Currently only showing VirtualAdvisor page as requested
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Redirect root to virtual advisor page for now */}
          <Route path="/" element={<Navigate to="/advisor" replace />} />
          {/* Virtual Advisor page */}
          <Route path="/advisor" element={<VirtualAdvisor />} />
          {/* Add other routes (login, form) later */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
