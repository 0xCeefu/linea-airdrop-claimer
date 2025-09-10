import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { webSocket } from 'viem';
import {
  linea,
} from 'wagmi/chains';

const customLinea = {
  ...linea,
  rpcUrls: {
    default: {
      http: [`https://${process.env.NEXT_PUBLIC_RPC_DEFAULT!}`],
      webSocket: [`wss://${process.env.NEXT_PUBLIC_RPC_DEFAULT!}`],
    },
    public: {
      http: [`https://${process.env.NEXT_PUBLIC_RPC_PUBLIC!}`],
      webSocket: [`wss://${process.env.NEXT_PUBLIC_RPC_PUBLIC!}`]
    },
  },
};
console.log("Linea RPC URLs:", linea.rpcUrls);
console.log("Custom Linea RPC URLs:", customLinea.rpcUrls);


export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [
    customLinea 
  ],
  ssr: true,
});
