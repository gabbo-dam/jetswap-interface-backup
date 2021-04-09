import { MenuEntry } from 'jetswap-uikit2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://jetswap2.netlify.app',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://jetswap2.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://jetswap2.netlify.app/pools',
  },
  
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://jetswapinfo.netlify.app/home',
      },
      {
        label: 'Tokens',
        href: 'https://jetswapinfo.netlify.app/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://jetswapinfo.netlify.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://jetswapinfo.netlify.app/accounts',
      },
    ],
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
      {
        label: 'Github',
        href: 'https://github.com/jetfuelfinance',
      },
      {
        label: 'Docs',
        href: 'https://jetfuel-finance-1.gitbook.io/jetfuel-finance/in-development/jets-swap-amm',
      },
      {
        label: 'Blog',
        href: 'https://jetfuelfinance.medium.com/',
      },
    ],
  },
]

export default config
