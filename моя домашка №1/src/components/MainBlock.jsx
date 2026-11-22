import { useState } from "react";
import Cars from "./Cars";

function MainBlock() {
  const [likes, setLikes] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <main className="main" id="home">

      <section className="welcome">
        <h2>Добро пожаловать в AUTO WORLD!</h2>

        <p>
          Здесь ты можешь познакомиться
          с интересными автомобилями со всего мира.
        </p>
      </section>

      <section className="featured-car">

        <h2>Автомобиль дня</h2>

        <div className="car-card">

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
            alt="Porsche 911"
          />

          <h3>Porsche 911</h3>

          <p>
            Легендарный спортивный автомобиль
            с красивым дизайном и высокой мощностью.
          </p>

          <button onClick={() => setLikes(likes + 1)}>
            ❤️ Нравится: {likes}
          </button>

          <button onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? "Скрыть" : "Подробнее"}
          </button>

          {showInfo && (
            <div className="info">

              <h3>Информация об автомобиле</h3>

              <p>Марка: Porsche</p>
              <p>Модель: 911</p>
              <p>Тип: Спортивный автомобиль</p>
              <p>Страна: Германия</p>

            </div>
          )}

        </div>

      </section>

      <Cars />

    </main>
  );
}

export default MainBlock;