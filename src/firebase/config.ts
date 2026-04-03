import { initializeApp } from 'firebase/app'; // connect to firebase project
import { getDatabase } from 'firebase/database'; //connect to the database in the firebase project

const firebaseConfig = {
  apiKey: 'AIzaSyAS3sGsWsQVz5x0Wp-OUArkEKX5bkzpzWw',
  authDomain: 'mercy-teamred-project1.firebaseapp.com',
  databaseURL: 'https://mercy-teamred-project1-default-rtdb.firebaseio.com',
  projectId: 'mercy-teamred-project1',
  storageBucket: 'mercy-teamred-project1.firebasestorage.app',
  messagingSenderId: '698040087332',
  appId: '1:698040087332:web:48ed64cb9aaf405555f9b1',
  measurementId: 'G-MNNCQP33Z7',
};

const app = initializeApp(firebaseConfig); // the actual instance
export const db = getDatabase(app); //the db connection instance
