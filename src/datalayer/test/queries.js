// import { ObjectID as ID } from 'mongodb'
export const readData = db => {
  return new Promise((resolve, reject) => {
    db.collection("test")
      .find({})
      .toArray((isErr, data) => {
        if (isErr) {
          const err = {
            message: "error while execute query",
            err: isErr
          };
          reject(err);
        } else resolve(data);
      });
  });
};
