
import React, {useState} from 'react';

function ListaDeFrutas(){
  const[frutaSelecionada, setfrutaSelecionada] = useState('Maçã');
  const[novaFruta, setnovaFruta] = useState('');
  const[frutas, setfrutas] = useState(['Maçã', 'Uva', 'Banana']);

  const handleChange = (e) => {
    setfrutaSelecionada(e.target.value);
  };

  const handleAddOption = () => {
    setfrutas([...frutas, novaFruta]);
    setnovaFruta('');
  };

  const handleShowSelected = () => {
    alert('A fruta selecionada é '+ frutaSelecionada);
  };
  
  return(
    <div>
      <select value={frutaSelecionada} onChange={handleChange}>
        {frutas.map((option)=> (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Fruta Selecionada: {frutaSelecionada}</p>

      <input
        type = "text"
        value = {novaFruta}
        onChange = {(e) => setnovaFruta(e.target.value)}
        />

        <button onClick = {handleAddOption}>Adicionar Fruta</button>
        <br></br>
        <button onClick = {handleShowSelected}>Mostrar Fruta Selecionada</button>
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
      <ListaDeFrutas/>
      <br></br>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
  
  }
  export default Pagina3;
  
