var Administrator_ABI =
[
	{
		"constant": true,
		"inputs": [],
		"name": "myAllsCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "myAllAddr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_myAll",
				"type": "address"
			}
		],
		"name": "addMyAllToList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "searchDataCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myAllsList",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_location",
				"type": "string"
			},
			{
				"name": "_phoneNumber",
				"type": "string"
			}
		],
		"name": "addMyAll",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "searchList",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_search",
				"type": "address"
			}
		],
		"name": "addSearchList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			},
			{
				"name": "_ani",
				"type": "address"
			},
			{
				"name": "_area",
				"type": "uint256"
			},
			{
				"name": "_species",
				"type": "uint256"
			},
			{
				"name": "_id",
				"type": "bytes32"
			},
			{
				"name": "_gender",
				"type": "uint256"
			}
		],
		"name": "addAniToSearchData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

function addMyAll(email, location, phoneNumber){
	var ret;
	Administrator.addMyAll(email, location, phoneNumber, function(error,result){
		ret = result;
		if (error)
			console.error(error);
		else
			console.log("MyAll added!!["+result+"]");
	});
	return ret
}

function myAllsCount() {
	var count;
	Administrator.myAllsCount(function(e,r){
        document.getElementById('output_myAllsCount').innerHTML = r;
		count = r;
		console.log(r);
		if (e) {
			console.error(e);
		}
	});
}

function myAllsList() {
	Administrator.myAllsList(function(e,r){
        document.getElementById('output_myAllsList').innerHTML = r;
		console.log(r);

		if (e) {
			console.error(e);
		}
	});
}

