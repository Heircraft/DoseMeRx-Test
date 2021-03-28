import  React, { PureComponent } from "react";

import WalletProvider from "./context/WalletContext";
import DisplayTransactions from "./containers/DisplayTransactions";
import CreateTransaction from "./components/CreateTransaction";
import UpdateTransaction from './components/UpdateTransaction'
import DeleteByID from './components/DeleteByID'
import DeleteByCurrency from './components/DeleteByCurrency'
import "./styles.css";

class App extends PureComponent {
  public render(): JSX.Element {
  return (
    <WalletProvider>
      <main className="App">
        <div id="transationForm">
          <div id="upper">
            <CreateTransaction />
          </div>
          <div id="middle">
            <UpdateTransaction/>
          </div>
          <div id="lower">
            <h2 className="deleteLabel">Delete</h2>
            <DeleteByID/>
            <div id="lowerDelete">
              <DeleteByCurrency/>
            </div>
          </div>
        </div>
        <div id="displayTransactions">
          <h1>My Transactions</h1>
            <DisplayTransactions/>
        </div>
      </main>
    </WalletProvider>
  );
  }
}

export default App