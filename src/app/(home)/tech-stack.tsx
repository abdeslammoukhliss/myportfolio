'use client'

import { m } from 'framer-motion'

import {
  Docker,
  JavaScript,
  Kotlin,
  Laravel,
  MySQL,
  NextJs,
  PHP,
  Redis,
  Spring,
  TypeScript,
} from '@/components/icons'
import { Tooltip } from '@/components/ui'
import cn from '@/utils/cn'

interface Stack {
  title: string
  colorClass: string
  icon: JSX.Element
}

const stacks: Stack[] = [
  {
    title: 'TypeScript',
    colorClass: 'hover:text-[#3178C6]',
    icon: <TypeScript className={cn('h-6 w-6')} />,
  },
  {
    title: 'Next.js',
    colorClass: 'hover:text-black dark:hover:text-white',
    icon: <NextJs className={cn('h-6 w-6')} />,
  },
  {
    title: 'Javascript',
    colorClass: 'hover:text-[#F7DF1E]',
    icon: <JavaScript className={cn('h-6 w-6')} />,
  },

  {
    title: 'Kotlin',
    colorClass: 'hover:text-[#7F52FF]',
    icon: <Kotlin className={cn('h-6 w-6')} />,
  },
  {
    title: 'Spring',
    colorClass: 'hover:text-[#6DB33F]',
    icon: <Spring className={cn('h-6 w-6')} />,
  },
  {
    title: 'PHP',
    colorClass: 'hover:text-[#777BB4]',
    icon: <PHP className={cn('h-6 w-6')} />,
  },
  {
    title: 'Laravel',
    colorClass: 'hover:text-[#FF2D20]',
    icon: <Laravel className={cn('h-6 w-6')} />,
  },
  {
    title: 'Redis',
    colorClass: 'hover:text-[#DC382D]',
    icon: <Redis className={cn('h-6 w-6')} />,
  },

  {
    title: 'MySQL',
    colorClass: 'hover:text-[#4479A1]',
    icon: <MySQL className={cn('h-6 w-6')} />,
  },
  {
    title: 'Docker',
    colorClass: 'hover:text-[#4479A1]',
    icon: <Docker className={cn('h-6 w-6')} />,
  },
]

const TechStack = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  }

  return (
    <div className={cn('mt-16', 'lg:mt-20')}>
      <m.p
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.4 }}
        className={cn('mb-2 text-sm text-secondary-foreground')}
      >
        Tech Stack and Tools
      </m.p>
      <m.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.5, staggerChildren: 0.015 }}
        className={cn('flex flex-wrap gap-2')}
      >
        {stacks.map(({ title, colorClass, icon }) => (
          <Tooltip key={title} title={title}>
            <m.div
              className={cn(
                'text-muted-foreground transition duration-200',
                colorClass,
              )}
              variants={animation}
            >
              {icon}
            </m.div>
          </Tooltip>
        ))}
      </m.div>
    </div>
  )
}

export default TechStack
