import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Magic Hand Schoonmaakservice ',
  description:
    'Wij bieden hoogwaardige schoonmaakdiensten voor zowel residentiële als commerciële ruimtes. Vertrouw op ons voor een grondige en betrouwbare schoonmaak die aan al uw verwachtingen voldoet.',
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
