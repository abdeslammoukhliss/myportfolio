import {
  Android,
  CSS3,
  Docker,
  Git,
  Hadoop,
  HTML5,
  JavaScript,
  JQuery,
  Kotlin,
  Kubernetes,
  Laravel,
  PHP,
  Prisma,
  Redis,
  Spring,
  TypeScript,
} from '@/components/icons'
import cn from '@/utils/cn'

interface StackProps {
  [key: string]: JSX.Element
}

export const STACKS: StackProps = {
  TypeScript: <TypeScript className={cn('fill-[#3178C6]')} />,
  JavaScript: <JavaScript className={cn('fill-[#F7DF1E]')} />,
  PHP: <PHP className={cn('fill-[#777BB4]')} />,
  Laravel: <Laravel className={cn('fill-[#FF2D20]')} />,
  Kotlin: <Kotlin className={cn('fill-[#7F52FF]')} />,
  Spring: <Spring className={cn('fill-[#6DB33F]')} />,
  Prisma: <Prisma className={cn('fill-[#2D3748] dark:fill-white')} />,
  Git: <Git className={cn('fill-[#F05032]')} />,
  Redis: <Redis className={cn('fill-[#DC382D]')} />,
  HTML5: <HTML5 className={cn('fill-[#E34F26]')} />,
  CSS3: <CSS3 className={cn('fill-[#1572B6]')} />,
  JQuery: <JQuery className={cn('fill-[#0769AD]')} />,
  Android: <Android className={cn('fill-[#3DDC84]')} />,
  Docker: <Docker className={cn('fill-[#3DDC84]')} />,
  Kubernetes: <Kubernetes className={cn('fill-[#3DDC84]')} />,
  Hadoop: <Hadoop className={cn('fill-[#3DDC84]')} />,
}
