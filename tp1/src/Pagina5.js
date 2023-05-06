import React, { useState, useEffect } from 'react';

function Pagina5({ setCurrentPage }) {

  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  const [idades, colocaIdades] = useState([]);

  useEffect(() => {
    async function estimulaIdades() {
      const response = await fetch('https://api.agify.io?name[]=Henrique&name[]=Joao&name[]=Gustavo');
      const data = await response.json();
      colocaIdades(data);
    }

    estimulaIdades();
  }, []);

  return (
    <div>
      <h2>Lista com 3 consultas na API que retorna a idade que ela estima de acordo com o nome da pessoa</h2>
      <ul>
        {idades.map(age => (
          <li key={age.name}>
            {age.name} tem {age.age} anos.
          </li>
        ))}
      </ul>
      <br />
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );

}

export default Pagina5;