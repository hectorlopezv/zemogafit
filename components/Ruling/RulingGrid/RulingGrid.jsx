import { memo } from 'react'
import RulingGridMap from './RulingGridMap'

/**
 * Component for Creating the Thumbs Posts
 * @param {Thumbs Posts} {cards}
 * @returns {ReactNode}
 */
const RulingGrid = ({ cards }) => {
  return (
    <div className="flex relative overflow-x-auto w-full space-x-4 md:grid md:grid-cols-2 md:h-full md:space-x-0 md:gap-6 md:w-full lg:grid-cols-3 lg:gap-4">
      {cards?.map(props => {
        return <RulingGridMap key={`${props.name}Grid`} {...props} />
      })}
    </div>
  )
}

export default memo(RulingGrid)
