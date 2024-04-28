export default function FriendListItem({
  friends: { avatar, name, isOnline },
}) {
  console.log();
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline === true ? 'Online' : 'Offline'}</p>
    </div>
  );
}
