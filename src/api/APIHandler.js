import axios from "axios";

class APIHandler {
  constructor(baseURL) {
    this.handler = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL || baseURL
    })
  }
  createBuilding(data) {
    return this.handler.post('/admin/building', data)
  }
}

export default new APIHandler();
