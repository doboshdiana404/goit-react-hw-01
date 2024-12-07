import css from "./Profile.module.css";
export default function Profile({ name, image, tag, location, stats }) {
  return (
    <div className={css.profileContainer}>
      <div>
        <img className={css.images} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.grayText}>@{tag}</p>
        <p className={css.grayText}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.subtitle}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.subtitle}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
