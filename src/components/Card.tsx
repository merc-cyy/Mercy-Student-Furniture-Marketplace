import { Listing } from '../types';

interface CardProps {
  listing: Listing;
}

const Card = ({ listing }: CardProps) => {
  return (
    <div>
      <img src={listing.imageUrl} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>{listing.furnitureType}</p>
      <p>${listing.price}</p>
      <p>{listing.condition}</p>
      <p>{listing.location}</p>
      <p>{listing.deliveryMethod}</p>
    </div>
  );
};

export default Card;
