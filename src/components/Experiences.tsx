import Image from 'next/image'

import { experiences } from '@/data/experiences'
import siteMetadata from '@/data/siteMetadata'

import Divider from './Divider'
import Link from './Link'

const Experiences = () => {
  return (
    <>
      <ol className='relative border-l border-gray-200 dark:border-gray-800 list-none'>
        {experiences.map((experience) => (
          <li key={experience.organization.name} className='mb-8 ml-3 sm:ml-6'>
            <span className='flex absolute mt-0 -left-4 justify-center items-center w-8 h-8 rounded-full ring-8 ring-gray-200 dark:ring-gray-900'>
              <Image
                src={experience.organization.logo}
                alt={experience.organization.name}
                layout='fill'
                className='rounded-full'
              />
            </span>
            <span className='flex flex-col md:flex-row items-start md:items-center justify-between mb-1 gap-2'>
              <h3 className='text-lg lg:text-xl font-semibold mt-0'>
                {experience.role}
                <Link
                  href={experience.organization.url}
                  className='no-underline'
                >
                  {`@${experience.organization.name}`}
                </Link>
              </h3>
            </span>
            <p className='text-sm leading-none text-gray-400 dark:text-gray-500'>
              {experience.date}
            </p>
            <ul>
              {experience.accomplishments.map((accomplishment) => (
                <li key={accomplishment} className='text-base'>
                  {accomplishment}
                </li>
              ))}
            </ul>
            <Divider />
          </li>
        ))}
      </ol>
      <div className='mt-14'>
        <p className='text-gray-400 dark:text-gray-600'>
          Last updated at{' '}
          <time dateTime='2022-08-13 22:00:00'>
            {new Date('2022-08-13 22:00:00').toLocaleDateString(
              siteMetadata.locale,
              {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              },
            )}
          </time>
        </p>
      </div>
    </>
  )
}

export default Experiences
