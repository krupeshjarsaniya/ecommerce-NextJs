import axios from "axios";
import api from "./url";

axios.interceptors.request.use(async function (config) {
    // config.headers.api_key = process.env.NEXT_PUBLIC_API_KEY;
    config.headers['api_key'] = process.env.NEXT_PUBLIC_API_KEY;
  return config;
});

export const GetProduct = (params) => {
  return axios.get(api.getProduct, {
    params:params,
  });
};

export const GetProductById = (id) => {
  return axios.get(api.getProduct + "/" + id );
};

