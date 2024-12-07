import css from "./TransactionHistory.module.css";
import clsx from "clsx";
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((elem, index) => (
          <tr
            key={elem.id}
            className={clsx(index % 2 == 0 ? css.white : css.graybg)}
          >
            <td>{elem.type}</td>
            <td>{elem.amount}</td>
            <td>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
