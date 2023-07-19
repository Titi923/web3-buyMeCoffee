// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

contract Coffee{
    struct Transaction{
        string name;
        string message;
        uint timestamp;
        address from;
        uint amount;
    }

    Transaction[] transactions;
    address payable owner; //owner is going to receive funds
    constructor(){
        owner = payable(msg.sender);
    }

    function buyCoffee(string calldata name,string calldata message) external payable{
        require(msg.value > 0, "Please pay more than 0 ether");
        owner.transfer(msg.value);
        transactions.push(Transaction(name,message, block.timestamp, msg.sender, msg.value));
    }

    function getTransactions() public view returns(Transaction[] memory){
        return transactions;
    }
}