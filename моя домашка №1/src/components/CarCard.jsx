function CarCard({ car }) {

  function handleClick() {
    console.log(car);
  }

  return (
    <div className="car-card" onClick={handleClick}>

      <img
        src={car.image}
        alt={`${car.brand} ${car.model}`}
      />

      <h3>
        {car.brand} {car.model}
      </h3>

      <p>Год выпуска: {car.year}</p>

      <p>Страна: {car.country}</p>

    </div>
  );
}

export default CarCard;