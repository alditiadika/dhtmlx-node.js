import test from "../logic/test";
import routes from "./routes";
export default server => {
  server.get(routes.test, test.getData);
};
