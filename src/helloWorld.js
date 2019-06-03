'use strict';

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v${process.env.VERSION}! Your function executed successfully!`
    }),
  };
};
