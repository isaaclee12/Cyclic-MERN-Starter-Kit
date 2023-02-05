import axios from "axios";

const URL = axios.create({
  baseURL: "http://localhost:2121",
  headers: {"Access-Control-Allow-Origin": "*", "mode": "cors"},
});

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
// See server/routes/main.js to see where these routes connect to
class APIService {
  createExample(msg) {
    return URL.post("/examples/", msg);
  }
  getAllExamples() {
    return URL.get("/examples/");
  }
  getExampleById(id) {
    return URL.get(`/examples/${id}`);
  }
  deleteExample(id) {
    return URL.delete(`/examples/${id}`)
  }
  deleteAllExamples(groupId) {
    return URL.delete(`/examples/deleteAllExamples/${groupId}`)
  }

}

export default new APIService();