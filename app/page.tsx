'use client'
import HeaderImage from '@/app/ui/header-image';
import CompanyInformation from '@/app/ui/company-information';
import ContactForm from './ui/contact-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 pb-24 md:px-10 xl:20">
      <HeaderImage />
      <CompanyInformation />
      <ContactForm />
    </main>
  )
}
