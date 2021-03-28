import * as React from "react";

export const WalletContext = React.createContext<ContextType | null>(null);

const WalletProvider: React.FC<React.ReactNode> = ({ children }) => {
  var [wallet, setWallet] = React.useState<Transaction[]>([
    {
      id: 1,
      currency: 'aud',
      amount: 1000,
      type: 'credit'
    },
    {
      id: 2,
      currency: 'usd',
      amount: 124745,
      type: 'debit'
    }
  ]);

  //add a transaction
  const createTransaction = (trans: Transaction) => {
    //ensuring that the transactions ID is always unique
    var newID = wallet[wallet.length-1].id
    wallet.map(function(wallet){
      if (newID == wallet.id) {
        newID += 1
      }
    })
    const newTransaction: Transaction = {
      id: newID,
      currency: trans.currency,
      amount: trans.amount,
      type: trans.type
    };
    setWallet([...wallet, newTransaction]);
  };

  //delete a transaction by its ID
  const deleteByID = (id: number) => {
    wallet = wallet.filter(obj => obj.id != id);
    setWallet([...wallet])
  };

  //delete transactions by their Currency
  const deleteByCurrency = (currency: string) => {
    wallet = wallet.filter(obj => obj.currency != currency);
    setWallet([...wallet])
  };

  //update a transaction
  const updateTransaction = (input: Transaction) => {
    wallet.map((trans: Transaction) => {
      if (trans.id == input.id) {
        trans.currency = input.currency
        trans.amount = input.amount
        trans.type = input.type
      }
    })
    setWallet([...wallet])
  };

  return (
    <WalletContext.Provider value={{ wallet, createTransaction, updateTransaction, deleteByID, deleteByCurrency}}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
