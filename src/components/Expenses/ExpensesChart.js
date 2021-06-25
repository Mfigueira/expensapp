import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
  const dataPoints = Array.from({ length: 12 }, (_, i) => ({
    label: new Date(0, i).toLocaleString('en-US', { month: 'short' }),
    value: 0,
  }));

  // getMonth() => index 0 == 'Jan' ...
  expenses.forEach(
    exp => (dataPoints[exp.date.getMonth()].value += exp.amount)
  );

  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
