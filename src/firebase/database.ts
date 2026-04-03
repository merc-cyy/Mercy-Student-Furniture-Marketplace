// hosts all the backend logic and db functions

import { push, ref } from 'firebase/database'; // import the functions we need to interact with the db

import { DBResponse, Listing } from '../types'; // import the listing type we defined in the types file
import { db } from './config'; // import the db connection instance from the config file

// function to add a new listing to the db
export const addListing = async (listing: Listing): Promise<DBResponse> => {
  try {
    const newListing = await push(ref(db, 'listings'), listing);
    const res: DBResponse = {
      status: 200,
      message: newListing.key || '',
    };
    console.log(res);
    return res;
  } catch (error: unknown) {
    const res: DBResponse = {
      status: 500,
      message: error instanceof Error ? error.message : 'An unknown error occurred',
    };
    return res;
  }
};
