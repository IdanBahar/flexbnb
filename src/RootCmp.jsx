import { Routes, Route, Navigate, useLocation } from 'react-router'
import { userService } from './services/user'
import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'
import { HomeIndex } from './pages/HomeIndex.jsx'
import { ReviewIndex } from './pages/ReviewIndex.jsx'
import { ChatApp } from './pages/Chat.jsx'
import { AdminIndex } from './pages/AdminIndex.jsx'

import { HomeDetails } from './pages/HomeDetails'
import { UserDetails } from './pages/UserDetails'

import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { UserMsg } from './cmps/UserMsg.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.jsx'
import { PotentialOrderProvider } from './context/potential-order/PotentialOrderContext.jsx'
import { Hosting } from './pages/Hosting.jsx'
import { HomeEdit } from './pages/HomeEdit.jsx'
import { useRef } from 'react'
import { HomeEditFooter } from './cmps/home-edit/HomeEditFooter.jsx'
import { Wishlist } from './cmps/Wishlist.jsx'

export function RootCmp() {
  const mainRef = useRef()
  const location = useLocation()
  const isIndex = location.pathname === '/'
  const isHomeEdit = location.pathname === '/hosting/edit'

  //   console.log('📍location.pathname:', location.pathname)
  // console.log('🏠 isIndex:', isIndex)
  return (
    <PotentialOrderProvider>
      <ScrollToTop />
      <div className="main-container">
        <AppHeader scrollContainerRef={mainRef} />

        {/* <UserMsg /> */}
        <main ref={mainRef}>
          {/* {isIndex && <LabelsSlider />} */}
          <Routes>
            {/* <Route path='' element={<HomePage />} /> */}
            <Route path="" element={<HomeIndex />} />

            <Route path="about" element={<AboutUs />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="vision" element={<AboutVision />} />
            </Route>
            <Route path="home" element={<HomeIndex />} />
            <Route path="home/:homeId" element={<HomeDetails />} />
            <Route path="/wishlists" element={<Wishlist />} />

            <Route path="review" element={<ReviewIndex />} />
            <Route path="chat" element={<ChatApp />} />
            <Route
              path="admin"
              element={
                <AuthGuard checkAdmin={true}>
                  <AdminIndex />
                </AuthGuard>
              }
            />
            <Route path="login" element={<LoginSignup />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="hosting" element={<Hosting />}>
              <Route path="edit" element={<HomeEdit />} />
              <Route path="reservations" element={<UserDetails />} />
            </Route>
          </Routes>
        </main>

        {isHomeEdit && <HomeEditFooter />}
        {/* <AppFooter /> */}
      </div>
    </PotentialOrderProvider>
  )
}

function AuthGuard({ children, checkAdmin = false }) {
  const user = userService.getLoggedinUser()
  const isNotAllowed = !user || (checkAdmin && !user.isAdmin)
  if (isNotAllowed) {
    console.log('Not Authenticated!')
    return <Navigate to="/" />
  }
  return children
}
