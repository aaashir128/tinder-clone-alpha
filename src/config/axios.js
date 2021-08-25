import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-alpha-backend.herokuapp.com",
});

export default instance;
