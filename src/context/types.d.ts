interface Transaction {
  id: number;
  currency: string;
  amount: number;
  type: string
}

type ContextType = {
  wallet: Transaction[];
  createTransaction: (trans: Transaction) => void;
  deleteByID: (id: number) => void;
  deleteByCurrency: (currency: string) => void;
  updateTransaction: (trans: Transaction) => void;
};

