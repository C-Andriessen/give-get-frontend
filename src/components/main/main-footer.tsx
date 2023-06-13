import Link from "next/link"

const navigation = {
  main: [
    { name: 'Oproep', href: '#' },
    { name: 'Aanbod', href: '#' },
    { name: 'Over ons', href: '#' },
    { name: 'Contact', href: '#' },
  ],
}

const date = new Date();

export default function MainFooter() {
  return (
    <>
      <div className="bg-primary-main py-16 sm:py-24 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 className="inline sm:block lg:inline xl:block">Wil je op de hoogte blijven?</h2>{' '}
            <p className="inline sm:block lg:inline xl:block">Schrijf je in voor onze nieuwsbrief.</p>
          </div>
          <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div className="flex gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                E-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-black/20 sm:text-sm sm:leading-6"
                placeholder="Vul je e-mail in"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-black py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Abonneer
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-white">
              Wij geven om je gegevens. Lees onze{' '}
              <a href="#" className="font-semibold text-white hover:text-indigo-50 underline">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl overflow-hidden py-10 px-6 lg:px-8">
          <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="">
                <Link href={item.href} className="text-sm leading-6 text-white hover:text-gray-200">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-white">
            &copy; {date.getFullYear()} Give & Get, Alle rechten voorbehoud.
          </p>
        </div>
      </footer>
    </>
  )
}

