import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const socials = [{ name: 'Facebook', href: "https://www.facebook.com/people/Blueberries-Music/100088449282150/" }, { name: 'YouTube', href: "https://www.youtube.com/@blueberries_music" }, { name: "Instagram", href: "https://www.instagram.com/blueberries.music/" }, { name: "TikTok", href: "https://www.tiktok.com/@blueberriesmusic" }]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#songs">Songs</MobileNavLink>
            <MobileNavLink href="/#performances">Performances</MobileNavLink>
            <MobileNavLink href="/#faq">FAQ</MobileNavLink>
            <MobileNavLink href="/team">The Team</MobileNavLink>
            <Popover className="relative">
              <Popover.Button className="flex w-full p-2">
                Socials
                <ChevronDownIcon className="inline-block h-5 w-5  text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                  {socials.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="block rounded-lg px-3 py-2"
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="pt-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/#songs">Songs</NavLink>
              <NavLink href="/#performances">Performances</NavLink>
              <NavLink href="/#faq">FAQ</NavLink>
              <NavLink href="/team">The Team</NavLink>
              <Popover className="relative">
                <Popover.Button className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Socials
                  <ChevronDownIcon className="inline-block h-5 w-5  text-gray-400" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute text-center -left-8 top-full z-10 mt-3 w-40 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                    {socials.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="block rounded-lg py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </Popover.Panel>
                </Transition>
              </Popover>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="-mr-1 md:hidden">
            <MobileNavigation />
          </div>
        </nav>
      </Container>
    </header>
  )
}
