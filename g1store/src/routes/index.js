import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SobreNos from '../pages/SobreNos';
import Main from '../pages/Home';
import NotFound from '../pages/NotFound';
import Produtos from '../pages/Produtos'
import Produto from '../pages/Produto'
import CarrinhoContextProvider from '../contexts/CarrinhoContext';


const RouteList = () => (
  <BrowserRouter>
    <CarrinhoContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobrenos" element={<SobreNos />} />
        <Route path="/produtos/:produtoId" element={<Produto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CarrinhoContextProvider>
  </BrowserRouter>
);

export default RouteList;