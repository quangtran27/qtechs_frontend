import { useEffect } from 'react'
import { useNavigate } from 'react-router'

function User() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/user/profile')
  }, [navigate])
  return <div>User</div>
}

export default User
