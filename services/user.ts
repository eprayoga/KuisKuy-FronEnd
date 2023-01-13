import axios from 'axios';
import callAPI from '../config/api';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getAllQuiz() {
  const URL = 'user/landingpage';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailQuiz(id: string) {
  const URL = `user/${id}/detail`;

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getQuizCategory() {
  const URL = 'user/category';

  const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function storeQuizResult(data: any) {
  const url = `${ROOT_API}/${API_VERSION}/user/quiz/store-result`;

  return callAPI({
    url,
    method: 'POST',
    data,
    token: true,
  });
}

export async function getQuizResult(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/user/quiz/${id}/result`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}

export async function getHistoryQuiz() {
  const url = `${ROOT_API}/${API_VERSION}/user/quiz/history`;

  return callAPI({
    url,
    method: 'GET',
    token: true,
  });
}
