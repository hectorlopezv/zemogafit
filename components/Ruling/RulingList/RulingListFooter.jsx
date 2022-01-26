import { negativeVotes, positivesVotes } from '../../../utils'
import { LikesPercentages } from './styles'
import Image from 'next/image'
/**
 * Like and Dislike Bar For Thumb Post List Layout
 * @returns {ReactNode}
 */
const RulingGridFooter = ({ positiveVotesCount, negativeVotesCount }) => {
  return (
    <div className="flex w-full items-center">
      <LikesPercentages
        className="bg-green-400  p-2 flex items-center"
        percent={positivesVotes(positiveVotesCount, negativeVotesCount) / 100}
      >
        <div className="flex justify-center items-center mb-1 ">
          <Image className="h-4" src="/assets/img/thumbs-up.svg" height={16} width={16} alt="thumbs up vote selection" />
        </div>
        <span className="ml-2 text-white text-lg">{`${positivesVotes(positiveVotesCount, negativeVotesCount).toFixed(
          1
        )}%`}</span>
      </LikesPercentages>

      <LikesPercentages
        className="bg-yellow-600  p-2 flex item-center justify-end"
        percent={negativeVotes(positiveVotesCount, negativeVotesCount) / 100}
      >
        <span className="mr-2 text-white text-lg">{`${negativeVotes(positiveVotesCount, negativeVotesCount).toFixed(
          1
        )}%`}</span>
        <div className="flex justify-center items-center mb-1 min-w-max">
          <Image className="h-4" src="/assets/img/thumbs-down.svg" alt="thumbs down vote selection"  height={16} width={16} />
        </div>
      </LikesPercentages>
    </div>
  )
}

export default RulingGridFooter
