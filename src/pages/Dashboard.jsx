import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Mock data (will be replaced with actual data later)
const mockData = {
  totalStudents: 20,
  averageGrade: 75.5,
  passingRate: 85,
  subjects: 5,
};

function Dashboard() {
  const gradeDistributionData = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Number of Students',
        data: [8, 12, 6, 3, 1],
        backgroundColor: '#1f77b4',
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Students</Typography>
            <Typography variant="h4">{mockData.totalStudents}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Average Grade</Typography>
            <Typography variant="h4">{mockData.averageGrade.toFixed(1)}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Passing Rate</Typography>
            <Typography variant="h4">{mockData.passingRate}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Total Subjects</Typography>
            <Typography variant="h4">{mockData.subjects}</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Grade Distribution
            </Typography>
            <Bar data={gradeDistributionData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;