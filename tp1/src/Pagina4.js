import React, { useState } from 'react';
import mclaren from './images/mclaren.jpg';
import ferrari from './images/ferrari.jpg';
import lamborghini from './images/lamborghini.jpg';
import DefaultCar from './images/carro.jpg';

function Pagina4({ setCurrentPage }, { modelName }) {
  
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  const [carIndex, setCarIndex] = useState(0);
  const [cars, setCars] = useState([
    { name: 'mclaren', image: mclaren, description: 'Esse é o mclaren' },
    { name: 'lamborghini', image: lamborghini, description: 'Esse é o lamborghini' },
    { name: 'ferrari', image: ferrari, description: 'Esse é o ferrari' }
  ]);

  const currentCarName = cars[carIndex].name;

  const handleCarChange = (index) => {
    setCarIndex(index);
  };

  const handleAddCar = () => {
    const carName = document.getElementById('carName').value.trim();
    if (carName !== '') {
      import(`./images/${carName}.jpg`)
        .then((image) => {
          const newCar = { name: carName, image: image.default || DefaultCar, description: `Esse é o ${carName}` };
          setCars([...cars, newCar]);
          document.getElementById('carName').value = ''; // Limpar o campo de texto após adicionar o carro
        })
        .catch(() => {
          const newCar = { name: carName, image: DefaultCar, description: `Esse é o ${carName}` };
          setCars([...cars, newCar]);
          document.getElementById('carName').value = ''; // Limpar o campo de texto após adicionar o carro
        });
    }
  };

  const handleRemoveCar = () => {
    const carName = document.getElementById('carName').value.trim();
    if (carName !== '') {
      const updatedCars = cars.filter((car) => car.name !== carName);
      setCars(updatedCars);
      setCarIndex(0);
      document.getElementById('carName').value = ''; // Limpar o campo de texto após remover o carro
    }
  };

  return (
    <div>
      <h2>É um {currentCarName}</h2>
      <div>
        <p>Isto é um {currentCarName}</p>
        <img
          src={cars[carIndex]?.image || DefaultCar}
          alt={currentCarName}
          onClick={() => alert(cars[carIndex].description)}
        />
        <div>
          {cars.map(
            (car, index) =>
              index !== carIndex && (
                <button key={index} onClick={() => handleCarChange(index)}>
                  {car.name}
                </button>
              )
          )}
        </div>
        <div>
          <input type="text" id="carName" placeholder="Nome do carro" />
          <button onClick={handleAddCar}>Adicionar Carro</button>
          <button onClick={handleRemoveCar}>Remover Carro</button>
        </div>
      </div>
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

export default Pagina4;
