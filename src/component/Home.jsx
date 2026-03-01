import React, { useState, useRef } from "react";
import "./css/Home.css";
import { sculptures } from "./data/sculptures";

function Home() {
  const [open, setOpen] = useState(false);
  const [activeSculpture, setActiveSculpture] = useState(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const galleryRef = useRef(null);
  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
    setPhotoIndex(
      (i) =>
        (i - 1 + activeSculpture.photos.length) %
        activeSculpture.photos.length
    );
  };

  // ОБРАТИ, яку скульптуру показувати як слайдер (наприклад першу)
  const mainSculpture = sculptures[0];

  return (
    <>
    <section className="first">

        <div className="container">
            <div className="header">
            <h1 className="company-name">
                <span>Watching sculptures,V.K.</span>
            </h1>
            </div>

            <div className="contact-container">
            <p className="contact contact--green">
                <span>email: volodimir.kapula@gmail.com</span>
            </p>

            <p className="contact contact--yellow">
                <span>post number: 77570</span>
            </p>

            <p className="contact contact--red">
                <span>address: Jäppilä Huhtimäentie 307</span>
            </p>
            </div>

            <h4 className="goals">
            <span>
                The company represents the original works of this sculptor. The
                sculptures are made from a variety of materials, using modern
                technologies and materials.
            </span>
            </h4>
            <button className="scroll-btn" onClick={scrollToGallery}>
            ↓ Go to gallery
          </button>
        </div>
    </section>
      <section className="second" ref={galleryRef}>
            <div className="page">
            {/* Заголовок сторінки галереї */}
            <div className="gallery-text" >
                <span>Gallery</span>
            </div>
            <div className="midl">
            <img
                src="./public/images/web-img/layer 1.png"
                alt=""
                className="header-gallery"
            />
            </div>

           {/* ЗАМІСТЬ GRID – одне велике фото зі слайдером */}
          <div className="slider">
            <button
              className="slider-btn slider-btn--prev"
              onClick={() =>
                setPhotoIndex(
                  (i) =>
                    (i - 1 + mainSculpture.photos.length) %
                    mainSculpture.photos.length
                )
              }
            >
              ‹
            </button>

            <img
              src={mainSculpture.photos[photoIndex]}
              alt={mainSculpture.title}
              className="slider-image"
            />

            <button
              className="slider-btn slider-btn--next"
              onClick={() =>
                setPhotoIndex(
                  (i) => (i + 1) % mainSculpture.photos.length
                )
              }
            >
              ›
            </button>
          </div>






        </div>
      </section>
    </>
  );
}

export default Home;
