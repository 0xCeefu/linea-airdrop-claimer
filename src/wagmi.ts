import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  linea,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  chains: [
    linea
  ],
  ssr: true,
});
