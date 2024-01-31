
import axios from 'axios';

const restUrl = axios.create ({
  baseURL: 'http:/localhost:8000'
})

export default restUrl;
