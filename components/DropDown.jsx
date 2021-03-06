import { LIST, GRID } from '../constants'
import { useEffect, memo } from 'react'
import { useRef } from 'react'

/**
 * DropDown component for choosing beetween Grid or List view for Thumbs Posts
 * @param {boolean} setisOpen
 * @param {fn} setselected
 * @param {string} selected
 * @param {boolean} isOpen
 * @returns {ReactNode}
 */
const DropDown = ({ setisOpen, setselected, selected, isOpen }) => {
  const ref = useRef(null)

  useEffect(() => {
    const checkClick = event => {
      if (!!ref.current && !ref.current.contains(event.target)) {
        setisOpen(false)
      }
    }
    document.addEventListener('click', checkClick, true)

    return () => {
      document.removeEventListener('click', checkClick, true)
    }
  })

  const optionHandler = option => {
    const cases = {
      [LIST]: () => {
        setisOpen(false)
        setselected(LIST)
      },
      [GRID]: () => {
        setisOpen(false)
        setselected(GRID)
      },
    }

    cases[option] && cases[option]()
  }
  return (
    <div className="relative ml-auto z-[3] hidden md:block" ref={ref}>
      <button
        aria-label="open dropdown"
        className="flex items-center justify-between p-1  bg-gray-100 border-2 border-black rounded-sm w-44"
        onClick={() => setisOpen(current => !current)}
      >
        <span className="ml-auto">{selected}</span>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 320 512"
          height="1.3em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto mr-2"
        >
          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
        </svg>
      </button>
      {!!isOpen && (
        <div className="absolute right-0 mt-3 bg-gray-100 border-2 border-black divide-y-2 divide-black shadow-xl w-44">
          <button className="py-2 text-center block w-full" onClick={() => optionHandler(LIST)}>
            List
          </button>
          <button className="py-2 text-center block w-full" onClick={() => optionHandler(GRID)}>
            Grid
          </button>
        </div>
      )}
    </div>
  )
}

export default memo(DropDown)
