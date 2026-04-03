import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddListingPage from './pages/AddListingPage';
import ListingsPage from './pages/ListingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/add" element={<AddListingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
