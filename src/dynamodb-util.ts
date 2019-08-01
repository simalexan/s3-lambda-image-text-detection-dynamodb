/*global module, require, Promise, console */

const aws = require('aws-sdk'),
	fs = require('fs'),
	s3 = new aws.S3(),
	saveToTable = async function (tableName: any, itemKey: string, itemValue: object) {
		'use strict';
		console.log('downloading', bucket, fileKey, filePath);
		return new Promise(function (resolve, reject) {
			const file = fs.createWriteStream(filePath),
				stream = s3.getObject({
					Bucket: bucket,
					Key: fileKey
				}).createReadStream();
			stream.on('error', reject);
			file.on('error', reject);
			file.on('finish', function () {
				console.log('downloaded', bucket, fileKey);
				resolve(filePath);
			});
			stream.pipe(file);
		});
	};

export {
	saveToTable
};
