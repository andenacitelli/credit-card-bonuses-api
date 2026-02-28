const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19u/F0DZZK1XD0"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21d/868SJCY65Q",
      "https://www.referyourchasecard.com/21d/AZFPSQ0R69",
      "https://www.referyourchasecard.com/21d/NYYV1UTE81",
      "https://www.referyourchasecard.com/21d/20AIM7KB7G",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18e/A85BX0FG21"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215e/OPTN75PXFL"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226f/L4650PBX9E",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252s/ZB09TY4LRN"]),
  },
  AMERICAN_EXPRESS: {
    BLUE_BUSINESS_PLUS: getRandom([
      "https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=ANDENa2lzi&XLINK=MYCP",
    ]),
  },
  DISCOVER: getRandom(["https://refer.discover.com/aacitelli3!a9f01e6210!a"]),
};
