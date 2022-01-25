import { memo, useState, useCallback } from 'react'
import { Content } from '../styles'
import { VOTEDOWN, VOTEUP } from '../../../constants'
import { addData } from '../../../store/firebase'
import RulingGridFooter from './RulingListFooter'
import BackgroundList from './BackGroundList'
import VoteRulingList from './VoteRulingList'
import RulingListContent from './RulingListContent'

const RulingListMap = props => {
  const {
    name,
    description,
    lastUpdated,
    category,
    picture,
    votes: { positive, negative },
  } = props
  const [typeOfLike, settypeOfLike] = useState(null)
  const [isDisabled, setisDisabled] = useState(true)
  const [voteSubmited, setvoteSubmited] = useState(false)
  const [positiveVotesCount, setpositiveVotesCount] = useState(positive)
  const [negativeVotesCount, setnegativeVotesCount] = useState(negative)

  const thumUpHandler = useCallback(() => {
    settypeOfLike(VOTEUP)
    setisDisabled(false)
  }, [typeOfLike, isDisabled])

  const thumbDownHandler = useCallback(() => {
    settypeOfLike(VOTEDOWN)
    setisDisabled(false)
  }, [typeOfLike, isDisabled])
  const voteDownHandler = useCallback(async () => {
    if (voteSubmited) {
      settypeOfLike(null)
      setisDisabled(true)
    }
    if (typeOfLike === VOTEUP) {
      props.votes.positive += 1
      setpositiveVotesCount(votes => votes + 1)
    }
    if (typeOfLike === VOTEDOWN) {
      setnegativeVotesCount(votes => votes + 1)
    }
    setvoteSubmited(current => !current)

    await addData(props)
  }, [typeOfLike, isDisabled, positiveVotesCount, negativeVotesCount])
  return (
    <div className="w-96 h-96 flex-shrink-0 relative z-[2] md:w-full md:h-[16rem]">
      <BackgroundList picture={picture} />
      <Content className="relative justify-center">
        <div className="relative z-1 h-full flex flex-col justify-between">
          <RulingListContent voteSubmited={voteSubmited} lastUpdated={lastUpdated} category={category} name={name} />
          <VoteRulingList
            description={description}
            lastUpdated={lastUpdated}
            voteSubmited={voteSubmited}
            category={category}
            typeOfLike={typeOfLike}
            isDisabled={isDisabled}
            voteDownHandler={voteDownHandler}
            thumbDownHandler={thumbDownHandler}
            thumUpHandler={thumUpHandler}
          />
          <RulingGridFooter positiveVotesCount={positiveVotesCount} negativeVotesCount={negativeVotesCount} />
        </div>
      </Content>
    </div>
  )
}

export default memo(RulingListMap)
