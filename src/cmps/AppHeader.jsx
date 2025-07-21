import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { logout } from '../store/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { initDemoUser } from '../store/user.actions'
import { FaAirbnb } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
<<<<<<< HEAD
import { ReactSVG } from 'react-svg'
import { userService } from '../services/user'

export function AppHeader() {
  const loggedInUser = useSelector(state => state.userModule.user)
=======
import { LabelsSlider } from './LabelsSlider'

export function AppHeader() {
  const user = useSelector((storeState) => storeState.userModule.user)
>>>>>>> main
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 580)
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
<<<<<<< HEAD
      const onScroll = () => setIsScrolled(window.scrollY > 20)
      window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(()=>{
    loadUser()
  }, [])

  function loadUser(){
    const loggedInUser = userService.getLoggedinUser()
    if (!loggedInUser) {
      initDemoUser()
    }
  }
=======
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    initDemoUser()
  }, [])

  const shouldShowScrolledStyle = isScrolled || isSmallScreen
>>>>>>> main

  async function onLogout() {
    try {
      await logout()
      navigate('/')
      showSuccessMsg(`Bye now`)
    } catch (err) {
      showErrorMsg('Cannot logout')
    }
  }

  return (
    <header
      className={`app-header ${
        shouldShowScrolledStyle ? 'scrolled' : ''
      }  full`}
    >
      <nav className=''>
        <NavLink to='/' className='logo'>
          <FaAirbnb />
          <span>flexbnb</span>
        </NavLink>
        <SearchBar isScrolled={shouldShowScrolledStyle} />
        {user?.isAdmin && <NavLink to='/admin'>Admin</NavLink>}

        {!user && (
          <NavLink to='login' className='login-link'>
            Login
          </NavLink>
        )}

        {user && (
          <div className='user-info'>
            <Link to={`user/${user._id}`}>
              {user.imgUrl && <img src={user.imgUrl} />}
              {/* {user.fullname} */}
            </Link>
            {/* <span className="score">{user.score?.toLocaleString()}</span> */}
            {/* <button onClick={onLogout}>logout</button> */}
          </div>
        )}
        {/* {<LabelsSlider />} */}
      </nav>
    </header>
  )
}
