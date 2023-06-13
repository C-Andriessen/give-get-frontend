import { Fragment, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  UserCircleIcon,
  Cog8ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/20/solid';
import { signOut } from 'next-auth/react';

type NavigationProps = {
  name: string;
  icon: any;
  href?: string;
  onClick?: any;
}

const navigation: NavigationProps[] = [
  { name: 'Account', href: '#', icon: UserCircleIcon },
  { name: 'Instellingen', href: '#', icon: Cog8ToothIcon },
  { name: 'Uitloggen', onClick: signOut, icon: ArrowLeftOnRectangleIcon }
]

type DropdownProps = {
  children: ReactNode
}

export const UserDropdown = ({ children }: DropdownProps) => {
  return (
    <Menu as="div" className="inline-block relative text-left">
      <Menu.Button className="align-middle">
        {children}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-cardBackground shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {navigation.map((item, index) => (
              <Menu.Item key={index}>
                <a
                  href={item.href ?? '#'}
                  onClick={item.onClick}
                  className={'group flex items-center px-4 py-2 text-sm'}
                >
                  <item.icon
                    className="mr-3 h-5 w-5 text-text-primary group-hover:text-text-hover"
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
