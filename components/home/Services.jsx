import Image from 'next/image';
import React from 'react';

export default function Services() {
  const services = [
    { title: 'Glasbewassing', img: '/window-cleaning.png' },
    { title: 'Vloeronderhoud', img: '/floor-cleaning.webp' },
    { title: 'Tapijtreiniging', img: '/carpet-cleaning.webp' },
    { title: 'Interieurverzorging', img: '/house.jpg' },
    { title: 'Zonnepanelen', img: '/clean-solar.jpg' },
    { title: 'Kantoren', img: '/office-cleaning.jpg' },
    { title: 'Scholen', img: '/school.webp' },
    { title: 'Overig', img: '/cleaning.webp' },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto py-20 sm:py-24 lg:py-32">
        <h2 className="text-green-500 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-center">
          Onze Diensten
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-10">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl duration-300 hover:scale-105 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-green-500 text-center">
                {service.title}
              </h3>
              <div className="relative mt-4 h-24 bg-green-100 flex items-center justify-center rounded-lg">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  objectFit="cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
