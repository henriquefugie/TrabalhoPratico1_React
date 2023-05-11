import React, { useState } from 'react';

function Pagina4({ setCurrentPage }) {
  const PaginaPrincipal = () => {
    setCurrentPage('Main');
    window.history.pushState({ page: 'Main' }, 'Main', '/');
  };

  const [carIndex, setCarIndex] = useState(null);
  const [cars, setCars] = useState([]);

  const currentCar = cars[carIndex];

  const handleCarChange = (index) => {
    setCarIndex(index);
  };

  const handleAddCar = () => {
    const carName = document.getElementById('carName').value.trim();
    if (carName !== '') {
      import(`./images/${carName}.jpg`)
        .then((image) => {
          const newCar = { name: carName, image: image.default, description: `Esse é o ${carName}` };
          setCars([...cars, newCar]);
          if (carIndex === null) {
            setCarIndex(0);
          }
          document.getElementById('carName').value = '';
        })
        .catch(() => {
          const newCar = { name: carName, image: null, description: `Esse é o ${carName}` };
          setCars([...cars, newCar]);
          if (carIndex === null) {
            setCarIndex(0);
          }
          document.getElementById('carName').value = '';
        });
    }
  };

  const handleRemoveCar = () => {
    const carName = document.getElementById('carName').value.trim();
    if (carName !== '') {
      const updatedCars = cars.filter((car) => car.name !== carName);
      setCars(updatedCars);
      setCarIndex(updatedCars.length > 0 ? 0 : null);
      document.getElementById('carName').value = '';
    }
  };

  return (
    <div>
      {currentCar && (
        <div>
          <h2>É um {currentCar.name}</h2>
          <br />
          <div>
            <p>Isto é um {currentCar.name}</p>
            {currentCar.image && (
              <img
                src={currentCar.image}
                alt={currentCar.name}
                onClick={() => alert(currentCar.description)}
                style={{ maxWidth: '200px' }}
              />
            )}
            <div>
              <br />
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
        </div>
      )}
      <div>
        <br />
        <input type="text" id="carName" placeholder="Nome do carro" />
        <button onClick={handleAddCar}>Adicionar Carro</button>
        <button onClick={handleRemoveCar}>Remover Carro</button>
      </div>
      <br />
      <button onClick={PaginaPrincipal}>Voltar para a página principal</button>
    </div>
  );
}

export default Pagina4;
