import { useNavigate } from 'react-router-dom';

import AddListing from '../components/addListing';

const AddListingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/')}>← Back</button>
      <AddListing
        onSuccess={() => {
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }}
      />
    </div>
  );
};

export default AddListingPage;
