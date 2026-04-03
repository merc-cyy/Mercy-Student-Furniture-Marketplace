import { useEffect, useState } from 'react';

import { getAllListings } from '../firebase/database';
import { Listing } from '../types';
import Card from './Card';

const GetListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getAllListings((res) => {
      if (res.status === 200) {
        const data = JSON.parse(res.message as string);
        if (data) {
          // convert the object into an array
          const listingsArray = Object.values(data) as Listing[];
          setListings(listingsArray);
        }
      } else {
        setError(res.message as string);
      }
    });
  }, []);

  return (
    <div>
      <h2>Listings</h2>

      {error && <p>❌ {error}</p>}

      {listings.length === 0 ? (
        <p>No listings yet!</p>
      ) : (
        listings.map((listing, index) => <Card key={index} listing={listing} />)
      )}
    </div>
  );
};

export default GetListings;
