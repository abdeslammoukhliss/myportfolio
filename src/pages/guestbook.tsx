import { PageSeo } from '@/components/Seo'
import { UnderDevelopment } from '@/components/UnderDevelopment'
import siteMetadata from '@/data/siteMetadata'

const Guestbook = () => {
  return (
    <>
      <PageSeo title='Guestbook' description={siteMetadata.description} />
      <UnderDevelopment />
    </>
  )
}

export default Guestbook