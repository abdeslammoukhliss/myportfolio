import {
  Flutter,
  JavaScript,
  Jest,
  Kotlin,
  Laravel,
  PHP,
  RabbitMq,
  Redis,
  Spring,
  VueJs,
} from '@/components/icons'
import cn from '@/utils/cn'

interface Company {
  name: string
  logo: string
  url: string
  location: string
  workplaceType: 'Remote' | 'Hybrid' | 'On-Site'
  jobType: 'Full-time' | 'Freelance'
}

interface Stack {
  name: string
  icon?: JSX.Element
}

interface Experience {
  company: Company
  role: string
  startDate: string
  endDate: string | null
  stacks: Stack[]
  accomplishments: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    company: {
      name: 'AJICOD',
      logo: '/media/resume/yummybros.png',
      url: 'https://yummybros.com',
      location: 'Morocco',
      workplaceType: 'On-Site',
      jobType: 'Full-time',
    },
    role: 'Mobile Developer ',
    startDate: '2023-07',
    endDate: '2023-09',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel className={cn('h-5 w-5 fill-[#FF2D20]')} />,
      },
      {
        name: 'PHP',
        icon: <PHP className={cn('h-5 w-5 fill-[#777BB4]')} />,
      },
      {
        name: 'Flutter',
        icon: <Flutter className={cn('h-5 w-5 fill-[#777BB4]')} />,
      },
    ],
    accomplishments: [
      'Developed a tutorial and course management application utilizing Flutter and Laravel.',
      'Implemented features for course creation, enrollment, progress tracking, and communication',
      'Utilized Docker for seamless deployment on cloud services or self-hosted servers.',
      'Developed the backend of the tutorial and course management application using Laravel, ensuring efficient data management, robust APIs, and scalability.',
    ],
  },
  {
    company: {
      name: 'MrorccoW3',
      logo: '/media/resume/investree.png',
      url: 'https://investree.id',
      location: 'Meknes',
      workplaceType: 'On-Site',
      jobType: 'Full-time',
    },
    role: 'Mobile Developer Engineer',
    startDate: '2022-4',
    endDate: '2022-6',
    stacks: [
      {
        name: 'Spring',
        icon: <Spring className={cn('h-5 w-5 fill-[#6DB33F]')} />,
      },
      {
        name: 'Kotlin',
        icon: <Kotlin className={cn('h-5 w-5 fill-[#7F52FF]')} />,
      },
      {
        name: 'Vue.js',
        icon: <VueJs className={cn('h-5 w-5 fill-[#4FC08D]')} />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScript className={cn('h-5 w-5 fill-[#F7DF1E]')} />,
      },
      {
        name: 'Jest',
        icon: <Jest className={cn('h-5 w-5 fill-[#C21325]')} />,
      },
      {
        name: 'Laravel',
        icon: <Laravel className={cn('h-5 w-5 fill-[#FF2D20]')} />,
      },
      {
        name: 'PHP',
        icon: <PHP className={cn('h-5 w-5 fill-[#777BB4]')} />,
      },
      {
        name: 'Redis',
        icon: <Redis className={cn('h-5 w-5 fill-[#DC382D]')} />,
      },
      {
        name: 'RabbitMQ',
        icon: <RabbitMq className={cn('h-5 w-5 fill-[#FF6600]')} />,
      },
    ],
    accomplishments: [
      'Engineered a delivery application from inception to deployment, employing Flutter for the frontend and Laravel for the backend, ensuring seamless product tracking and management.',
      'Implemented geolocation APIs to enable accurate tracking of product delivery status, providing users with real-time updates and improving transparency.',
      'Integrated third-party APIs for geocoding and mapping, enhancing the application s routing and navigation capabilities for optimized delivery routes',
      'Utilized push notification APIs to notify users about order updates, ensuring timely communication and enhancing user engagement.',
      'Contributed to the development of technical standards, best practices, and design patterns.',
    ],
  },
  {
    company: {
      name: 'RajiWeb',
      logo: '/media/resume/varnion.png',
      url: 'https://varnion.com',
      location: 'Agadir',
      workplaceType: 'On-Site',
      jobType: 'Full-time',
    },
    role: 'Laravel Developer',
    startDate: '2021-04',
    endDate: '2021-06',
    stacks: [
      {
        name: 'Laravel',
        icon: <Laravel className={cn('h-5 w-5 fill-[#FF2D20]')} />,
      },
      {
        name: 'PHP',
        icon: <PHP className={cn('h-5 w-5 fill-[#777BB4]')} />,
      },

      {
        name: 'JavaScript',
        icon: <JavaScript className={cn('h-5 w-5 fill-[#F7DF1E]')} />,
      },
    ],
    accomplishments: [
      'Engineered the backend system for a web-based car rental application using Laravel, facilitating seamless management of vehicle listings, bookings, and transactions.',
      'Designed and implemented RESTful APIs to support frontend functionality, enabling users to browse available cars, make reservations, and manage their bookings.',
      'Integrated payment gateways for secure online transactions, enhancing the user experience and streamlining the rental process.',
      'Developed an administrative dashboard for managing car inventory, rental agreements, and customer inquiries, improving operational efficiency.',
      'Implemented role-based access control to ensure secure access to sensitive data and features, enhancing system security and user privacy.',
    ],
  },
]
