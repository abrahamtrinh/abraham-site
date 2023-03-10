import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { scroller as scroller, animateScroll as scroll } from "react-scroll";

const navigationIn = [
  { name: 'About', href: '#About', current: false, target: "" },
  { name: 'Experience', href: '#Experience', current: false, target: "" },
  { name: 'Projects', href: '#Projects', current: false, target: "" },
]

const navigationOut = [
  { name: 'Resume', href: '/resume.pdf', current: false, target: "_blank" },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abraham-trinh/', current: false, target: "_blank" },
  { name: 'Github', href: 'https://github.com/abrahamtrinh', current: false, target: "_blank" },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="header" className="bg-myPurple-900 sti z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-myPurple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  
                  <a className="text-3xl font-bold tracking-tight font-semibold text-gray-300 sm:text-4xl hover:text-white"
                    onClick={() => {
                      scroll.scrollToTop()
                    }}>
                    Abraham Trinh
                  </a>

                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigationIn.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => {
                          scroller.scrollTo(item.name, {
                            smooth: true,
                        })}}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-myPurple-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        target={item.target}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    
                    {navigationOut.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-myPurple-500 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        target={item.target}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigationIn.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => {
                    scroller.scrollTo(item.name, {
                      smooth: true,
                      offset: -300,
                  })}}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-myPurple-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {navigationOut.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-myPurple-500 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}