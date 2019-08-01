/*global module, require, Promise, console */

const aws = require('aws-sdk'),
	fs = require('fs'),
	s3 = new aws.S3(),
	downloadFileFromS3 = function (bucket: string, fileKey: string, filePath: string) {
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

export default {
	downloadFileFromS3: downloadFileFromS3
};
