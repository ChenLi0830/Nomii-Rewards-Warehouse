'use strict';

const main = (event, context, callback) => {
  console.log("event", event);
  console.log("event.Records", event.Records);
  console.log("event.Records[0]", event.Records[0]);
  console.log("event.Records[0].dynamodb", event.Records[0].dynamodb);
  
  const {OldImage, NewImage} = event.Records[0].dynamodb;
  console.log("OldImage", OldImage);
  console.log("NewImage", NewImage);
  // event.Records[0].dynamodb.NewImage
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'User updates',
      input: event,
    }),
  };
  
  callback(null, response);
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports = main;