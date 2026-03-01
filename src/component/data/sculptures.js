// src/data/sculptures.js
const BASE = import.meta.env.BASE_URL;  // ← додай ЦЕ на самому верху файлу

export const sculptures = [
  {
    id: 1,
    title: 'Bear',
    opis: `Bear. The bear statue is made of concrete and metal. The statue weighs approximately 350 kg and was made in 2025. The work is a single piece. Made in Finland. Manufacturing materials: – Art concrete (model SAKU), which retains its color and shine well. The paint is CE-approved for protecting concrete surfaces. – Steel pipe 250 x 250 mm – Metal wire 3 mm – Plastic mesh.

`,
    thumb: [`${BASE}images/3.JPG`],          // ← ТУТ теж через BASE
    photos: [
      `${BASE}images/last.avif`,
      `${BASE}images/second.png`,
      `${BASE}images/3.JPG`,
      `${BASE}images/main-bear.png`,
      `${BASE}images/4.png`,
      `${BASE}images/5.png`,
      `${BASE}images/6.png`,
    ],
  },

];
