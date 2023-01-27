import { motion } from 'framer-motion'
import type { InferGetStaticPropsType } from 'next'

import Divider from '@/components/Divider'
import FeaturedProjects from '@/components/FeaturedProjects'
import Introduction from '@/components/Introduction'
import Link from '@/components/Link'
import PageSeo from '@/components/PageSeo'
import { PostCard } from '@/components/PostCard'
import { getFeaturedProjects, getRecentPosts } from '@/lib/contentlayer'

const MAX_DISPLAY = 2

export const getStaticProps = async () => {
  const featuredProjects = getFeaturedProjects(MAX_DISPLAY)
  const recentPosts = getRecentPosts(MAX_DISPLAY)

  return {
    props: { featuredProjects, recentPosts },
  }
}

const Home = ({
  featuredProjects,
  recentPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageSeo
        keywords={[
          'bona',
          'bonabrian',
          'bonabriansiagian',
          'Bona Brian Siagian',
          'full-stack',
          'back-end',
          'front-end',
          'portfolio',
          'developer',
          'development',
        ]}
      />

      <Introduction />

      <Divider />

      <FeaturedProjects projects={featuredProjects} />

      <Divider />

      <div className="flex justify-between items-center my-4 sm:my-8">
        <h2 className="text-xl font-extrabold leading-5 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-7 md:text-3xl md:leading-9">
          Recent Posts
        </h2>
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-semibold"
        >
          All Posts →
        </Link>
      </div>
      {recentPosts.length === 0 ? (
        <div className="flex items-center justify-center py-3">
          <p className="text-gray-400 dark:text-gray-300">No posts found.</p>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="space-y-1 flex flex-col">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index / 10 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
