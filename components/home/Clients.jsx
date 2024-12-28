import Image from 'next/image';
import Link from 'next/link';

export default function Clients() {
  const clients = [
    {
      name: 'kdveigenwijsje',
      logo: '/logo-eigenwijsje.png',
      link: 'https://kdveigenwijsje.nl/',
    },
    {
      name: 'humankind',
      logo: '/logo-humankind.svg',
      link: 'https://www.humankind.nl/vestigingen/lichtenvoorde/bso-de-zandschoppe',
    },
    {
      name: 'topparken',
      logo: '/logo-topparken.png',
      link: 'https://www.topparken.nl/residence-lichtenvoorde',
    },
    {
      name: 'hubresorts',
      logo: '/logo-hub.svg',
      link: 'https://www.hubresortsverkoop.nl/de-fontein',
    },
  ];

  return (
    <section id="clients" className="bg-sky-200">
      <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto py-8 sm:py-10 lg:py-12 text-center">
        <h2 className="text-sky-600 font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-wide text-center">
          Onze Klanten
        </h2>
        <p className="text-sky-500 mt-8">
          Wij zijn trots om samen te werken met enkele toonaangevende klanten.
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center mt-8">
          {clients.map((client, index) => (
            <li key={index}>
              <Link
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={320}
                  height={320}
                  className="h-16 w-auto object-contain duration-300 hover:scale-105 transition-transform"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
