export const setAuth = (accesToken: string, userId: string) => {
  localStorage.setItem('accesToken', accesToken)
  localStorage.setItem('userId', userId)
}

export const checkAuth = (): boolean => {
  const accessToken = localStorage.getItem('accessToken')
  const userId = localStorage.getItem('userId')
  if (accessToken && userId) return true
  else {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userId')
    return false
  }
}

export const getAuthHeader = (contentType: string = 'application/json') => {
  const accessToken = localStorage.getItem('accessToken')
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'content-type': contentType,
  }
  return headers
}
