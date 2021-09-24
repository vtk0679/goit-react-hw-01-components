import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.Tr}>
          <th className={s.Th}>Type</th>
          <th className={s.Th}>Amount</th>
          <th className={s.Th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.Tr}>
            <td className={s.Td}>{item.type}</td>
            <td className={s.Td}>{item.amount}</td>
            <td className={s.Td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
