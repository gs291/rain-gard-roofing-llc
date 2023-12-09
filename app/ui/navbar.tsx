import Link from 'next/link';

import Logo from '@/app/ui/icons/logo';

import s from './navbar.module.css';

export default async function Navbar() {

  return (
    <nav className={s.root}>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="hidden ml-6 space-x-2 lg:block">
              <Link href="/" className={s.link}>
                Rain Gard Roofing
              </Link>
            </nav>
          </div>
          <div className="flex justify-end flex-1 space-x-8">
            <Link href="/signin" className={s.link}>
                Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}