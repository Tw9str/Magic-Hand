import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const links = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Diensten',
      href: '#services',
    },
    {
      title: 'Contact',
      href: '#contact',
    },
  ];
  return (
    <header className="px-4 sm:px-6 md:px-8 pt-6 lg:pt-8 flex items-center justify-between h-28">
      <Link href="/">
        <Image
          src="/eps-file.svg"
          alt="Magic hand schoonmaakdienst"
          width={80}
          height={80}
        />
      </Link>
      <nav>
        <ul className="flex items-center justify-center gap-4">
          {links.map((link) => {
            return (
              <li key={link.title}>
                <Link
                  className="text-green-500 font-semibold hover:underline"
                  href={link.href}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
