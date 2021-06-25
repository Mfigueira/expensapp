import Card from '../Layout/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.scss';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <Card className={styles.card}>
      <ExpenseDate date={date} />
      <div className={styles.description}>
        <h2>{title}</h2>
        <div className={styles.price}>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
