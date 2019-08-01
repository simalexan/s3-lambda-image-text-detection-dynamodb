
# S3 Bucket -> Lambda (Rekognition Image Text Detection) -> DynamoDB

## Description

This is a serverless component that takes uploaded images from one S3 Bucket, invokes AWS Rekognition Detect Text and then stores the detected text along with the image key to a DynamoDB table. It contains:

- an Images S3 Bucket to upload images to.

- a Lambda that takes the image from the Images S3 bucket, detects text and stores it in a DynamoDB table (in TypeScript)

- a DynamoDB table that keeps the imageKey and imageText (detected text).

## Deployment Parameters

This component has two CloudFormation deployment parameters:

- `ImagesS3BucketName`, an optional parameter, represents the name of the Images S3 Bucket. By default its "s3-lambda-detect-image-text-bucket".

- `TableName`, an optional parameter, represents the name of the DynamoDB table. By default its "imageTexts".

## Latest Release - 1.0.0

- Initial release

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- Tests
