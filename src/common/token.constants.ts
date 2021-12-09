import { isMainnet } from '@configs/Configs.env';

const PRV_TOKEN_ID = '0000000000000000000000000000000000000000000000000000000000000004';

export const PRV = {
  id: PRV_TOKEN_ID,
  name: 'Privacy',
  displayName: 'Privacy',
  symbol: 'PRV',
  pDecimals: 9,
  hasIcon: true,
  originalSymbol: 'PRV',
  isVerified: true,
};

const USDT_TOKEN_ID = isMainnet
  ? '716fd1009e2a1669caacc36891e707bfdf02590f96ebd897548e8963c95ebac0'
  : 'fdd928bc86c82bd2a7c54082a68332ebb5f2cde842b1c2e0fa430ededb6e369e';

export default {
  PRV_TOKEN_ID,
  PRV,
  USDT_TOKEN_ID,
};
