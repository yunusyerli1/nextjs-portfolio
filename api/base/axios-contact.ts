"use client";

import axios from "axios";


const contactApi = axios.create({
  baseURL: "https://api.pilotle.com/",
  headers: {
    "Content-Type": "application/json",
  },
});


contactApi.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default contactApi;
