import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import css from "../FriendListItem/FriendListItem.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((user) => (
        <li className={css.item} key={user.id}>
          <FriendListItem {...user} />
        </li>
      ))}
    </ul>
  );
}
