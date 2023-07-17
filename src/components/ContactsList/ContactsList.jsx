import { useSelector, useDispatch } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contactsSlice';

const getVisibleContacts = (contacts, filteredContacts) => {
  if (filteredContacts === '') {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts.filter)
    );
  }
};

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filteredContacts = useSelector(state => state.filters);
  const visibleContacts = getVisibleContacts(contacts, filteredContacts);

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul className={css.contactsList}>
      {visibleContacts.map(contact => (
        <li key={contact.id} className={css.contactsItem}>
          <div>
            <div>
              {contact.name}: {contact.number}
            </div>
            <button type="submit" value={contact.id} onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
