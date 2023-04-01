import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "../components/Chip";
import Button from '@mui/material/Button'

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Mr. Shrey Parekh", 159, "Web", 4.0),
  createData("Ms. Priyambi Hiran", 237, "Tech", 4.3),
  createData("Mr. Sarthak Bhan", 262, "Marketing", 6.0),
  createData("Mr. Dishant Zaveri", 305, "Sales", 4.3),
  createData("Ms. Lokita Varma", 356, "Consultancy", 3.9),
];

export default function BasicTable() {
  const pay = () => {
		let options = {
			key: "rzp_test_631wMxKie5nOL2",
			amount: "1000",
			currency: "INR",
			description: "Acme Corp",
			prefill: {
				email: "gaurav.kumar@example.com",
				contact: +919900000000,
			},
			method: {
				upi: true,
				netbanking: true,
				card: true,
				wallet: true,
				nb: true,
			},
			handler: (response) => {
				console.log(response);
			},
		};
		var rzp = new window.Razorpay(options);
		rzp.open();}
  return (
    <TableContainer
      style={{
        width: '65rem',
        marginInline: '15rem',
        marginBlock: '5rem',
      }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ backgroundColor: '#E24748', color: 'white' }}
              align="center"
            >
              Entrepreneur
            </TableCell>
            <TableCell
              style={{ backgroundColor: '#E24748', color: 'white' }}
              align="center"
            >
              Speciality
            </TableCell>
            <TableCell
              style={{ backgroundColor: '#E24748', color: 'white' }}
              align="center"
            >
              View Proposal
            </TableCell>
            <TableCell
              style={{ backgroundColor: '#E24748', color: 'white' }}
              align="center"
            >
              Invest
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                {row.fat}
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                <Button
                  sx={{
                    // backgroundColor: '#E24748',
                    // border: '1px solid #E24748',
                    color: '#2F3A56',
                    ':hover': {
                      bgcolor: '#2F3A56',
                      transition: '0.7s',
                      color: 'white',
                      border: '0px solid #2F3A56',
                    },
                  }}
                  variant="text"
                  color="primary"
                  onCLick={pay}
                >
                  View Proposal
                </Button>
              </TableCell>
              <TableCell component="th" align="center" scope="row">
                <Button
                  variant="text"
                  color="primary"
                  sx={{
                    // backgroundColor: '#E24748',
                    // border: '1px solid #E24748',
                    color: '#2F3A56',
                    ':hover': {
                      bgcolor: '#2F3A56',
                      transition: '0.7s',
                      color: 'white',
                      border: '0px solid #2F3A56',
                    },
                  }}
                  variant="text"
                  color="primary"
                  onCLick={pay}
                >
                  Invest
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
