import axios from 'axios';
const API_KEY = '535bad040de2de8721d033f9218e45e5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FECTH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return{
    type: FECTH_WEATHER,
    payload: request
  }
}