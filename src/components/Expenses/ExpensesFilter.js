import styles from './ExpensesFilter.module.scss';

const ExpensesFilter = ({ filteredYear, onFilter }) => {
  const handleSelectYear = e => onFilter(e.target.value);

  return (
    <div className={styles.filter}>
      <div className={styles.dropdown}>
        <label>Filter by year</label>
        <select value={filteredYear} onChange={handleSelectYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
