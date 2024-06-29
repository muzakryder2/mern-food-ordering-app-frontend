import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/Layout'
import HomePage from './pages/HomePage'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
import ProtectedRoute from './auth/ProtectedRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout showHero>
            <HomePage />
          </MainLayout>
        }
      />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path='/user-profile'
          element={
            <MainLayout>
              <UserProfilePage />
            </MainLayout>
          }
        />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  )
}
export default AppRoutes
