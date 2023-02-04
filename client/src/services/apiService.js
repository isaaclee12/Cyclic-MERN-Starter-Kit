import axios from "axios";

// const URL = axios.create({
  // withCredentials: true,
// });

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
// See server/routes/main.js to see where these routes connect to
class APIService {
  createExample(msg) {
    return axios.post(`/`, msg);
  }
  getAllExamples() {
    return axios.get("/");
  }
  getExampleById(id) {
    return axios.get(`/${id}`);
  }
  deleteExample(id) {
    return axios.delete(`/${id}`)
  }
  deleteAllExamples(groupId) {
    return axios.delete(`/deleteAllExamples/${groupId}`)
  }

}

export default new APIService();