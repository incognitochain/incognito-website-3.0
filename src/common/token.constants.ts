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

const BTC_TOKEN_ID = 'b832e5d3b1f01a4f0623f7fe91d6673461e1f5d37d91fe78c5c2e6183ff39696';
const ETH_TOKEN_ID = 'ffd8d42dc40a8d166ea4848baf8b5f6e912ad79875f4373070b59392b1756c8f';
const BNB_TOKEN_ID = 'e5032c083f0da67ca141331b6005e4a3740c50218f151a5e829e9d03227e33e2';
const DAI_TOKEN_ID = '3f89c75324b46f13c7b036871060e641d996a24c09b3065835cb1d38b799d6c1';
const LTC_TOKEN_ID = '7450ad98cb8c967afb76503944ab30b4ce3560ed8f3acc3155f687641ae34135';
const XMR_TOKEN_ID = 'c01e7dc1d1aba995c19b257412340b057f8ad1482ccb6a9bb0adce61afbf05d4';
const ZEC_TOKEN_ID = 'a609150120c0247407e6d7725f2a9701dcbb7bab5337a70b9cef801f34bc2b5c';
const USDC_TOKEN_ID = '1ff2da446abfebea3ba30385e2ca99b0f0bbeda5c6371f4c23c939672b429a42';
const DASH_TOKEN_ID = '447b088f1c2a8e08bff622ef43a477e98af22b64ea34f99278f4b550d285fbff';
const USDT_TOKEN_ID = '716fd1009e2a1669caacc36891e707bfdf02590f96ebd897548e8963c95ebac0';
const DOGE_TOKEN_ID = '0dfc519d73c1664858ac27111258e0e287f0f6fa900a1ff9d4bb4ad1443092f5';
const BUSD_TOKEN_ID = '9e1142557e63fd20dee7f3c9524ffe0aa41198c494aa8d36447d12e85f0ddce7';
const BAT_TOKEN_ID = '1fe75e9afa01b85126370a1583c7af9f1a5731625ef076ece396fcc6584c2b44';
const LINK_TOKEN_ID = 'e0926da2436adc42e65ca174e590c7b17040cd0b7bdf35982f0dd7fc067f6bcf';
const NEO_TOKEN_ID = '86c45a9fdddc5546e3b4f09dba211b836aefc5d08ed22e7d33cff7f9b8b39c10';
const ZIL_TOKEN_ID = '880ea0787f6c1555e59e3958a595086b7802fc7a38276bcd80d4525606557fbc';

const PRIORITY_TOKEN_ID = [
  // PRV_TOKEN_ID,
  BTC_TOKEN_ID,
  ETH_TOKEN_ID,
  BNB_TOKEN_ID,
  DAI_TOKEN_ID,
  LTC_TOKEN_ID,
  // XMR_TOKEN_ID,
  // ZEC_TOKEN_ID,
  // USDC_TOKEN_ID,
  // DASH_TOKEN_ID,
  USDT_TOKEN_ID,
  // DOGE_TOKEN_ID,
  // BUSD_TOKEN_ID,
  // BAT_TOKEN_ID,
  // LINK_TOKEN_ID,
  // NEO_TOKEN_ID,
  // ZIL_TOKEN_ID,
];

export default {
  PRV,
  PRV_TOKEN_ID,
  USDT_TOKEN_ID,
  BTC_TOKEN_ID,
  ETH_TOKEN_ID,
  BNB_TOKEN_ID,
  XMR_TOKEN_ID,
  DAI_TOKEN_ID,
  LTC_TOKEN_ID,
  ZEC_TOKEN_ID,
  USDC_TOKEN_ID,
  DASH_TOKEN_ID,
  DOGE_TOKEN_ID,
  BUSD_TOKEN_ID,
  BAT_TOKEN_ID,
  LINK_TOKEN_ID,
  NEO_TOKEN_ID,
  ZIL_TOKEN_ID,
  PRIORITY_TOKEN_ID,
};
