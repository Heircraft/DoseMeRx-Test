## Developer Notes

I took the liberty of refactoring some of the code.

I decided to use Functional components because I find react hooks to be easier to work with. I apologize if this is undesired, I could do it using classes if needed.

I changed the types.ts file to a types.d.ts file so that it inherently declares the types within it, so there's no need to import elsewhere

To remain within a reasonable degree of the time limit I did not add sort functionality as I ran out of time

## DoseMe Front-end Assessment

### Get Started

1. Fork or clone this repository

2. Install dependencies

    ```
    yarn
    ```

3. Start the server

    ```
    yarn start
    ```
  
### Guidelines

For this project you will be asked to create a wallet manager.

A wallet is a set of transactions, each containing the following information:

- Currency
- Amount
- Type (debit/credit)

#### User stories

- I want to be able to view my balances grouped by currency
- I want to be able to create a transaction
- I want to be able to update a transaction
- I want to be able to delete a transaction
- I want to be able to delete all transactions for a specific currency

### Tips

1. A store has been implemented using [React Context](https://reactjs.org/docs/context.html) 
and should be used to manage transactions
2. [reactstrap](https://reactstrap.github.io/) has been installed and can be used for this exercise
3. Existing code can be refactored if needed
