import axios from 'axios';
import Config from '../config';

const ApiClient = axios.create({
  baseURL: Config.apiUrl,
});

export default ApiClient;
