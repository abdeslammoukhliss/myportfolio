import type { InferGetStaticPropsType } from 'next'

import { PageMeta } from '@/components/Meta'
import PageTitle from '@/components/PageTitle'
import Skills from '@/components/Skills'
import { getSkillsByCategory } from '@/lib/db'

export const getStaticProps = async () => {
  const skillsByCategory = await getSkillsByCategory()

  return {
    props: {
      fallbackData: skillsByCategory,
    },
    revalidate: 60,
  }
}

const Endorsements = ({
  fallbackData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageMeta title='Endorsements' description={"bonabrian's Endorsements"} />
      <div className='flex flex-col items-start justify-center max-w-2xl pt-6 pb-8 space-y-2 md:space-y-5'>
        <PageTitle>Endorsements</PageTitle>
        <p className='text-lg leading-7 text-gray-500 dark:text-gray-400 xl:text-xl'>
          Since you&apos;re here, I invite you to give me endorsement(s) based
          on the experience you had with me in tech.
        </p>
      </div>
      <Skills fallbackData={fallbackData} />
    </>
  )
}

export default Endorsements
