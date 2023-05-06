import React, { useState } from 'react';

function Pagina1({ setCurrentPage }) {
  const [galeria, defineGaleria] = useState([]);
  const [imagemNumero, defineNumeroImagem] = useState('');

  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  const handleChangeNumeroImagem = (e) => {
    defineNumeroImagem(e.target.value);
  };

  const adicionaImagem = () => {
    const imagem = require(`./galeria/cavalo${imagemNumero}.jpg`);
    defineGaleria([...galeria, imagem]);
    defineNumeroImagem('');
  };

  const removeImagem = () => {
    defineGaleria(galeria.filter((img) => img !== require(`./galeria/cavalo${imagemNumero}.jpg`)));
    defineNumeroImagem('');
  };

  return (
    <div>
      <h2>Página de imagens</h2>
      {galeria.map((img, index) => (
        <img key={index} src={img} alt={`imagem ${index}`} width="250" height="250"></img>
      ))}
      <br />
      <label>Número da imagem(1 a 4): </label>
      <input type="numero" value={imagemNumero} onChange={handleChangeNumeroImagem} />
      <br />
      <button onClick={adicionaImagem}>Inserir imagem</button>
      <br />
      <button onClick={removeImagem}>Remover imagem</button>
      <br />
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

export default Pagina1;
