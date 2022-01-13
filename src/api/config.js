export const CLIENT_ID = "23108a35dd584426b852cfc330a4e481"
export const REDIRECT_URI = `${document.location.origin}/home`
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
export const RESPONSE_TYPE = "token"
export const BASE_URL = "https://api.spotify.com/v1"

export const fetchApi = async (url, token) => {  
  const response = await fetch(url, {
    headers: {
        Authorization: `Bearer ${token}`,
      }
  })

  const data = await response.json()

  return { response, data }
}

