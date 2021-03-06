import axios from "axios";

export default class APIHandler {
  constructor(baseURL, needsCredentials) {
    this.handler = axios.create({
      baseURL: baseURL || process.env.REACT_APP_BACKEND_URL,
      withCredentials: needsCredentials || true
    });
  }

  get(url) {
    return this.handler.get(url);
  }

  post(endpoint, data) {
    return this.handler.post(endpoint, data);
  }

  patch(endpoint, data) {
    return this.handler.patch(endpoint, data);
  }
  delete(endpoint) {
    return this.handler.delete(endpoint);
  }
}
