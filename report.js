const newman = require("newman");
require("dotenv").config();

newman.run(
  {
    // collection: `https://api.postman.com/collections/39989719-45ee7a5a-38a0-4ee7-8938-d2da4991d615?access_key=${process.env.secretKey}`,
    collection: require("./collection/dmoney-postman-assignment.postman_collection.json"),
    reporters: "htmlextra",
    insecure: true,
    iterationCount: 1,
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
