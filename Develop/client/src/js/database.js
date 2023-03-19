import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('Post to the database');

//Creates a connection to the database and version we want to use.
const jateDb = await openDB('jate', 1);

//Creates a new transaction and specifies the database and privileges.
const tx = jateDb.transaction('jate', 'readwrite');

//Opens up the desired object store.
const store = tx.objectStore('jate');

//Use the .add() method on the store and pass in content.
const request = store.put({ id: 1, value: content });

//Gets conirmation of the request.
const result = await request;
HTMLFormControlsCollection.log('🚀 - data saved to the database', result);
};

//Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  //Open the 'jate' database with version 1
  const jateDb = await openDB('jate', 1);

  //Start a new transaction in read-only mode
  const tx = jateDb.transaction('jate', 'readonly');

  //Retrieve the 'jate' object strore
  const store = tx.objectStore('jate');

  //Retrieve all data from the object store 
  const request = store.getAll();

  //Wait for the request to complete and get the result
  const result = await request;
  console.log('result.value', result);
  //return retrieved data
  return result;
};

initdb();
