import React, { useState } from "react";
import "./css/Home.css";
import { sculptures } from "./data/sculptures";

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

  return (
    <>
      <div className="container">
        <h1 className="company-name">
          <span>Watching sculptures, V.K.</span>
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
          <span>main goals</span>
        </h2>
      </div>

      <div className="page">
        {/* Заголовок сторінки галереї */}
        <h1>Gallery</h1>

        {/* Сітка карток зі скульптурами */}
        <div className="grid">
          {sculptures.map((s) => (
            <div
              key={s.id}
              className="card"
              onClick={() => handleOpen(s)}
            >
              <img src={s.thumb} alt={s.title} />
              <h3>{s.title}</h3>
            </div>
          ))}
        </div>

        {/* Модалка */}
        {open && activeSculpture && (
          <div className="modal-backdrop" onClick={handleClose}>
            <div
              className="modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close" onClick={handleClose}>
                ×
              </button>

              <h2>{activeSculpture.title}</h2>
              <p className="opis">{activeSculpture.opis}</p>

              {/* Картинка + стрілки */}
              <div className="modal-image-wrapper">
                <button onClick={prevPhoto}>‹</button>

                <img
                  src={activeSculpture.photos[photoIndex]}
                  alt=""
                />

                <button onClick={nextPhoto}>›</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
