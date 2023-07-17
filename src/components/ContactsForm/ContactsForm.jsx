import { useDispatch } from 'react-redux';
import css from './ContactsForm.module.css';
import { addContact } from 'redux/operations';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact(name, number));

    form.reset();
  };


  return (
    <>
      <form className={css.contactsForm} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.label}>Number</label>
        <input
          type="tel"
          name="number"
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
