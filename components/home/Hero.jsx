import Link from 'next/link';

export default function Hero() {
  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 min-h-[calc(100vh-112px)]">
      <h1 className="text-green-500 font-extrabold text-3xl sm:text-4xl lg:text-6xl tracking-tight text-center">
        Beste schoonmaakservice voor uw huis en bedrijf
      </h1>
      <p className="mt-6 text-base sm:text-lg text-slate-600 text-center max-w-3xl mx-auto">
        Wij bieden hoogwaardige schoonmaakdiensten voor zowel residentiële als
        commerciële ruimtes. Vertrouw op ons voor een grondige en betrouwbare
        schoonmaak die aan al uw verwachtingen voldoet.
      </p>
      <Link
        className="flex items-center justify-center w-fit mt-6 sm:mt-10 text-sm bg-sky-500 hover:bg-sky-400 text-white font-semibold mx-auto h-12 px-6 rounded-lg"
        href="#contact"
      >
        Neem contact op voor een offerte
      </Link>
      <div className="bg-[url('/Shiny-overlay.svg')] absolute left-0 top-0 -z-10 w-full min-h-screen"></div>
    </div>
  );
}
