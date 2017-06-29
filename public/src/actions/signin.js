import axios from "axios";

const api_URL = __dirname;

export default function signinUser({username, password}) {
  return function(dispatch) {
    axios.post(api_URL+'/signin', {username, password})
  }
}