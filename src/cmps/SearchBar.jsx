import { useState, useEffect, useRef } from 'react'
import { WhereDropdown } from "./WhereDropdown";
import { ReactSVG } from 'react-svg'
import { useDispatch } from 'react-redux'
import { debounce} from '../services/util.service.js'

export function SearchBar({ isScrolled }) {
  const [openedDropdown, setOpenedDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(isScrolled)
  const [activeButton, setActiveButton] = useState(null)
  const wrapperRef = useRef()

  useEffect(() => {
    setScrolled(isScrolled)
  }, [isScrolled])

  useEffect(() => {
    if (scrolled) setOpenedDropdown(null)
  }, [scrolled])



  function handleWhereClick(btName) {
    //..if we clicked on scrolled bar
    if (scrolled) setScrolled(false)
    
    setOpenedDropdown(btName)

   if (activeButton === btName) return
    setActiveButton(btName)
  }

    useEffect(() => {
      function handleClickOutside(ev) {
        if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
          setActiveButton(null)
        }
      }

      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }, [])

    const dispatch = useDispatch()

    const debouncedSetTxt = useRef(
        debounce((val) => dispatch(setSearchTxt(val)), 300)
      ).current

    function onInputChange(ev) {
        const val = ev.target.value
        debouncedSetTxt(val)
      }

  return (
    <search className=''>
      <div ref={wrapperRef} className={`search-bar-container ${scrolled ? 'scrolled' : ''}`}>
        
        <div>
          <div onClick={()=>handleWhereClick('where')} className={`inner-section ${activeButton == 'where' ? 'active' : ''}`}>
            <div className='sTitle' >{scrolled ? 'Anywhere' : 'Where'}</div>
            {!scrolled && <input className='placeholder-content' onChange={onInputChange} type='search' placeholder='Search destination'></input>}
            <WhereDropdown
              isOpen={openedDropdown === 'where'}
              onOpen={() => setOpenedDropdown('where')}
              onClose={() => setOpenedDropdown(null)}
            />
          </div>
          <div className="sep"></div>
          <div onClick={()=>handleWhereClick('Check in')} className={`inner-section ${activeButton == 'Check in' ? 'active' : ''}`}>
            <div className='sTitle'>{scrolled ? 'Anytime' : 'Check in'}</div>
            {!scrolled && <input className='placeholder-content' type='search' placeholder='Add dates'></input>}
          </div>
          <div className="sep"></div>
          {!scrolled && <div onClick={()=>handleWhereClick('Check out')} className={`inner-section ${activeButton == 'Check out' ? 'active' : ''}`}>
            <div className='sTitle'>Check out</div>
            <input className='placeholder-content' type='search' placeholder='Add dates'></input>
          </div>}
          {!scrolled && <div className="sep"></div>}
          <div onClick={()=>handleWhereClick('Who')} className={`inner-section ${activeButton == 'Who' ? 'active' : ''}`}>
            <div className='sTitle'>{scrolled ? 'Add guests' : 'Who'}</div>
            {!scrolled && <input className='placeholder-content' type='search' placeholder='Add guests'></input>}
            <div className='search-btn-section'>
                <button className='search-button'>
                  <ReactSVG src="/svgs/search-icon.svg" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </search>
  )
}