import Link from 'next/link';
import { PhoneIcon, WhatsAppIcon } from './Icons';

export default function Socials() {
  return (
    <ul className="flex items-center justify-center gap-6 mt-4 py-2">
      <li>
        <Link href="tel:+31644146666">
          <PhoneIcon className="duration-300 hover:scale-105" />
        </Link>
      </li>
      <li>
        <Link
          className="group"
          href="https://wa.me/31644146666"
          target="_blank"
        >
          <WhatsAppIcon className="duration-300 hover:scale-105" />
        </Link>
      </li>
    </ul>
  );
}
