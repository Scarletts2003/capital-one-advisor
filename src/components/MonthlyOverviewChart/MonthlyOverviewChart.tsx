import React from 'react';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

/**
 * MonthlyOverviewChart
 * Muestra un gráfico de barras con ingresos y gastos del mes pasado
 * Documentación en español para mejor mantenimiento
 */
const MonthlyOverviewChart: React.FC = () => {
  const theme = useTheme();

  // Datos de ejemplo (reemplazar con datos reales de la API)
  const data = [
    { semana: 'Sem 1', ingresos: 1200, gastos: 900 },
    { semana: 'Sem 2', ingresos: 1100, gastos: 1000 },
    { semana: 'Sem 3', ingresos: 1300, gastos: 800 },
    { semana: 'Sem 4', ingresos: 1000, gastos: 1200 },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        flex: 1,
        background: '#f9fbfc',
        border: '1px solid #e0e4ea',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, color: theme.palette.primary.main }}>
        Ingresos vs Gastos
      </Typography>
      <Box sx={{ flex: 1, minHeight: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
            <XAxis dataKey="semana" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="ingresos" 
              name="Ingresos" 
              fill={theme.palette.primary.main}
              radius={[4, 4, 0, 0]} 
            />
            <Bar 
              dataKey="gastos" 
              name="Gastos" 
              fill={theme.palette.error.main}
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default MonthlyOverviewChart;