import { PageMeta } from '@/components/Meta'
import { UnderDevelopment } from '@/components/UnderDevelopment'
import siteMetadata from '@/data/siteMetadata'

const Blog = () => {
  return (
    <>
      <PageMeta title='Blog' description={siteMetadata.description} />
      <UnderDevelopment />
    </>
  )
}

export default Blog
