import React from 'react';
import { CLIENT_ID, REDIRECT_URI, AUTH_ENDPOINT, RESPONSE_TYPE} from '../../api/config'
import './BtnAuth.scss';


const BtnAuth = () => (
  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} className="button">
    Login 
  </a>
)

export default BtnAuth;
