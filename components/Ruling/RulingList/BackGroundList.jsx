const BackgroundList = ({ picture }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-transparent  to-black h-full w-full absolute z-[2] opacity-[0.8] md:opacity-1 "></div>
      <img className="absolute h-full w-full z-[1] md:left-0 md:w-[19rem]" src={`/assets/img/${picture}`} />
    </>
  )
}

export default BackgroundList
