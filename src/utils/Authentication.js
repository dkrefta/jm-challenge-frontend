import Cookies from 'universal-cookie';

import {token} from '../utils/constants'

const cookies = new Cookies();

class Authentication {
  static fetchToken () {
     return cookies.get('ACCESS_TOKEN');
  }

  static setToken() {
    cookies.set('ACCESS_TOKEN', token, {path: '/'})
  }
}

export default Authentication;