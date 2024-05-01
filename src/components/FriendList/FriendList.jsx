import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  // console.log(friends);
  return (
    <ul className={css.container}>
      {friends.map(friend => (
        <li key={friend.id} className={css.list}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}
