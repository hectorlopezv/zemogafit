import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
/**
 * Header for Thumbs Post List Layout
 * @date 2022-01-25
 * @param {string} voteSubmited
 * @param {string} lastUpdated
 * @param {string} category
 * @param {string} name
 * @returns {ReactNode}
 */
const RulingListContent = ({ voteSubmited, lastUpdated, category, name }) => {
  return (
    <div className="flex w-full pt-10 md:pt-0 md:justify-between">
      <div className="flex items-end md:items-baseline pb-2 min-w-max" aria-label="thumbs up">
        <div className="bg-green-400 p-2">
          <Image className="h-4" src="/assets/img/thumbs-up.svg" height={16} width={16} alt="thumbs up" />
        </div>
      </div>
      <h3 className="ml-2 text-4xl  text-white break-words line-clamp-2 w-8/12  md:pt-3 lg:pt-6">{name}</h3>

      <div className="mt-2 line-clamp-1 text-right text-white md:mr-8 min-w-max !hidden md:!block">
        <p>
          {voteSubmited
            ? 'Thank you for your vote!'
            : `${formatDistanceToNow(new Date(lastUpdated), {
                addSuffix: true,
                includeSeconds: true,
              }).replace(/about/, '')}
  in ${category}`}
        </p>
      </div>
    </div>
  )
}

export default RulingListContent
