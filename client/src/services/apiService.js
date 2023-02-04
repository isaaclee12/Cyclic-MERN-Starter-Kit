import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:3000",
  mode: "cors",
  withCredentials: true,
});

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
// See server/routes/main.js to see where these routes connect to
class APIService {
  createExample(msg) {
    return URL.post(`/`, msg);
  }
  getAllExamples() {
    return URL.get("/");
  }
  getExampleById(id) {
    return URL.get(`/${id}`);
  }
  deleteExample(id) {
    return URL.delete(`/${id}`)
  }
  deleteAllExamples(groupId) {
    return URL.delete(`/deleteAllExamples/${groupId}`)
  }

}

export default new APIService();