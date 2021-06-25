import ChartBar from './ChartBar';
import styles from './Chart.module.scss';

const Chart = ({ dataPoints }) => {
  const dataPointvalues = dataPoints.map(dp => dp.value);
  const totalMax = Math.max(...dataPointvalues);

  return (
    <div className={styles.chart}>
      {dataPoints.map(dp => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          maxValue={totalMax}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
