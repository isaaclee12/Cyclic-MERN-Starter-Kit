import axios from "axios";

const URL = axios.create({
  withCredentials: true,
});

// This is the API service
// TODO: Replace these API calls and all the server endpoints to examples
// See server/routes/main.js to see where these routes connect to
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
  getCurrentUser() {
    return URL.get("/getDisplayName");
  }
  logout() {
    return URL.get("/auth/logout")
  }

  deleteNeedsToBeWelcome() {
    return URL.delete("/needsToBeWelcome")
  }
}

export default new APIService();