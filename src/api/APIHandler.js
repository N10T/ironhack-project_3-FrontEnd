import axios from "axios";

export default class APIHandler {
  constructor(baseURL) {
    this.handler = axios.create({
      baseURL: baseURL || process.env.REACT_APP_BACKEND_URL
    })
  }

  get(url) {
    return this.handler.get(url);
  }

  post(endpoint,data) {
    return this.handler.post(endpoint, data)
  }

  patch(endpoint,data) {
    return this.handler.patch(endpoint, data)
  }
}
