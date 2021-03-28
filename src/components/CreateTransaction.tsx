import React from "react";
import { WalletContext } from "../context/WalletContext";
import { Formik, Form, Field } from 'formik';
import { Button  } from 'reactstrap';
import '../styles.css'

const CreateTransaction: React.FC = () => {

  const { createTransaction } = React.useContext(WalletContext) as ContextType;

  const handleCreateTransaction = (formData: Transaction) => {
    createTransaction(formData);
  };

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
        type: ''
       }}
       validateOnChange={false}
       validateOnBlur={false}

       onSubmit={(values, {resetForm})  => {
        handleCreateTransaction({id: parseInt(values.id), currency: values.currency, amount: parseInt(values.amount), type: values.type})
        resetForm()
      }}
      >
       {({ errors}) => (
         
        <Form>
          <h2>Create Transaction</h2>
          <div>

            <a className="error" >{errors.currency}</a>
            <Field className="field" name="currency" validate={validateCurrency} />
            <label>Currency:</label>
            
          </div>
          <div>
            <a className="error" >{errors.amount}</a>
            <Field className="field" name="amount" validate={validateAmount} />
            <label>Amount:</label>
          </div>
          <div>
            <a className="error" >{errors.type}</a>
            <Field className="field" name="type" validate={validateType} />
            <label>Type:</label> 
          </div>
          <div>
            <Button outline color="primary" type="submit">Create</Button>
          </div>
        </Form>
       )}
     </Formik>
    </div>
  );
};

export default CreateTransaction;
