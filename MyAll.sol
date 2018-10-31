contract MyAll {
    address owner;
    address payment;
    address[] categories;
    string email;
    string location;
    string phoneNumber;
    
    constructor(string _email, 
                string _location, 
                string _phoneNumber) public {
        owner = msg.sender;
        email = _email;
        location = _location;
        phoneNumber = _phoneNumber;
        
        payment = new VirtualWallet();
        categories.push(new CompanionAnimal(owner));
    }

    function addCategory(uint256 _kind, address _category) public {
        categories[_kind] = _category;
    }
    
    function addAnimal(uint256 _kind, address _ani) public {
        CompanionAnimal animal = CompanionAnimal(categories[0]);
        animal.addAni(_kind, _ani);
    }

    function categoriesList() public view returns (address[]) {
        return categories;
    }

    function categoriesCount() public constant returns (uint256) {
        return categories.length;
    }

    function categoriesAddr(uint256 _index) public constant returns (address) {
        return categories[_index];
    }
    
    function dogsList() public view returns (address[]) {
        if(categories[0] == address(0)) {
            return categories;
        }
        else {
            CompanionAnimal animal = CompanionAnimal(categories[0]);
            return animal.aniList(0);
        }
    }
    
    function dogsCount() public constant returns (uint256) {
        if(categories[0] == address(0)) {
            return 0;
        }
        else {
            CompanionAnimal animal = CompanionAnimal(categories[0]);
            return animal.aniCount(0);
        }
    }

    function dogAddr(uint256 _index) public constant returns (address) {
        if(categories[0] == address(0)) {
            return address(0);
        }
        else {
            CompanionAnimal animal = CompanionAnimal(categories[0]);
            return animal.aniAddr(0, _index);
        }
    }
    
} 