
# S3 Bucket -> Lambda (Rekognition Image Text Detection) -> DynamoDB

## Description

This is a serverless component that takes uploaded SVG files from one S3 Bucket, converts them to PDF and uploads to another S3 Bucket. It contains:

- an Input S3 Bucket that accepts SVG files.

- a Lambda that takes the SVG file from the Input S3 bucket, converts it the file to a PDF and uploads it to the Output bucket

- an Output S3 Bucket that receives PDF files.

## Deployment Parameters

This component has one CloudFormation deployment parameter:

- `ConversionTimeout`, an optional parameter, represents the timeout of the Conversion Lambda function. By default its 60 seconds.

- `InputBucketName`, an optional parameter, represents the name of the Input SVG Bucket. By default its "s3-lambda-input-svg-bucket".

- `OutputBucketName`, an optional parameter, represents the name of the Output PDF Bucket. By default its "s3-lambda-output-pdf-bucket".

## Latest Release - 1.1.0

- Added Input and Output bucket names as Cloudformation Parameters

## Roadmap - Upcoming changes

Here are the upcoming changes that I'll add to this serverless component:

- ESLint
- Tests
