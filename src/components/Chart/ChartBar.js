import styles from './ChartBar.module.scss';

const ChartBar = ({ label, value, maxValue }) => {
  let barFillHeight = `${
    maxValue > 0 ? Math.round((value / maxValue) * 100) : 0
  }%`;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.fill} style={{ height: barFillHeight }}></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChartBar;
