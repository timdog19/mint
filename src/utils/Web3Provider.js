import React from 'react'
import Web3 from 'web3'
import NFT from 'abis/NFT.json'
import { REACT_APP_CHAINID, REACT_APP_ASTRO_TOKEN_ADDRESS } from 'utils/config'

const WRONG_NETWORK = 'You should connect to Avalanche Network'
const WRONG_ACCOUNT = "You don't have any account on the Avalanche Network"
const SUCCSESS_CONNECTED = 'Successfully connected to the Avalanche Network'
const METAMASK_UNINSTALLED = 'Non-Avalanche browser detected. You should consider trying MetaMask!'
const CHAIN_ID = REACT_APP_CHAINID

export const Web3Context = React.createContext()

export class Web3Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connectionStatus: null,
      notifyLabel: '',
      balance: -1,
      address: '',
      walletInstalledStatus: true,
      nftToken: null,
    }
  }

  async componentDidMount() {}

  loadWeb3 = async () => {
    let self = this
    if (window.ethereum) {
      // register handlers
      window.ethereum.on('chainChanged', function (chain) {
        if (chain !== CHAIN_ID) {
          self.setState({ ...self.state, connectionStatus: false, notifyLabel: WRONG_NETWORK })
        } else {
          self.getBlockchainData()
        }
      })
      window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts === undefined || accounts[0] === undefined) {
          self.setState({ ...self.state, connectionStatus: false, notifyLabel: WRONG_ACCOUNT })
        }
        if (window.ethereum.chainId !== CHAIN_ID) {
          self.setState({ ...self.state, connectionStatus: false, notifyLabel: WRONG_NETWORK })
        } else {
          self.getBlockchainData()
        }
      })
      window.ethereum.on('disconnect', function () {})
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      if (window.ethereum.chainId !== CHAIN_ID) {
        self.setState({ ...self.state, connectionStatus: false, notifyLabel: WRONG_NETWORK })
      } else {
        self.getBlockchainData()
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      self.getBlockchainData()
      self.setState({ ...self.state, connectionStatus: true })
    } else {
      self.setState({
        ...self.state,
        walletInstalledStatus: false,
        connectionStatus: false,
        notifyLabel: METAMASK_UNINSTALLED,
      })
    }
  }

  getBlockchainData = async () => {
    let accounts = await window.web3.eth.getAccounts()
    const nftToken = new web3.eth.Contract(NFT.abi, REACT_APP_ASTRO_TOKEN_ADDRESS)
    window.web3.eth.getBalance(accounts[0]).then(data => {
      let balance = Math.floor(data / 10000000000 + 0.5) / 100000000
      this.setState({
        ...this.state,
        connectionStatus: true,
        notifyLabel: SUCCSESS_CONNECTED,
        balance: balance,
        address: accounts[0],
        nftToken: nftToken,
      })
    })
  }

  render() {
    return (
      <Web3Context.Provider
        value={{
          connectionStatus: this.state.connectionStatus,
          notifyLabel: this.state.notifyLabel,
          balance: this.state.balance,
          address: this.state.address,
          walletInstalledStatus: this.state.walletInstalledStatus,
          nftToken: this.state.nftToken,
          loadWeb3: this.loadWeb3,
        }}
      >
        {this.props.children}
      </Web3Context.Provider>
    )
  }
}
