import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.container}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
