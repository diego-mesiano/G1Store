import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNos from '../pages/SobreNos';
import Main from '../pages/Home';
import NotFound from '../pages/NotFound';
import Produtos from '../pages/Produtos'


const RouteList = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/produto" element={<Produtos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default RouteList;