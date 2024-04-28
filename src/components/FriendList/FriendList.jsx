import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}
