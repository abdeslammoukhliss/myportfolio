import type { IconType } from 'react-icons'

import Link from '../link'
import Spinner from '../spinner'

interface StatisticsCardProps {
  link?: string
  text: string
  value: string
  icon?: IconType
  loading?: boolean
}

const Box = ({
  link,
  children,
}: {
  link?: string
  children?: React.ReactNode
}) => {
  const className =
    'flex flex-row sm:flex-col items-center sm:items-start space-x-2 sm:space-x-0 border-2 border-solid border-gray-900 dark:border-slate-100 rounded-2xl p-4 w-full hover:border-primary-500 dark:hover:border-primary-500 transition-all overflow-hidden relative'

  return (
    <>
      {link ? (
        <Link href={link} showExternalLinkIcon={false} className={className}>
          {children}
        </Link>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  )
}

const StatisticsCard = ({
  link,
  text,
  value,
  icon,
  loading,
}: StatisticsCardProps) => {
  const IconPath = icon ?? 'svg'

  return (
    <Box link={link}>
      {loading ? (
        <div className="flex items-center h-8">
          <Spinner />
        </div>
      ) : (
        <span className="leading-tight text-2xl font-semibold h-8">
          {value}
        </span>
      )}
      <span className="text-sm text-ellipsis">{text}</span>
      {icon && (
        <IconPath className="inline-flex absolute top-3 right-3 text-2xl items-center justify-center" />
      )}
    </Box>
  )
}

export default StatisticsCard
