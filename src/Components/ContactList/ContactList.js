import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ getContacts, deleteContact }) => {
  return (
    <div className={s.listWrapper}>
      <ul className={s.list}>
        {getContacts.map(({ name, number, id }) => {
          const onDeleteContact = () => deleteContact(id);
          return (
            <li className={s.item} key={id}>
              <p className={s.text}>{name}:</p>
              <p className={s.text}>{number}</p>
              <button
                className={s.button}
                type="button"
                onClick={onDeleteContact}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),

  deleteContact: PropTypes.func,
};

export default ContactList;