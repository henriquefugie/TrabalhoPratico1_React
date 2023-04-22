import React, { useState, useEffect } from 'react';
import Pagina1 from './Pagina1';


function MainPage({ setCurrentPage }) {
  const acessaPagina = (pagina) => {
    setCurrentPage(pagina);
    window.history.pushState({ page: pagina }, pagina, `/${pagina}`);
  };

  return (
    <div>
      <h1>Página Principal</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => acessaPagina('pagina1')}>Página 1</button>
          </li>
          <li>
            <button onClick={() => acessaPagina('pagina2')}>Página 2</button>
          </li>
          <li>
            <button onClick={() => acessaPagina('pagina3')}>Página 3</button>
          </li>
          <li>
            <button onClick={() => acessaPagina('pagina4')}>Página 4</button>
          </li>
          <li>
            <button onClick={() => acessaPagina('pagina5')}>Página 5</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Pagina2({ setCurrentPage }) {
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  return (
    <div>
      <h2>Página 2</h2>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

function Pagina3({ setCurrentPage }) {
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  return (
    <div>
      <h2>Página 3</h2>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

function Pagina4({ setCurrentPage }) {
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  return (
    <div>
      <h2>Página 4</h2>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

function Pagina5({ setCurrentPage }) {
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  return (
    <div>
      <h2>Página 5</h2>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('Main');

  useEffect(() => {
    renderPage();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'pagina1':
        return <Pagina1 setCurrentPage={setCurrentPage} />;
      case 'pagina2':
        return <Pagina2 setCurrentPage={setCurrentPage} />;
      case 'pagina3':
        return <Pagina3 setCurrentPage={setCurrentPage} />;
      case 'pagina4':
        return <Pagina4 setCurrentPage={setCurrentPage} />;
      case 'pagina5':
        return <Pagina5 setCurrentPage={setCurrentPage} />;
      default:
        return <MainPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;