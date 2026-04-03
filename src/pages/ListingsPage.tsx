import { useNavigate } from 'react-router-dom';

import GetListings from '../components/getListings';

const ListingsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Furniture Marketplace</h1>
      <button onClick={() => navigate('/add')}>+ Add Listing</button>
      <GetListings />
    </div>
  );
};

export default ListingsPage;
