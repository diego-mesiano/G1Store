import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Home';
import NotFound from '../pages/NotFound';

const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
  );
  
  export default RouteList;