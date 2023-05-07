import { MetaMask } from '@web3-react/metamask'
import type { Connector } from '@web3-react/types'
import { WalletConnect as WalletConnect } from '@web3-react/walletconnect'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

export function getName(connector: Connector) {
  if (connector instanceof MetaMask) return 'MetaMask'
  if (connector instanceof WalletConnectV2) return 'WalletConnect V2'
  if (connector instanceof WalletConnect) return 'WalletConnect'
  return 'Unknown'
}
