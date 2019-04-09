import sender from "./sender";
import datalayer from "../datalayer/test";

export default {
  getData: (req, res) => {
    console.log(`GET: ${req.protocol}://${req.get("host")}${req.originalUrl}`);
    datalayer
      .getData()
      .then(data => {
        sender(res, 200, data);
      })
      .catch(err => sender(res, 404, err));
  }
};
