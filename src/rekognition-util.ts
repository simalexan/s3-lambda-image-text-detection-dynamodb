/*global module, require, Promise, console */

const aws = require('aws-sdk'),
	rekognition = new aws.Rekognition(),
	detectText = async function (bucket: string, fileKey: string) {

		console.log('reKognizing', bucket, fileKey);
    const params = {
      Image: {
        S3Object: {
          Bucket: bucket,
          Name: fileKey
        }
      }
    };
    
    try {
      return rekognition.detectText(params).promise();
    } catch (err) {
      console.log(err);
      throw err;
    }
	};

export {
	detectText
};
