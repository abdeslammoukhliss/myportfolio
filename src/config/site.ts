interface Author {
  name: string
  url: string
  avatar: string
  email: string
  linkedIn: string
  twitter?: string
}

interface Site {
  url: string
  name: string
  title: string
  description: string
  author: Author
  keywords?: string[]
}

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://abdeslam-moukhliss.vercel.app/'
    : 'http://localhost:3000'

const site: Site = {
  url: BASE_URL,
  name: 'Abdeslam Moukhliss portfolio',
  title: 'Abdeslam Moukhliss',
  description:
    'Passionate Backend engineer who focused on solving problems with digital products.',
  author: {
    name: 'Abdesalm Moukhliss',
    url: 'https://abdeslam-moukhliss.vercel.app/',
    email: 'abdomokh38@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/abdeslam-moukhliss-aa277919a/',
    avatar: '/media/bonabrian/abdeslam.png',
  },
  keywords: [
    'abdeslam',
    'abdeslam moukhliss',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
  ],
}

export default site
