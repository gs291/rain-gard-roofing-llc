import Link from 'next/link';

import Logo from '@/app/ui/icons/logo';

export default function Footer({ ...props }) {
  return (
    <footer className="mx-auto max-w-[1920px] px-6" {...props}>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row">
        <div className="flex flex-col items-center text-center sm:flex-row">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold mb-2 sm:mb-0 sm:mr-2"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span>RGR</span>
          </Link>
          <span>
            &copy; {new Date().getFullYear()} Rain Gard Roofing LLC. All rights reserved.
          </span>
        </div>
        <div className="flex items-center">
          <span>Crafted by</span>
          <a href="https://gregsanchez.info" aria-label="Vercel.com Link" className="ml-2">
            <div className="font-bold text-lg">
              Gregory Sanchez
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}