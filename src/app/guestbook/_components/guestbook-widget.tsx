'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import cn from '@/lib/cn'

import Guestbook from './guestbook'
import GuestbookWidgetHeader from './guestbook-widget-header'

interface GuestbookWidgetProps {
  isOpen: boolean
  onClose: () => void
}

const GuestbookWidget = ({ isOpen, onClose }: GuestbookWidgetProps) => {
  return (
    <Transition
      appear
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog
        as="div"
        className={cn('fixed z-20 bottom-12 right-5 shadow-lg')}
        onClose={onClose}
        open={isOpen}
      >
        <div
          className={cn(
            'bg-card py-2 border-muted rounded-md backdrop-blur-2xl shadow-2xl',
            'md:max-w-md',
          )}
        >
          <GuestbookWidgetHeader onClose={onClose} />
          <Guestbook isWidget={true} />
        </div>
      </Dialog>
    </Transition>
  )
}

export default GuestbookWidget
