import { memo } from 'react'
import RulingListMap from './RulingListMap'

/**
 * Component for Creating the Thumbs Posts
 * @param {Thumbs Posts} {cards}
 * @returns {ReactNode}
 */
const RulingList = ({ cards }) => {
  return (
    <div className="flex relative overflow-x-auto w-full space-x-4 md:flex-col md:space-x-0 md:space-y-5">
      {cards?.map(props => {
        return <RulingListMap key={`${props.name}List`} {...props} />
      })}
    </div>
  )
}

export default memo(RulingList)
