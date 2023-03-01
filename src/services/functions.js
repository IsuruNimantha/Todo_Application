import firebaseInstance from '../firebase/firebase';

export function getTasks() {
  return firebaseInstance
    .get("/todos.json")
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function postTask(data) {
  return firebaseInstance
    .post("/todos.json", data)
    .then((response) => response.status.toLocaleString())
    .catch((error) => error.message);
}

export function deleteTask(id) {
  return firebaseInstance
    .delete(`/todos/${id}.json`)
    .then((response) => response.data)
    .catch((error) => error.message);
}

export function updateTask(data) {
  return firebaseInstance
    .put(`/todos/${data.id}.json`, data)
    .then((response) => response.data)
    .catch((error) => error.message);
}
