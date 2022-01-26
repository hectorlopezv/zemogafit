import Image from 'next/image'
const BackgroundGrid = ({ picture }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-transparent  to-black h-full w-full absolute z-[2] opacity-[0.8]"></div>
      <Image
        className="absolute h-full w-full z-[1]"
        src={`/assets/img/${picture}`}
        alt="background image Card Grid"
        layout="fill"
      />
    </>
  )
}

export default BackgroundGrid
