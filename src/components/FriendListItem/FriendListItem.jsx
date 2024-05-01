import clsx from 'clsx';

import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="50" />
      <p className={css.text}>
        <b>{name}</b>
      </p>
      <p
        className={clsx(
          css.text,
          isOnline === true ? css.textOnline : css.textOffline
        )}
      >
        {isOnline === true ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
