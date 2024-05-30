// Contact.jsx
import icon from "../../icons/icons.json";
import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  const { user, phone } = icon;

  return (
    <div className={css.cardWrapper}>
      <div className={css.infoWrapper}>
        <div className={css.info}>
          <img src={user} alt="User" width="24" height="24px" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.info}>
          <img src={phone} alt="Phone" width="24" height="24px" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button type="button">Delete</button>
    </div>
  );
};
export default Contact;
