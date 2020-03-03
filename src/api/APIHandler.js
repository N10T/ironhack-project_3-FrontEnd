import axios from "axios";

class APIHandler {
  constructor(baseURL) {
    this.handler = axios.create({
      baseURL: baseURL || process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
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

export default new APIHandler();
