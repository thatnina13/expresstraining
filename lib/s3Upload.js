// file is for command line testing
// uploading files to aws s3

// require aws software dev kit
const AWS = require('aws-sdk')
// not sure if we need this :
// uui package

const uuid = require ('uuid')

const bucket = 'eron-bucket'

// create S3 service module instance
const s3= new.AWS.S3()
console.log(s3)
