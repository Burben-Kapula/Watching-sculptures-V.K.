// src/data/sculptures.js
const BASE = import.meta.env.BASE_URL;  // ← додай ЦЕ на самому верху файлу

export const sculptures = [
  {
    id: 1,
    title: 'Bear',
    opis: `Karhu.

Karhupatsas on valmistettu betonista ja metallista. Patsaan paino on noin 350 kg ja se on valmistettu vuonna 2025. Teos on yksittäinen kappale.

Valmistettu Suomessa.

Valmistusmateriaali:
– Art-betoni (malli SAKU), joka säilyttää hyvin värin ja kiillon. Maali on CE-hyväksytty betonipintojen suojaamiseen.
– Teräsputki 250 x 250 mm
– Metallilanka 3 mm
– Muoviverkko.`,
    thumb: [`${BASE}images/3.JPG`],          // ← ТУТ теж через BASE
    photos: [
      `${BASE}images/second.png`,
      `${BASE}images/3.JPG`,
      `${BASE}images/main-bear.png`,
      `${BASE}images/4.png`,
      `${BASE}images/5.png`,
      `${BASE}images/6.png`,
      `${BASE}images/last.avif`,
    ],
  },

];
