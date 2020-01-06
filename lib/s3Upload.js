// file is for command line testing
// uploading files to aws s3

// require aws software dev kit

require('dotenv').config()

const AWS = require('aws-sdk')
// not sure if we need this :
// uui package

const uuid = require ('uuid')

const bucket = 'trainingbucket1989'

// create S3 service module instance
const s3= new AWS.S3()
console.log(s3)

//create object params for putObject
// call:
const params = {
  Bucket: bucket,
  Key: 'file-text.txt',
  Body: 'Hello World!'
}

// const uploadPromise = s3.putObject(params).promise()
//uploadPromise.the(data => {
// console.log(data)
// })
// .catch(console.error)
s3.putObject(params).promise()
  .then(console.log)
  .catch(console.error)
