import styles from './ExpensesList.module.scss';
import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ expenses }) =>
  !expenses.length ? (
    <h2 className={styles.fallback}>No Expenses found.</h2>
  ) : (
    <ul className={styles.list}>
      {expenses.map(e => (
        <li key={e.id}>
          <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
        </li>
      ))}
    </ul>
  );

export default ExpensesList;
