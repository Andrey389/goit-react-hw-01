import css from './Profile.module.css';

export default function Profile({
  props: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.userContainer}>
        <img className={css.imgIcon} src={avatar} alt="User avatar" />
        <p className={css.textName}>{username}</p>
        <p className={css.textCont}>{tag}</p>
        <p className={css.textCont}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span>
            <b>{followers}</b>
          </span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>
            <b>{views}</b>
          </span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>
            <b>{likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
