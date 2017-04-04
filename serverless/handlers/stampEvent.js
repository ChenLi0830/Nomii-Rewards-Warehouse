'use strict';

const main = (event, context, callback) => {
  
  console.log("event", event);
  console.log("event.dynamodb", event.dynamodb);
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'stampEvent updates',
      input: event,
    }),
  };
  
  callback(null, response);
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports = main;