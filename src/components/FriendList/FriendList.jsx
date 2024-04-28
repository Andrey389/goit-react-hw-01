import FriendItem from './FriendItem';

export default function FriendList({ friends }) {
  //   console.log(friends);
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendItem friends={friends} />
        </li>
      ))}
    </ul>
  );
}
