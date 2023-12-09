import Link from 'next/link';

import Logo from '@/app/ui/icons/logo';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6">
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold mr-2"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <span>RGG</span>
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