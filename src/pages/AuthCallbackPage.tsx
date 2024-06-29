import { useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useCreateMyUser } from '../api/MyUserApi'
import { useNavigate } from 'react-router-dom'

const AuthCallbackPage = () => {
  const navigate = useNavigate()
  const hasCreatedUser = useRef(false)
  const { user } = useAuth0()
  const { createUser } = useCreateMyUser()

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email })
      hasCreatedUser.current = true
    }
    navigate('/')
  }, [createUser, navigate, user])

  return <>Loading...</>
}

export default AuthCallbackPage
