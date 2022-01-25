import { negativeVotes, positivesVotes } from '../../../utils'
import { LikesPercentages } from './styles'

const RulingGridFooter = ({ positiveVotesCount, negativeVotesCount }) => {
  return (
    <div className="flex w-full items-center">
      <LikesPercentages
        className="bg-green-400  p-2 flex items-center"
        percent={positivesVotes(positiveVotesCount, negativeVotesCount) / 100}
      >
        <div className="flex justify-center items-center mb-1 ">
          <img className="h-4" src="/assets/img/thumbs-up.svg" alt="thumbs up vote selection" />
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
          <img className="h-4" src="/assets/img/thumbs-down.svg" alt="thumbs down vote selection" />
        </div>
      </LikesPercentages>
    </div>
  )
}

export default RulingGridFooter
