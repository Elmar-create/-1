import CarCard from "./CarCard";

const cars = [
  {
    id: 1,
    brand: "Porsche",
    model: "911",
    year: 2024,
    country: "Германия",
    image: "https://loremflickr.com/600/400/porsche?lock=1"
  },
  {
    id: 2,
    brand: "BMW",
    model: "M5",
    year: 2023,
    country: "Германия",
    image: "https://loremflickr.com/600/400/bmw?lock=2"
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "AMG GT",
    year: 2024,
    country: "Германия",
    image: "https://loremflickr.com/600/400/mercedes?lock=3"
  },
  {
    id: 4,
    brand: "Audi",
    model: "RS7",
    year: 2023,
    country: "Германия",
    image: "https://loremflickr.com/600/400/audi?lock=4"
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Supra",
    year: 2022,
    country: "Япония",
    image: "https://loremflickr.com/600/400/toyota?lock=5"
  },
  {
    id: 6,
    brand: "Nissan",
    model: "GT-R",
    year: 2023,
    country: "Япония",
    image: "https://loremflickr.com/600/400/nissan?lock=6"
  },
  {
    id: 7,
    brand: "Honda",
    model: "Civic Type R",
    year: 2024,
    country: "Япония",
    image: "https://loremflickr.com/600/400/honda?lock=7"
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang",
    year: 2023,
    country: "США",
    image: "https://loremflickr.com/600/400/ford?lock=8"
  },
  {
    id: 9,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2022,
    country: "США",
    image: "https://loremflickr.com/600/400/chevrolet?lock=9"
  },
  {
    id: 10,
    brand: "Dodge",
    model: "Challenger",
    year: 2023,
    country: "США",
    image: "https://loremflickr.com/600/400/dodge?lock=10"
  },
  {
    id: 11,
    brand: "Ferrari",
    model: "488",
    year: 2022,
    country: "Италия",
    image: "https://loremflickr.com/600/400/ferrari?lock=11"
  },
  {
    id: 12,
    brand: "Lamborghini",
    model: "Huracan",
    year: 2023,
    country: "Италия",
    image: "https://loremflickr.com/600/400/lamborghini?lock=12"
  },
  {
    id: 13,
    brand: "Maserati",
    model: "MC20",
    year: 2023,
    country: "Италия",
    image: "https://loremflickr.com/600/400/maserati?lock=13"
  },
  {
    id: 14,
    brand: "Lexus",
    model: "LC 500",
    year: 2024,
    country: "Япония",
    image: "https://loremflickr.com/600/400/lexus?lock=14"
  },
  {
    id: 15,
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    country: "США",
    image: "https://loremflickr.com/600/400/tesla?lock=15"
  },
  {
    id: 16,
    brand: "Volkswagen",
    model: "Golf R",
    year: 2023,
    country: "Германия",
    image: "https://loremflickr.com/600/400/volkswagen?lock=16"
  },
  {
    id: 17,
    brand: "Subaru",
    model: "WRX STI",
    year: 2022,
    country: "Япония",
    image: "https://loremflickr.com/600/400/subaru?lock=17"
  },
  {
    id: 18,
    brand: "Mazda",
    model: "RX-7",
    year: 2002,
    country: "Япония",
    image: "https://loremflickr.com/600/400/mazda?lock=18"
  },
  {
    id: 19,
    brand: "McLaren",
    model: "720S",
    year: 2023,
    country: "Великобритания",
    image: "https://loremflickr.com/600/400/mclaren?lock=19"
  },
  {
    id: 20,
    brand: "Bugatti",
    model: "Chiron",
    year: 2022,
    country: "Франция",
    image: "https://loremflickr.com/600/400/bugatti?lock=20"
  }
];

function Cars() {
  return (
    <section className="cars" id="cars">

      <h2>Наши автомобили</h2>

      <div className="cars-list">

        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
          />
        ))}

      </div>

    </section>
  );
}

export default Cars;