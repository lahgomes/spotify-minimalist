import React from 'react';
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE, getToken } from '../../api/config'
import './Link.scss';


const Link = () => (
  <button onClick={getToken}>enviar</button>  
   

)

export default Link;


//<a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="link">
   // Login 
  //</a> */}
