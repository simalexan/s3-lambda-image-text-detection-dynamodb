
import { saveToTable } from './dynamodb-util';

const s3Util = require('./s3-util'),
  path = require('path'),
  convert = require('./convert'),
  os = require('os'),
  TABLE_NAME = process.env.TABLE_NAME,
  EXTENSION = process.env.EXTENSION;

export const handler = async function (eventObject: any = {}, context: any = {}) {
  const eventRecord = eventObject.Records && eventObject.Records[0],
    inputBucket = eventRecord.s3.bucket.name,
    key = eventRecord.s3.object.key,
    id = context.awsRequestId,
    resultKey = key.replace(/\.[^.]+$/, EXTENSION),
    tempPath = path.join(os.tmpdir(), id),
    convertedPath = path.join(os.tmpdir(), 'converted-' + id + EXTENSION);


  return s3Util.downloadFileFromS3(inputBucket, key, tempPath)
    .then(() => convert(tempPath, convertedPath))
    .then(() => saveToTable(TABLE_NAME, { name: key,  }));
};
