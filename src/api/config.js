/* export const CLIENT_ID = "23108a35dd584426b852cfc330a4e481" */
export const CLIENT_ID = '23108a35dd584426b852cfc330a4e481';
export const CLIENTSECRET = '024aeb8e45914cde8d714a87d05b15b3';


export const REDIRECT_URI = `${document.location.origin}/home`
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
export const RESPONSE_TYPE = "token"
export const BASE_URL = "https://api.spotify.com/v1"

export const getToken = async () => {  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded', 
      'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENTSECRET)
    },

    body: 'grant_type=client_credentials'
  })

  const data = await response.json()

  console.log(response, data)
  return data.access_token
} 



export const fetchApi = async (url) => {  
  const token = await getToken()
  const response = await fetch(url, {
    headers: {
        Authorization: `Bearer ${token}`,
      }
  })

  const data = await response.json()

  return { response, data }
}



