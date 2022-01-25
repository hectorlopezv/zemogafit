const HeadingGrid = ({ name }) => {
  return (
    <div className="flex w-full pt-10 lg:pt-20">
      <div className="flex items-end pb-2" aria-label="thumbs up">
        <div className="bg-green-400 p-2">
          <img className="h-4" src="/assets/img/thumbs-up.svg" alt="thumbs up" />
        </div>
      </div>
      <h3 className="ml-2 text-4xl lg:text-3xl text-white break-words line-clamp-2 w-8/12 lg:w-10/12">{name}</h3>
    </div>
  )
}

export default HeadingGrid
