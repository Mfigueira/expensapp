import { useState } from 'react';
import {
  getYearFromYYYYmmDD,
  getMonthFromYYYYmmDD,
  getDayFromYYYYmmDD,
} from '../../util/helpers';
import Button from '../Layout/Button';
import styles from './ExpenseForm.module.scss';

const ExpenseForm = ({ onSubmitExpense, onHideForm }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = e => setTitle(e.target.value);
  const handleAmountChange = e => setAmount(e.target.value);
  const handleDateChange = e => setDate(e.target.value);

  const resetFormInputs = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(
        getYearFromYYYYmmDD(date),
        getMonthFromYYYYmmDD(date),
        getDayFromYYYYmmDD(date)
      ),
    };
    onSubmitExpense(expenseData);
    resetFormInputs();
  };

  // ALTERNATIVE -> use 1 state, and update each value based on previous state
  //
  // const [formData, setFormData] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });

  // const handleTitleChange = e =>
  //   setFormData(prevState => ({ ...prevState, title: e.target.value }));

  // const handleAmountChange = e =>
  //   setFormData(prevState => ({ ...prevState, amount: e.target.value }));

  // const handleDateChange = e =>
  //   setFormData(prevState => ({ ...prevState, date: e.target.value }));

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label>
            Title
            <input type="text" value={title} onChange={handleTitleChange} />
          </label>
        </div>

        <div className={styles.control}>
          <label>
            Amount
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={handleAmountChange}
            />
          </label>
        </div>

        <div className={styles.control}>
          <label>
            Date
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={handleDateChange}
            />
          </label>
        </div>
      </div>

      <div className={styles.actions}>
        <Button secondary type="button" onClick={onHideForm}>
          Cancel
        </Button>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
