import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const stateContacts = useSelector(selectContacts);
  const stateContactsNames = stateContacts.map(contact => contact.name);

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };

    if (stateContactsNames.includes(contact.name)) {
      e.target.reset();
      return alert(`${contact.name} is alredy in contacts`);
    }

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <>
      <form className={css.contactsForm} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          // pattern="^[+]?[0-9]{1,3}-?[0-9]{1,3}-?[0-9]{1,3}-?[0-9]{2,4}$"
          title="Phone number must be 11 digits and can contain numbers, spaces, dashes, pot-bellied brackets and can start with +"
          required
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
