import superagentPromise from "superagent-promise";
import _superagent from "superagent";

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = "http://localhost:3000/api";
const responseBody = res => {
  if (res.status === 200) {
    // this.props.history.push("/ThankYou");
  }
};

const requests = {
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(res => responseBody(res))
};

const sendMail = {
  create: Email => requests.post("/send/", Email)
};

export default sendMail;
