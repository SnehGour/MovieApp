import Navbar from "../../components/Navbar";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getMyOrders } from "../../API/api";
import { AuthContext } from "../../context/authContext";
import formatDate from "../../Utility/dateFormat";

const MyOrders = () => {
  const [myOrders, setMyOrders] = React.useState([])
  const auth = React.useContext(AuthContext);


  React.useEffect(() => {
    getMyOrders(auth.user?.email).then(response => {
      console.log('all-orders', response)
      console.log('auth', auth)
      setMyOrders(response.data);
    })
  }, [])
  
  return (<div>
    <Navbar />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin: '50px' }} aria-label="simple table">
        <TableHead>
          <TableRow color="blue" >
            <TableCell>Date</TableCell>
            <TableCell align="right">Orders Id</TableCell>
            <TableCell align="right">Payment Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {formatDate(row.createdAt)}
              </TableCell>
              <TableCell align="right">{row.razorpayOrderId}</TableCell>
              <TableCell align="right">{row.paymentId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>);
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default MyOrders;