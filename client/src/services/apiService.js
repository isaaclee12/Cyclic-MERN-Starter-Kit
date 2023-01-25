import axios from "axios";

const URL = axios.create({
  withCredentials: true,
});

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
class APIService {
  create(msg) {
    return URL.post(`/events/`, msg);
  }
  getAll() {
    return URL.get("/events");
  }
  getById(id) {
    return URL.get(`/events/${id}`);
  }
  deleteEvent(id) {
    return URL.delete(`/events/${id}`)
  }
  deleteAllEvents(groupId) {
    return URL.delete(`/events/deleteAllEvents/${groupId}`)
  }
}

export default new APIService();
