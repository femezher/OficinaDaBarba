import React from 'react';
import FrameComponent from './components/FrameComponent';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      {/* Ícone de Acessibilidade, Menu e Logo */}
      <FrameComponent />

      {/* Conteúdo da página */}
      <Outlet />
    </div>
  );
};

export default Layout;
