import React, { useState } from 'react';
import mclaren from './images/mclaren.jpg'; // importa a imagem do carro 1
import ferrari from './images/ferrari.jpg'; // importa a imagem do carro 2
import lamborghini from './images/lamborghini.jpg'; // importa a imagem do carro 3
import DefaultCar from './images/carro.jpg'; // imagem padrão para carros não encontrados

function Pagina4({ setCurrentPage }, { modelName }) {
  const [carIndex, setCarIndex] = useState(0); // estado que guarda o índice do carro a ser exibido
  const [cars, setCars] = useState([
    { name: 'mclaren', image: mclaren, description: 'Esse é o $(name)' },
    { name: 'lamborghini', image: lamborghini, description: 'Esse é o Modelo B' },
    { name: 'ferrari', image: ferrari, description: 'Esse é o Modelo C' }
  ]);

  const currentCarName = cars[carIndex].name; // guarda o nome do modelo do carro atual

  const handleCarChange = (index) => {
    setCarIndex(index);
  };

  const handleAddCar = (event) => {
    event.preventDefault();
    const carName = event.target.carName.value.trim();

    if (carName === '') {
      return;
    }

    let imagemadd;
    try {
      imagemadd = require(`./images/${carName}.jpg`);
    } catch (error) {
      imagemadd = DefaultCar;
    }

    setCars([...cars, { name: carName, image: imagemadd, description: `Este é o ${carName}.` }]);

  };

  const handleRemoveCar = () => {
    const carName = document.getElementById('removeCarName').value.trim();
  
    if (!carName) {
      return;
    }
  
    const carIndex = cars.findIndex(car => car.name === carName);
  
    if (carIndex === -1) {
      document.getElementById('removeCarName').value = '';
      return;
    }
  
    const newCars = [...cars];
    newCars.splice(carIndex, 1);
    setCars(newCars);
    setCarIndex(0);
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
      </div>
      <form onSubmit={handleAddCar}>
        <label>
          Nome do carro:
          <input type="text" name="carName" />
        </label>
        <button type="submit">Adicionar carro</button>
        <button onClick={handleRemoveCar}>Remover carro</button>
      </form>
    </div>
  );
}

export default Pagina4;