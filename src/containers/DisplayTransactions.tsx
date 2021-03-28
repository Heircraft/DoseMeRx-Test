import * as React from "react";
import { WalletContext } from "../context/WalletContext";
import { Table } from 'reactstrap';
import '../styles.css'

const DisplayTransactions = () => {
  const {wallet} = React.useContext(WalletContext) as ContextType;
  return (
    <>
     <Table>
       <thead>
        <tr>
          <th>
            ID
          </th>
          <th>
            Currrency
          </th>
          <th>
            Amount ($)
          </th>
          <th>
            Type
          </th>
        </tr>
       </thead>

        {wallet.map((trans: Transaction) => (
          <tr key={trans.id}>
            <td>{trans.id}</td>
            <td>{trans.currency}</td>
            <td>{trans.amount}</td>
            <td>{trans.type}</td>
          </tr>
        ))}
      </Table>

    </>
  );
};

export default DisplayTransactions;
