import Link from 'next/link';

import Logo from '@/app/ui/icons/logo';

import s from './navbar.module.css';

export default async function Navbar({ ...props }) {

  return (
    <nav className="sticky top-0 bg-black z-40 transition-all duration-150 h-16 md:h-20" {...props}>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className="cursor-pointer rounded-full transform duration-100 ease-in-out" aria-label="Logo">
              <Logo />
            </Link>
            <nav className="ml-3 space-x-2 sm:ml-6">
              <Link href="/" className={s.link}>
                Rain Gard Roofing
              </Link>
            </nav>
          </div>
          <div className="flex justify-end flex-0 space-x-8">
            <div className="hidden sm:block">
              <Link href="/gallery" className={s.link}>
                Gallery
              </Link>
            </div>
            <Link href="/contact" className={s.link}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}