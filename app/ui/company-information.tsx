import Link from 'next/link';

import Logo from '@/app/ui/icons/logo';

export default function CompanyInformation({ ...props }) {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:grid-cols-2 lg:text-left" {...props}>
      <Link
        href="/gallery"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Gallery{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          View our work and gain insight on future projects.
        </p>
      </Link>

      <Link
        href="/contact"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Contact{' '}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Contact us to recieive an estimate!
        </p>
      </Link>
    </div>
  );
}