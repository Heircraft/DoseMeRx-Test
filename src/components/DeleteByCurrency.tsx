import React from "react";
import { WalletContext } from "../context/WalletContext";
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';
import '../styles.css'

const DeleteByCurrency: React.FC = () => {

  const {wallet, deleteByCurrency } = React.useContext(WalletContext) as ContextType;

  const handleDeleteTransaction = (currency: string) => {
    deleteByCurrency(currency);
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

  return (
    <div>
      <Formik
       initialValues={{
        currency: ''
       }}
       validateOnChange={false}
       validateOnBlur={false}

       onSubmit={(values, {resetForm})  => {
        handleDeleteTransaction(values.currency)
        resetForm()
      }}
      >
       {({ errors}) => (
        <Form>
          <div>
            <h5 className="deleteLabel">By Currency</h5>
            <a className="error" >{errors.currency}</a>
            <Field className="field" name="currency" validate={validateCurrency}/>
            <label >Currency:</label>
            <div>
            <Button outline color="danger" type="submit">Delete</Button>
            </div>          
          </div>
        </Form>
       )}
     </Formik>
    </div>
  );
};

export default DeleteByCurrency;
