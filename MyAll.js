<script src="./Administrator_Contract.js"> </script>
<script src="./CompanionAnimal_Contract.js"> </script>
<script src="./DogSearch_Contract.js"> </script>
<script src="./MyAll_Contract.js"> </script>

var AdministratorContract = web3.eth.contract(Administrator_ABI);
var CompationAnimalContract = web3.eth.contract(CompanionAnimal_ABI);
var DogSearchContract = web3.eth.contract(DogSearch_ABI);
var MyAllContract = web3.eth.contract(MyAll_ABI);
    
var Administrator = AdministratorContract.at('0x7d96f33758de86990b5a9a5a7b6d83a38af15fd1');


