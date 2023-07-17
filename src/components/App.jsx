import { ContactsForm } from './ContactsForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import css from './App.css';

export const App = () => {

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
