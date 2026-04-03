import { useState } from 'react';

import { addListing } from '../firebase/database';
import { Listing } from '../types';

const PLACEHOLDER_IMAGE = 'https://placehold.co/400x300?text=No+Image';

const AddListing = () => {
  const [image, setImage] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [furnitureType, setFurnitureType] = useState<string>('tables');
  const [price, setPrice] = useState<number>(0);
  const [condition, setCondition] = useState<string>('new');
  const [location, setLocation] = useState<string>('');
  const [deliveryMethod, setDeliveryMethod] = useState<string>('pickup');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async () => {
    const listing: Listing = {
      imageUrl: image || PLACEHOLDER_IMAGE,
      title,
      description,
      furnitureType,
      price,
      condition,
      location,
      deliveryMethod,
      userId: 'user_001', // hardcoded for now until we add auth
      createdAt: Date.now(),
    };

    const res = await addListing(listing);
    if (res.status === 200) {
      setMessage(`✅ Listing added! Key: ${res.message}`);
    } else {
      setMessage(`❌ Error: ${res.message}`);
    }
  };

  return (
    <div>
      <h2>Add a Listing</h2>

      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={furnitureType} onChange={(e) => setFurnitureType(e.target.value)}>
        <option value="tables">Tables</option>
        <option value="chairs">Chairs</option>
        <option value="sofas">Sofas</option>
        <option value="beds">Beds</option>
        <option value="storage">Storage</option>
        <option value="other">Other</option>
      </select>

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />

      <select value={condition} onChange={(e) => setCondition(e.target.value)}>
        <option value="new">New</option>
        <option value="used - good">Used - Good</option>
        <option value="used - fair">Used - Fair</option>
      </select>

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <select value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
        <option value="both">Both</option>
      </select>

      <button onClick={handleSubmit}>Add Listing</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AddListing;
