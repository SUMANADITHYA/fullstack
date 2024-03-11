import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AdminPay = () => {
  // Mock payment data (replace this with your actual data)
  const [paymentData, setPaymentData] = useState([
    { id: 1, studentName: 'John Doe', course: 'React.js Fundamentals', amount: 50, status: 'Paid' },
    { id: 2, studentName: 'Jane Smith', course: 'Node.js Basics', amount: 40, status: 'Pending' },
    { id: 3, studentName: 'Alice Johnson', course: 'JavaScript Advanced', amount: 60, status: 'Paid' },
    // Add more payment data as needed
  ]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Payment Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Payment ID</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentData.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.studentName}</TableCell>
                <TableCell>{payment.course}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminPay.jsx;
