import { VOTEUP, VOTEDOWN } from '../../../constants'
import { memo } from 'react'
import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
/**
 * Vote Component Handler List Layout
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
const VoteRulingList = ({
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
    <div className="md:flex">
      <div className="mt-3 pl-11 pr-8 text-white text-lg  md:w-9/12  md:pl-12 ">
        <p className="line-clamp-2">{description}</p>
        <div className="mt-2 line-clamp-1 text-right md:hidden">
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

      <div
        className="flex justify-end w-full pl-11 pr-8 mt-5 mb-6 min-w-max  md:pl-0 md:w-3/12 md:items-center"
        aria-label="thumbs vote container"
      >
        <div className="flex self-end md:self-center">
          <div
            className={`bg-green-400 px-2 py-3 mr-3 min-w-max 
        transition-all duration-75 hover:bg-green-700 
        cursor-pointer active:scale-125  ${typeOfLike === VOTEUP ? 'scale-125' : ''}`}
            onClick={thumUpHandler}
          >
            <Image className="" src="/assets/img/thumbs-up.svg" height={16} width={16} alt="thumbs up vote selection" />
          </div>

          <div
            className={`bg-yellow-600 transition-all duration-75 hover:bg-yellow-500 
        px-2 py-3 mr-4  min-w-max cursor-pointer active:scale-125   ${typeOfLike === VOTEDOWN ? 'scale-125' : ''}`}
            onClick={thumbDownHandler}
          >
            <Image
              className=""
              src="/assets/img/thumbs-down.svg"
              alt="thumbs down vote selection"
              height={16}
              width={16}
            />
          </div>
        </div>

        <button
          onClick={voteDownHandler}
          className={`h-11 border bg-black text-white 
      opacity-70 text-lg rounded px-4 py-2 transition-all 
      duration-75   md:min-w-max ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer border-0 hover:scale-110'}`}
          disabled={isDisabled}
        >
          {voteSubmited ? 'Vote Again' : 'Vote Now'}
        </button>
      </div>
    </div>
  )
}

export default memo(VoteRulingList)
