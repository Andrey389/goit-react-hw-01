import Profile from '../Profile/Profile';
import userData from '../userData.json';

import FriendList from '../FriendList/FriendList';
import friendsData from '../friends.json';

export default function App() {
  return (
    <>
      <Profile props={userData} />
      <FriendList friends={friendsData} />
    </>
  );
}
