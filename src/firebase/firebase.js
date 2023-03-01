import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axios.create({
    baseURL: "https://todo-application-e2982-default-rtdb.firebaseio.com"
})