const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19v/F0DZZK1XD0"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21e/CJ3VTYDKCY",
      "https://www.referyourchasecard.com/21e/ZL2X5T28QV",
      "https://www.referyourchasecard.com/21e/5NV9F12UAS",
      "https://www.referyourchasecard.com/21e/EOXF04KPYS",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18m/Y02RUGKSU9"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215r/OPTN75PXFL"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226m/1EI0FYIHYB",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252u/ASVAYOAFR1"]),
  },
  AMERICAN_EXPRESS: {
    BLUE_BUSINESS_PLUS: getRandom([
      "https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=ANDENa2lzi&XLINK=MYCP",
    ]),
  },
  DISCOVER: getRandom(["https://refer.discover.com/aacitelli3!a9f01e6210!a"]),
};
