import React, { useState, useEffect } from 'react';
import Pagina2 from './Pagina2';
import Pagina3 from './Pagina3';
import Pagina4 from './Pagina4';
import Pagina5 from './Pagina5';



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

function App() {
  const [currentPage, setCurrentPage] = useState('Main');

  useEffect(() => {
    renderPage();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
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
  
    const renderText = () => {
    switch (currentPage) {
      case 'pagina2':
        return 'Página 2 - Imagens';
      case 'pagina3':
        return 'Página 3 - Frutas';
      case 'pagina4':
        return 'Página 4 - Automóveis';
      case 'pagina5':
        return 'Página 5 - API';
      default:
        return 'Página 1 - Principal';
    }
  };

  return (
    <div>
      <h1>{renderText()}</h1>
      {renderPage()}
    </div>
  );
}

export default App;
