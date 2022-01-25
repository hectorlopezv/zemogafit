import { useMemo, memo } from 'react'
import { Content, LikesPercentages, Thumb, Gradient } from './styles'
import { formatDistanceToNow } from 'date-fns'
const Ruling = ({ name, description, lastUpdated, category, picture, positive, negative }) => {
  const date = new Date(lastUpdated)
  const negativeVotes = (negative / (positive + negative)) * 100
  const positivesVotes = (positive / (positive + negative)) * 100
  return (
    <div className="h-full min-w-fit relative z-[2]">
      <div className="bg-gradient-to-r from-transparent to-gray-700  h-full w-full absolute z-[1] opacity-[0.8]"></div>
      <img className="absolute h-full w-full z-[0]" src={`/assets/img/${picture}`} />

      <Content className="flex flex-col relative justify-center">
        <div className="relative z-1 flex flex-col justify-end items-center h-full">
          <div className="flex w-full pt-10">
            <div className="flex items-end pb-2" aria-label="thumbs up">
              <div className="bg-green-400 p-2">
                <img className="h-4" src="/assets/img/thumbs-up.svg" alt="thumbs up" />
              </div>
            </div>
            <h3 className="ml-1 text-4xl text-white break-words line-clamp-2 w-8/12">{name}</h3>
          </div>

          <div className="mt-5 pl-11 pr-8 text-white text-lg">
            <p className="line-clamp-2">{description}</p>
            <p className="mt-3 flex justify-end">{`${formatDistanceToNow(date, {
              addSuffix: true,
              includeSeconds: true,
            }).replace(/about/, '')} in ${category}`}</p>
          </div>

          <div className="flex justify-end w-full pl-11 pr-8 mt-5 mb-6" aria-label="thumbs up">
            <div className="flex self-end h-[90%]">
              <div className="bg-green-400 px-2 py-3 mr-3 hover:border">
                <img className="" src="/assets/img/thumbs-up.svg" alt="thumbs up vote selection" />
              </div>

              <div className="bg-yellow-600 px-2 py-3 mr-4 hover:border">
                <img className="" src="/assets/img/thumbs-down.svg" alt="thumbs down vote selection" />
              </div>
            </div>

            <button className="h-11 border bg-black text-white opacity-70 text-lg rounded px-4 py-2 hover:border">
              Vote Now
            </button>
          </div>

          <div className="flex w-full items-center">
            <LikesPercentages className="bg-green-400  p-2 flex items-center" percent={positivesVotes / 100}>
              <div className="flex justify-center items-center mb-1 ">
                <img className="h-4" src="/assets/img/thumbs-up.svg" alt="thumbs up vote selection" />
              </div>
              <span className="ml-2 text-white text-lg">{`${positivesVotes.toFixed(1)}%`}</span>
            </LikesPercentages>

            <LikesPercentages className="bg-yellow-600  p-2 flex item-center justify-end" percent={negativeVotes / 100}>
              <span className="mr-2 text-white text-lg">{`${negativeVotes.toFixed(1)}%`}</span>
              <div className="flex justify-center items-center mb-1 min-w-max">
                <img className="h-4" src="/assets/img/thumbs-down.svg" alt="thumbs down vote selection" />
              </div>
            </LikesPercentages>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default memo(Ruling)
