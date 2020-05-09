import React, { Component } from 'react';
import LoginModal from './LoginModal';
import Web3 from 'web3';
import Certificate from '../abis/Certificate.json';
import SignUpModal from './SignUpModal';
import {NavLink} from 'react-router-dom';
import Padding from './Padding';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Header extends Component {

    async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
   
 
    async loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  }
  else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  }
  else {
    window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
  }
}  

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    console.log(this.state.account)
    const networkId = await web3.eth.net.getId()
    const networkData = Certificate.networks[networkId]
    if(networkData) {
      const certificate = web3.eth.Contract(Certificate.abi, networkData.address)
      this.setState({certificate})
       const a = await this.state.certificate.methods.accnt(accounts[0]).call()
        if(a) {
         return <Redirect to="./OtherPage" />
  }
     }
    else{
      window.alert('Chat contract not deployed to network')
    }
    
  }
  
    constructor(props){
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.openSignUpModal = this.openSignUpModal.bind(this);
        this.sendAccountdata = this.sendAccountdata.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            account: '',
            showLoginModal: false,
            showSignUpModal: false
        }
    }

    openLoginModal(){
        this.setState(()=>({showLoginModal:true}));
    }
    openSignUpModal(){
        this.setState(()=>({showSignUpModal:true}));
    }
    handleClose(){
        this.setState(()=>({
            showLoginModal:false,
            showSignUpModal:false
        }))
    }
    async sendAccountdata() {
        this.state.certificate.methods.sendData().send({from:this.state.account}).once('receipt', function(receipt){
   console.log(receipt.contractAddress) // contains the new contract address
})
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="purpleBackground" >
            <Navbar.Brand href="#home">
            <img
                src="images/android-chrome-192x192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Img nt found"
            />
            </Navbar.Brand>
            <Navbar.Brand href="/">Certifyed</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <NavLink className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/other">Other</NavLink>
                </Nav>
                <Nav>
                <Padding>
                    <Button className="mybutton" variant="outline-warning" onClick={this.openLoginModal}>Sign In</Button>
                </Padding>
                <Padding>
                    <Button  className="mybutton" variant="outline-warning" onClick={this.openSignUpModal}>Sign Up</Button>
                </Padding>
                </Nav>
            </Navbar.Collapse>
            <LoginModal show={this.state.showLoginModal} handleClose={this.handleClose}/>
            <SignUpModal sendAccountdata = {this.sendAccountdata} show={this.state.showSignUpModal} handleClose={this.handleClose}/>
            </Navbar>
            
        );
    }
}

export default Header;
