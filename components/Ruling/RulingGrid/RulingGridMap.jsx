import { Content } from '../styles'
import { VOTEDOWN, VOTEUP } from '../../../constants'
import { memo, useState, useCallback } from 'react'
import { addData } from '../../../store/firebase'
import RulingGridFooter from '../RulingList/RulingListFooter'
import VoteRulingGrid from './VoteRulingGrid'
import BackgroundGrid from './BackgroundGrid'
import HeadingGrid from './HeadingGrid'

/**
 *  Thumb Post Component
 * @returns {ReactNode}
 */
const RulingGridMap = props => {
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
  }, [])

  const thumbDownHandler = useCallback(() => {
    settypeOfLike(VOTEDOWN)
    setisDisabled(false)
  }, [])
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
  }, [typeOfLike, props, voteSubmited])
  return (
    <div className="w-96 h-96 flex-shrink-0 relative z-[2] md:flex-shrink md:w-full">
      <BackgroundGrid picture={picture} />
      <Content className="flex flex-col relative justify-center">
        <div className="relative z-1 flex flex-col justify-end items-center h-full">
          <HeadingGrid name={name} />

          <VoteRulingGrid
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

export default memo(RulingGridMap)
