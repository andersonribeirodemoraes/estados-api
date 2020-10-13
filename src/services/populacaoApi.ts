import axios from 'axios';

const populacaoApi = axios.create({
  baseURL: 'http://localhost:3000',
});

export default populacaoApi;
