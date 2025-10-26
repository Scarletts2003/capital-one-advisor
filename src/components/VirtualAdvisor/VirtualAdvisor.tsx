import React, { useState } from 'react';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  IconButton,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Divider,
  Grid,
} from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Logout as LogoutIcon,
  SupportAgent as SupportAgentIcon,
} from '@mui/icons-material';
import logoCA from '../../image/logo_ca.png';

/**
 * Main component for the Virtual Advisor page (Intelligent Agent)
 * Includes:
 * - Savings plan section
 * - Chatbot for user interaction
 * - Logout confirmation dialog
 * - Header with logo and title
 *
 * Code comments and documentation are written in English for clarity
 * and easier maintenance by the development team.
 */
const VirtualAdvisor: React.FC = () => {
  const theme = useTheme();
  // State to show/hide the savings plan
  const [isPlanVisible, setIsPlanVisible] = useState(true);
  // State for chat messages
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  // State for current user message
  const [currentMessage, setCurrentMessage] = useState('');
  // State to show logout confirmation dialog
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  // Sample data for savings plan
  const savingsPlan = {
    type: 'Premium Savings Plan',
    description: 'Personalized savings strategy based on your profile',
    details: [
      'Monthly savings goal: $500',
      'Expected annual return: 5%',
      'Risk level: Moderate',
    ],
  };

  // Sample data for income and expenses chart
  const financialData = [
    { name: 'Income', value: 3500, color: '#00C49F' },
    { name: 'Expenses', value: 2800, color: '#FF8042' },
  ];

  /**
   * Handle sending a new chat message.
   * In a real implementation this would call a backend or AI API
   * to obtain the assistant's response. For now we append a
   * simulated reply after a short timeout.
   */
  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, { text: currentMessage, isUser: true }]);
      setCurrentMessage('');
      // Simulate automatic agent response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "I'm your virtual advisor. How can I help you today?",
          isUser: false
        }]);
      }, 1000);
    }
  };

  /**
   * Open logout confirmation dialog.
   */
  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true);
  };

  /**
   * Logic to perform logout after confirmation.
   * Replace the console.log with real auth/logout handling.
   */
  const handleLogoutConfirm = () => {
    // Aquí se puede agregar la lógica real de cierre de sesión
    console.log('Logging out...');
    setIsLogoutDialogOpen(false);
  };

  /**
   * Close the logout confirmation dialog.
   */
  const handleLogoutCancel = () => {
    setIsLogoutDialogOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: 1200,
        minWidth: '360px',
        padding: { xs: 1, sm: 3 },
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        overflowX: 'auto',
      }}
    >
      {/* Business-style header with logo and logout */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 2 },
          background: '#fff',
          borderRadius: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%', 
            position: 'relative',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 0 }
          }}
        >
          <Box 
            sx={{ 
              height: { xs: 60, sm: 90 }, 
              width: { xs: 100, sm: 140 }, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              mr: { xs: 0, sm: 2 }
            }}
          >
            <img src={logoCA} alt="Capital One Logo" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', display: 'block' }} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              letterSpacing: 0.5,
              textAlign: 'center',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              position: { xs: 'static', sm: 'absolute' },
              left: { sm: '50%' },
              transform: { sm: 'translateX(-50%)' },
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            Your Financial Advisor
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              position: { xs: 'absolute', sm: 'static' },
              top: { xs: '8px', sm: 'auto' },
              right: { xs: '8px', sm: 'auto' },
              flex: { sm: 1 }
            }}
          >
            <IconButton
              onClick={handleLogoutClick}
              sx={{ 
                color: theme.palette.error.main,
                padding: { xs: 1, sm: 2 }
              }}
            >
              <LogoutIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Logout Confirmation Dialog */}
      <Dialog
        open={isLogoutDialogOpen}
        onClose={handleLogoutCancel}
        aria-labelledby="logout-dialog-title"
      >
        <DialogTitle id="logout-dialog-title">
          Logout
        </DialogTitle>
        <DialogContent>
          Are you sure you want to log out?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel}>Cancel</Button>
          <Button onClick={handleLogoutConfirm} color="error" variant="contained">
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      {/* Financial Overview Section */}
      <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2, 
          mb: 2
        }}>
        {/* Savings Plan Section */}
        <Box sx={{ 
          flex: '1',
          width: { xs: '100%', sm: '50%' },
          minHeight: { xs: '300px', sm: '450px' }
        }}>
          <Paper
            elevation={3}
            sx={{
              height: '100%',
              overflow: 'hidden',
              background: '#f9fbfc',
              border: '1px solid #e0e4ea',
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
              }}
            >
              <Typography variant="h6">Your Savings Plan</Typography>
            </Box>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Typography variant="h6" color="primary" sx={{ fontSize: { xs: '1.05rem', sm: '1.125rem' }, fontWeight: 600 }}>
                {savingsPlan.type}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1, fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                {savingsPlan.description}
              </Typography>
              <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {savingsPlan.details.map((detail, index) => (
                  <Typography key={index} variant="body1" sx={{ mt: 0.75, fontSize: { xs: '0.9rem', sm: '0.95rem' } }}>
                    • {detail}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>

        {/* Financial Chart Section */}
        <Box sx={{ 
          flex: '1',
          width: { xs: '100%', sm: '50%' },
          minHeight: { xs: '300px', sm: '450px' }
        }}>
          <Paper
            elevation={3}
            sx={{
              height: '100%',
              overflow: 'hidden',
              background: '#f9fbfc',
              border: '1px solid #e0e4ea',
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: theme.palette.primary.main,
                color: 'white',
              }}
            >
              <Typography variant="h6">Last Month's Balance</Typography>
            </Box>
            <Box sx={{ 
              p: 2, 
              height: { xs: '300px', sm: '400px' }
            }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={({ width, height }) => Math.min(width, height) / 3}
                    label={({name, value}) => `${name}: $${value}`}
                  >
                    {financialData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Chatbot Section */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ mb: 1, px: 1, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SupportAgentIcon sx={{ color: theme.palette.primary.main, fontSize: { xs: 34, sm: 44 } }} />
              <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 800, textAlign: 'center' }}>
                Chatbot
              </Typography>
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mt: 0.75,
                maxWidth: 900,
                margin: '0.5rem auto 0',
                fontSize: { xs: '1.05rem', sm: '1.125rem' },
                lineHeight: 1.6,
              }}
            >
              Chat with our virtual advisor to get personalized savings recommendations,
              review last month's transactions, or explore strategies that fit your situation. Try asking
              questions like <em>"How can I save $200 per month?"</em> or <em>"What savings plan is right for me?"</em>
              — the assistant will provide you with specific options and steps.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Paper
        elevation={3}
        sx={{
          height: 'calc(100vh - 250px)',
          display: 'flex',
          flexDirection: 'column',
          background: '#f9fbfc',
          border: '1px solid #e0e4ea',
        }}
      >
        {/* Chat Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                alignSelf: message.isUser ? 'flex-end' : 'flex-start',
                maxWidth: '70%',
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: { xs: 1.25, sm: 1.5 },
                  backgroundColor: message.isUser
                    ? theme.palette.primary.main
                    : theme.palette.grey[200],
                  color: message.isUser ? 'white' : 'inherit',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: { xs: '0.98rem', sm: '1.05rem' }, lineHeight: 1.6 }}>
                  {message.text}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

        {/* Chat Input */}
        <Box sx={{ p: 2, borderTop: `1px solid ${theme.palette.divider}` }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message here..."
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              size="small"
              sx={{ '& .MuiInputBase-input': { fontSize: { xs: '0.95rem', sm: '1rem' }, lineHeight: 1.6 } }}
              inputProps={{ 'aria-label': 'chat-message' }}
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              disabled={!currentMessage.trim()}
              size="medium"
              sx={{ fontSize: { xs: '0.95rem', sm: '1rem' }, px: 2 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default VirtualAdvisor;