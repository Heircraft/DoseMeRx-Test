import React from "react";
import { WalletContext } from "../context/WalletContext";
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';
import '../styles.css'

const DeleteByID: React.FC = () => {

  const { deleteByID } = React.useContext(WalletContext) as ContextType;

  const handleDeleteTransaction = (id: number) => {
    deleteByID(id);
  };

  const validateID = (value: string) => {
    let error
    if (!value) {
      error = "   Enter a Number"
    } else if (!value.match(/[0-9]/)) {
      error = '   Not a Number'
    }
    return error;
  }

  return (
    <div>
      <Formik
       initialValues={{
        id: ''
       }}
       validateOnChange={false}
       validateOnBlur={false}

       onSubmit={(values, {resetForm})  => {
        handleDeleteTransaction(parseInt(values.id))
        resetForm()
      }}
      >
       {({ errors}) => (
        <Form>
          <div>
            <h5 className="deleteLabel">By ID</h5>
            <a className="error" >{errors.id}</a>
            <Field className="field" name="id" validate={validateID}/>
            <label>ID:</label>
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

export default DeleteByID;
