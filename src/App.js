import { useState } from 'react';
import Modal from './components/Layout/Modal';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date('2020-07-14'),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date('2021-12-02') },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date('2021-02-28'),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date('2021-05-12'),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [alertUser, setAlertUser] = useState(false);

  const handleAddExpense = expense => {
    setExpenses(currExpenses => [expense, ...currExpenses]);
    setAlertUser(true);
  };

  const handleOnConfirm = () => setAlertUser(false);

  return (
    <>
      {alertUser && (
        <Modal message="Expense added!" onConfirm={handleOnConfirm} />
      )}
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
