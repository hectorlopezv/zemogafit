import { VOTEUP, VOTEDOWN } from '../../../constants'
import { memo } from 'react'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'

/**
 * Vote Component Handler
 * @param {string} {description
 * @param {string} lastUpdated
 * @param {string} voteSubmited
 * @param {string} category
 * @param {string} typeOfLike
 * @param {boolean} isDisabled
 * @param {fn} voteDownHandler
 * @param {fn} thumbDownHandler
 * @param {fn} thumUpHandler
 * @returns {ReactNode}
 */
const VoteRulingGrid = ({
  description,
  lastUpdated,
  voteSubmited,
  category,
  typeOfLike,
  isDisabled,
  voteDownHandler,
  thumbDownHandler,
  thumUpHandler,
}) => {
  return (
    <div className="">
      <div className="mt-3 pl-11 pr-8 text-white text-lg lg:text-sm lg:grow-[0.9]">
        <p className="line-clamp-2">{description}</p>
        <div className="mt-2 line-clamp-1 text-right">
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

      <div className="flex justify-end w-full pl-11 pr-8 mt-5 mb-6" aria-label="thumbs vote container">
        <div className="flex self-end h-[90%]">
          <button
            className={`bg-green-400 px-2 py-3 mr-3 min-w-max 
            transition-all duration-75 hover:bg-green-700 cursor-pointer 
             ${typeOfLike === VOTEUP ? 'scale-125' : ''}`}
            onClick={thumUpHandler}
            aria-label="vote up grid"
            data-testid="gridvoteup" 
          >
            <Image className="" src="/assets/img/thumbs-up.svg" height={16} width={16} alt="thumbs up vote selection" />
          </button>

          <button
            className={`bg-yellow-600 transition-all duration-75 hover:bg-yellow-500 px-2 py-3 mr-4  min-w-max cursor-pointer  ${
              typeOfLike === VOTEDOWN ? 'scale-125' : ''
            }`}
            onClick={thumbDownHandler}
            aria-label="vote down grid"
            data-testid="gridvotedown" 
          >
            <Image
              className=""
              src="/assets/img/thumbs-down.svg"
              alt="thumbs down vote selection"
              height={16}
              width={16}
            />
          </button>
        </div>

        <button
          onClick={voteDownHandler}
          disabled={isDisabled}
          className={`h-11 border bg-black text-white opacity-70 text-lg rounded px-4 py-2 transition-all duration-75   md:min-w-max ${
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer border-0 hover:scale-110'
          }`}
        >
          Vote Now
        </button>
      </div>
    </div>
  )
}

export default memo(VoteRulingGrid)
