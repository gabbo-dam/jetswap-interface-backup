import { MenuEntry } from 'jetswap-uikit-new'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://jetswap.finance',
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
    href: 'https://jetswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://jetswap.finance/pools',
  },
  
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.jetswap.finance/home',
      },
      {
        label: 'Tokens',
        href: 'https://info.jetswap.finance/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://info.jetswap.finance/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://info.jetswap.finance/accounts',
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