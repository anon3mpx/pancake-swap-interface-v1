import { ChainId } from '@anon.3mpx/tpls-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.TESTNET]: '0xcA11bde05977b3631167028862bE2a173976CA11',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }