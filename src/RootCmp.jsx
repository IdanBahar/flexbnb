import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router'

import { userService } from './services/user'
import { HomePage } from './pages/HomePage'
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
import { LabelsSlider } from './cmps/LabelsSlider.jsx'
import { ScrollToTop } from './cmps/ScrollToTop.jsx'
import { HomeList } from './cmps/HomeList.jsx'
import { BuyingStepOneModal } from './cmps/BuyingStepOneModal.jsx'

export function RootCmp() {
  return (
    <div className='main-container'>
      <ScrollToTop />
      <AppHeader />

      <UserMsg />

      <main>
        <Routes>
          {/* <Route path='' element={<HomePage />} /> */}
          <Route path='' element={<HomeIndex />} />

          <Route path='about' element={<AboutUs />}>
            <Route path='team' element={<AboutTeam />} />
            <Route path='vision' element={<AboutVision />} />
          </Route>
          <Route path='home' element={<HomeIndex />} />
          <Route path='home/:homeId' element={<HomeDetails />} />
          <Route path='user/:id' element={<UserDetails />} />
          <Route path='review' element={<ReviewIndex />} />
          <Route path='chat' element={<ChatApp />} />
          <Route
            path='admin'
            element={
              <AuthGuard checkAdmin={true}>
                <AdminIndex />
              </AuthGuard>
            }
          />
          <Route path='login' element={<LoginSignup />}>
            <Route index element={<Login />} />
            <Route path='signup' element={<Signup />} />
          </Route>
        </Routes>
      </main>
      <AppFooter />
    </div>
  )
}

function AuthGuard({ children, checkAdmin = false }) {
  const user = userService.getLoggedinUser()
  const isNotAllowed = !user || (checkAdmin && !user.isAdmin)
  if (isNotAllowed) {
    console.log('Not Authenticated!')
    return <Navigate to='/' />
  }
  return children
}
