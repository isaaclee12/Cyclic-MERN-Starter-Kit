import axios from "axios";

const URL = axios.create({
  withCredentials: true,
});

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
// See server/routes/main.js to see where these routes connect to
class APIService {
  createExample(msg) {
    return URL.post(`https://localhost:3000/`, msg);
  }
  getAllExamples() {
    return URL.get("https://localhost:3000/");
  }
  getExampleById(id) {
    return URL.get(`https://localhost:3000/${id}`);
  }
  deleteExample(id) {
    return URL.delete(`https://localhost:3000/${id}`)
  }
  deleteAllExamples(groupId) {
    return URL.delete(`https://localhost:3000/deleteAllExamples/${groupId}`)
  }

}

export default new APIService();