/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// Generate Order Data
//function createData(v1, v2, v3, v4, v5, v6) {
//  return { id, date, name, shipTo, paymentMethod, amount };
//}

const columns = ['product type', 'sub type', 'recommendation score', 'rate']
const rows = [
  ['asd', 'sdf', 432, 23]
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 20
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
}))

export default function Orders({columns, rows}) {
//export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>

       <Table size="small" className="margin-top-20">

        <TableHead>
          <TableRow>
            {columns.map(column => (
                <TableCell className="bold">{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
               {row.map(cell => (
                               <TableCell>{cell}</TableCell>
                           ))}

            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      </Paper>
    </React.Fragment>
  );
}