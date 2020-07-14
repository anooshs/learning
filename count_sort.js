const data = [
    {
    "sprint":"t1 1.1",
    "uat":false,
    "sit":true,
    "prod":true
    },
    {
    "sprint":"t1 1.2",
    "uat":true,
    "sit":false,
    "prod":true
    },
    {
    "sprint":"t1 2.2",
    "uat":true,
    "sit":true,
    "prod":true
    },
    {
    "sprint":"t1 2.1",
    "uat":true,
    "sit":true,
    "prod":false
    },
    {
    "sprint":"t1 1.0",
    "uat":true,
    "sit":false,
    "prod":true
    },
    {
    "sprint":"t2 1.1",
    "uat":true,
    "sit":true,
    "prod":true
    },
    {
    "sprint":"t1 1.2",
    "uat":false,
    "sit":true,
    "prod":true
    },
    {
    "sprint":"t2 2.1",
    "uat":true,
    "sit":true,
    "prod":false
    },
    {
    "sprint":"t2 1.0",
    "uat":true,
    "sit":false,
    "prod":true
    }
];
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
    
data.sort(GetSortOrder("sprint"));
console.log(data);


let tempSprint;
let uatCount=0;
let sitCount=0;
let prodCount=0;
let tempObj = {};
let sprintCountArray=[];
const sprintArray = ["t1", "t2"];
for( let i = 0; i < sprintArray.length ; i++ ) {
    tempSprint = data.filter(t => t.sprint === sprintArray[i]);
    uatcount = tempSprint.filter(c => c.uat === true).length;
    sitcount = tempSprint.filter(c => c.sit === true).length;
    prodcount = tempSprint.filter(c => c.prod === true).length;
    tempObj = {
        "testCount" : tempSprint.length,
        "uatCount" : uatCount,
        "sitCount" : sitCount,
        "prodCount" : prodCount
    };
    sprintCountArray.push(tempObj);
    console.log(tempObj);
    console.log('Test Count' , tempSprint.length);
    console.log('UAT Count' , uatcount);
    console.log('SIT Count' , sitcount);
    console.log('PROD Count' , prodcount); 
}
console.log(sprintCountArray); 
