import { Menu, Transition } from '@headlessui/react'
import cx from 'classnames'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { RiMenuFill } from 'react-icons/ri'

import { navItems, siteMetadata } from '@/data'
import { useDarkTheme, useMounted, useScrollTop } from '@/hooks'

import Link from '../link'
import LogoDark from './logo-dark.svg'
import LogoLight from './logo-light.svg'

const Navigation = () => {
  const isTop = useScrollTop()
  const { isDark } = useDarkTheme()
  const { pathname } = useRouter()
  const mounted = useMounted()

  const baseStyle =
    'w-full sticky z-20 top-0 flex items-center justify-between bg-slate-100/30 dark:bg-gray-900/30 backdrop-filter backdrop-saturate-150 backdrop-blur-md firefox:bg-opacity-100 dark:firefox:bg-opacity-100'

  const LogoSvg = isDark ? LogoDark : LogoLight

  return (
    <header
      className={cx(
        baseStyle,
        isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800',
      )}
    >
      <div className="flex items-center py-6 justify-between w-full max-w-6xl mx-auto px-4">
        <Link href="/" aria-label={siteMetadata.author}>
          <LogoSvg className="fill-current h-8" />
        </Link>
        <div className="py-2">
          <nav className="hidden sm:flex sm:gap-6">
            {navItems
              .filter((item) => !item.onlyShowOnDropdownMenu)
              .map(({ path, label }) => (
                <Link
                  key={label}
                  href={path}
                  className={cx(
                    'relative py-1 font-medium after:content-[""] after:absolute after:block after:w-full after:h-[2px] after:bottom-0 after:left-0 after:bg-primary-500 after:hover:scale-x-100 after:scale-x-0 after:origin-top-left after:transition after:ease-in-out after:duration-300',
                    pathname === path ? 'after:scale-x-100' : '',
                  )}
                >
                  {label}
                </Link>
              ))}
          </nav>
          <Menu as="div" className="relative inline-block sm:hidden">
            <>
              <Menu.Button className="rounded-full transition-all hover:bg-slate-200 dark:hover:bg-gray-800">
                {mounted && (
                  <motion.span
                    className="flex h-8 w-8 items-center justify-center text-xl"
                    whileTap={{ scale: 0.5 }}
                    transition={{ duration: 0.1, ease: 'easeIn' }}
                    aria-label="Toggle Menu"
                  >
                    <RiMenuFill />
                  </motion.span>
                )}
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-gray-800 ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {navItems.map(({ path, label, icon: Icon }) => (
                      <Menu.Item key={label} as={Link} href={path}>
                        {({ active }) => (
                          <div
                            className={cx(
                              'text-base px-4 py-2 hover:bg-slate-100 dark:hover:bg-gray-700',
                              active ? 'bg-slate-100 dark:bg-gray-700' : '',
                            )}
                          >
                            <div className="flex flex-row items-center">
                              <Icon className="mr-2" />
                              <span>{label}</span>
                            </div>
                          </div>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </>
          </Menu>
        </div>
      </div>
    </header>
  )
}

export default Navigation