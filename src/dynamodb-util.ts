const aws = require('aws-sdk'),
  dynamoDb  = new aws.DynamoDB.DocumentClient(),
  uuidv4 = require('uuid/v4'),
  
	saveToTable = async function (tableName: any, primaryKey: any, data: object) {
		const item = {
      [primaryKey]: uuidv4()
    };
    Object.assign(item, data);

		const params = {
			TableName: tableName,
			Item: item
    };
    
    try {
      return dynamoDb.put(params).promise();
    } catch (err) {
      console.log(err);
      throw err;
    }
	};

export {
	saveToTable
};
