pragma solidity >=0.4.21 <0.6.0;

contract Certificate {
    mapping(address => bool) public accnt;
    event dataSent(address sndr, bool b);

	struct College {
        address owner;
	}

	function sendData() public {
        
        accnt[msg.sender] = true;

      emit dataSent(msg.sender,true);
	}
}
