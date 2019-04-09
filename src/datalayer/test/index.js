import { DatabaseConnection as DB } from "../../config";
import { readData } from "./queries";

export default {
  getData: () => {
    return new Promise((res, rej) => {
      DB.connect((isErr, db) => {
        if (!isErr) {
          readData(db)
            .then(data => {
              res(data);
            })
            .catch(err => rej(err));
        } else {
          rej({
            message: `Error, can't connect to database...`,
            err: isErr
          });
        }
      });
    });
  }
};
