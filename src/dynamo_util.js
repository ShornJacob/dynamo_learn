//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-examples-using-tables.html
//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html

import AWS from "aws-sdk";

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

// export function ddb_describetable(tablename, setTableDesc) {
//   // Create the DynamoDB service object
//   var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

//   // Call DynamoDB to retrieve the selected table descriptions
//   ddb.describeTable({ TableName: tablename }, function(err, data) {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       // console.log("Success", data.Table.AttributeDefinitions)
//       //a return here will not a retirn from ddb_describetable, so usin state setter
//       setTableDesc(data.Table.AttributeDefinitions);
//     }
//   });
// }

export function ddb_describetable(tablename, setTableDesc) {
  // Create the DynamoDB service object
  var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

  // Call DynamoDB to retrieve the selected table descriptions
  ddb.describeTable({ TableName: tablename }, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      // console.log("Success", data.Table.AttributeDefinitions)
      //a return here will not a retirn from ddb_describetable, so usin state setter
      setTableDesc(data.Table.AttributeDefinitions);
    }
  });
}

export function ddb_listtables() {
  // Call DynamoDB to retrieve the selected table descriptions
  ddb.listTables({ Limit: 10 }, function(err, data) {
    if (err) {
      console.log("Error", err.code);
    } else {
      console.log("Success", data.TableNames);
    }
  });
}

//https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
export function ddb_putItem(tableName, data ) {
  // Call DynamoDB to retrieve the selected table descriptions

  const params = {
    TableName: tableName,
    Item: {
     [data[0].AttributeName]: {[data[0].AttributeType] :  data[0].data},
      // 'CUSTOMER_NAME' : {S: 'Richard Roe'}
    }
  };

  console.log(data)
  console.log(params )

  // ddb.putItem({ Limit: 10 }, function(err, data) {
  //   if (err) {
  //     console.log("Error", err.code);
  //   } else {
  //     console.log("Success", data.TableNames);
  //   }
  // });
}
