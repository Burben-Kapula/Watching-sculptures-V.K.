import React from "react";
import "./css/Home.css"; 
import { sculptures } from './data/sculptures';
import { useState } from 'react';
function Home() {
const [open, setOpen] = useState(false);
  const [activeSculpture, setActiveSculpture] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpen = (sculpture) => {
    setActiveSculpture(sculpture);
    setPhotoIndex(0);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveSculpture(null);
  };

  const nextPhoto = () => {
    if (!activeSculpture) return;
    setPhotoIndex((i) => (i + 1) % activeSculpture.photos.length);
  };

  const prevPhoto = () => {
    if (!activeSculpture) return;
    setPhotoIndex((i) =>
      (i - 1 + activeSculpture.photos.length) %
      activeSculpture.photos.length
    );
  };
  return (<>
  <div 
    className="container">
        <h1 className="company-name">
            <span>
                Watching sculptures,V.K.
            </span>
        </h1>
        <div className="contact-container">
            <p className="contact">
                <span>email: volodimir.kapula@gmail.com</span>
            </p>
            <p className="contact">
                <span>post number: 77570</span>
            </p>
            <p className="contact">
                <span>address: Jäppilä Huhtimäentie 307</span>
            </p>
        </div>                
        <h2 className="goals">
            <span>
                main goals
            </span>
        </h2>
    </div>
    
        <div className="page">
    {/* Заголовок сторінки галереї */}
    <h1>Gallery</h1>

    {/* Сітка карток зі скульптурами */}
    <div className="grid">
        {/* Обходимо масив sculptures і для кожної скульптури рендеримо картку */}
        {sculptures.map((s) => (
        <div
            key={s.id}             // унікальний ключ для React
            className="card"
            onClick={() => handleOpen(s)} // при кліку відкриваємо модалку з цією скульптурою
        >
            {/* Превʼю зображення скульптури */}
            <img src={s.thumb} alt={s.title} />
            {/* Назва скульптури під картинкою */}
            <h3>{s.title}</h3>
        </div>
        ))}
    </div>

    {/* Модалка (вікно) показується тільки якщо open === true і є активна скульптура */}
    {open && activeSculpture && (
        // Затемнений фон позаду модалки, кліком по ньому закриваємо модалку
        <div className="modal-backdrop" onClick={handleClose}>
        {/* Власне вікно модалки, зупиняємо "пробивання" кліку, щоб не закривалось при кліку всередині */}
            <div
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Кнопка закриття модалки (хрестик) */}
                <button className="close" onClick={handleClose}>
                ×
                </button>

                {/* Заголовок модалки – назва активної скульптури */}
                <h2>{activeSculpture.title}</h2>
                <p className="opis">{activeSculpture.opis}</p>

                {/* Область з великою картинкою і кнопками перелистування фото */}
                <div className="modal-image-wrapper">
                {/* Кнопка перейти до попереднього фото */}
                <button onClick={prevPhoto}>‹</button>

                {/* Поточне фото з масиву photos за індексом photoIndex */}
                <img
                    src={activeSculpture.photos[photoIndex]}
                    alt=""
                />

                {/* Кнопка перейти до наступного фото */}
                <button onClick={nextPhoto}>›</button>
                
            </div>
        </div>
        </div>
    )}
    </div>



</>
)
}

export default Home;
