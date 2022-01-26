import { GRID, LIST } from '../constants'
import { memo, useState } from 'react'
import RulingGrid from './Ruling/RulingGrid/RulingGrid'
import RulingList from './Ruling/RulingList/RulingList'

/**
 * Component for Displaying Grid or List view for thumbs posts
 * @param {Thumbs Posts} cards
 * @param {string} selected
 * @returns {ReactNode}
 */
const CardMap = ({ cards, selected }) => {
  const [isGridMounted, setisGridMounted] = useState(false)
  const [isListMounted, setisListMounted] = useState(true)
  if (isGridMounted === false && selected === GRID) {
    setisGridMounted(true)
  }
  return (
    <>
      {!!isGridMounted && (
        <div className={`${selected === GRID ? '' : 'hidden'}`}>
          <RulingGrid cards={cards} />
        </div>
      )}

      {!!isListMounted && (
        <div className={`${selected === LIST ? '' : 'hidden'}`}>
          <RulingList cards={cards} />
        </div>
      )}
    </>
  )
}

export default memo(CardMap)
