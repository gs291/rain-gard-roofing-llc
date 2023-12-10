import Image from 'next/image';

export default function HeaderImage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center items-center md:min-h-[calc(100vh-5rem)]">
      <div className="max-w-5xl relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Welcome
        </h1>
        <p className="mb-6 text-lg font-normal text-center lg:text-xl sm:px-16 xl:px-48">
          Here at Rain Gard Roofing we focus on fixing roofs, creating concrete sections, and *place holder example* to unlock long-term value for your property.
        </p>
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>
    </div>
  );
}