import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'Diensten', href: '#services' },
    { title: 'Contact', href: '#contact' },
  ];

  const socials = [
    {
      platform: 'Facebook',
      href: '/',
    },
    {
      platform: 'Instagram',
      href: '/',
    },
    {
      platform: 'LinkedIn',
      href: '/',
    },
  ];

  return (
    <footer className="bg-green-600 text-white">
      <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div>
            <h3 className="text-lg font-bold">Magic Hand Schoonmaakdienst</h3>
            <p className="mt-4 text-sm">
              Wij zijn gespecialiseerd in hoogwaardige schoonmaakdiensten voor
              particulieren en bedrijven. Neem contact met ons op voor meer
              informatie.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Navigatie</h3>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="hover:underline">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold">Volg Ons</h3>
            <ul className="mt-4 flex space-x-4">
              {socials.map((social) => (
                <li key={social.platform}>
                  <Link
                    className="duration-300 hover:opacity-80"
                    href={social.href}
                    target="_blank"
                  >
                    {social.platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="mt-12 border-t border-green-500 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Magic Hand Schoonmaakdienst. Alle
            rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
