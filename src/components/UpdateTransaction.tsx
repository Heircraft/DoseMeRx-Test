import React from "react";
import { WalletContext } from "../context/WalletContext";
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';
import '../styles.css'

const UpdateTransaction: React.FC = () => {

  const {wallet, updateTransaction} = React.useContext(WalletContext) as ContextType;

  const handleUpdateTransaction = (trans: Transaction) => {
    updateTransaction(trans);
  };

  const validateID = (value: string) => {
    let error
    //ensure id exists in transactions
    var tmp = wallet.filter(obj => obj.id == parseInt(value));
    if (tmp.length < 1) {
        error = "   ID does not exist"
    } else if (!value) {
        error = "   Enter a Number"
    } else if (!value.match(/[0-9]/)) {
        error = '   Not a Whole Number'
    }
    return error;
  }

  const validateCurrency = (value: string) => {
    let error
    if (!value) {
      error = "   Enter a Currency"
    } else if (!value.match(/[a-zA-Z]/) || value.length != 3) {
      error = '   Enter a 3 Digit Currency Identifier'
    }
    return error;
  }

  const validateAmount = (value: string) => {
    let error
    if (!value) {
      error = "   Enter an Amount"
    } else if (!value.match(/[0-9]/)) {
      error = '   Not a Number'
    }
    return error;
  }

  const validateType = (value: string) => {
    let error
    if (!value) {
      error = "   Enter credit or debit"
    } else if (value != 'credit' && value != 'debit') {
      error = '   Enter credit or debit'
    }
    return error;
  }

  return (
    <div>
      <Formik
       initialValues={{
        id: '',
        currency: '',
        amount: '',
        type: '',
        sub: ''
       }}
       validateOnChange={false}
       validateOnBlur={false}

       onSubmit={(values, {resetForm})  => {
        handleUpdateTransaction({id: parseInt(values.id), currency: values.currency, amount: parseInt(values.amount), type: values.type})
        resetForm()
      }}
      >
       {({ errors}) => (
        <Form>
          <h2>Update Transaction</h2>
          <div>
            <a className="error" >{errors.id}</a>
            <Field className="field" name="id" validate={validateID} />
            <label className="label">ID:</label>
          </div>
          <div>
          <a className="error" >{errors.currency}</a>
            <Field className="field" name="currency" validate={validateCurrency} />
            <label className="label">Currency:</label>
          </div>
          <div>
            <a className="error" >{errors.amount}</a>
            <Field className="field" name="amount" validate={validateAmount} />
            <label className="label">Amount:</label>
          </div>
          <div>
            <a className="error" >{errors.type}</a>
            <Field className="field" name="type" validate={validateType} />
            <label className="label">Type:</label> 
          </div>
          <div>
            <Button outline color="success" type="submit">Update</Button>
          </div>
        </Form>
       )}
     </Formik>
    </div>
  );
};

export default UpdateTransaction;
