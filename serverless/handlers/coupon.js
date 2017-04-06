'use strict';
const pg = require('pg');
const config = require('../config').staging;

const main = (event, context, callback) => {
  console.log("event", event);
  console.log("event.Records", event.Records);
  console.log("event.Records[0]", event.Records[0]);
  console.log("event.Records[0].dynamodb", event.Records[0].dynamodb);
  
  const {OldImage, NewImage} = event.Records[0].dynamodb;
  console.log("OldImage", JSON.stringify(OldImage));
  console.log("NewImage", JSON.stringify(NewImage));
  
  const client = new pg.Client(config);
  
  client.connect(function (err) {
    if (err) {
      console.log("err connecting client", err);
      throw err;
    }
    
    console.log("client is connected");
    
    // disconnect the client
    
    client.end(function (err) {
      console.log("client is disconnected");
      if (err) throw err;
      
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: 'Coupons updates',
          input: event,
        }),
      };
      
      callback(null, response);
    });
    
    // });
  });
};

module.exports = main;