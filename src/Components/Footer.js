import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Spacer from './Spacer'

const navigation = [


  { name: 'Home', href: '#Example', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Resume', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
  return (
    <div class="mx-auto">
      <footer class="p-4 bg-myPurple shadow items-center justify-end pb-10 min-h-fit md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" target="_blank" class="flex items-center mb-4 sm:mb-0">
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://aqtrinh.me" target="_blank" class="hover:underline">Abraham Trinh</a>
            </span>  
          </a>
          
          <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Back to the Top</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}