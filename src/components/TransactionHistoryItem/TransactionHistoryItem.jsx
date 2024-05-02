import css from './TransactionHistoryItem.module.css';

export default function TransactionHistoryItem({
  item: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.tableTitle}>{type}</td>
      <td className={css.tableTitle}>{amount}</td>
      <td className={css.tableTitle}>{currency}</td>
    </>
  );
}
