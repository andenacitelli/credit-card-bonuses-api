const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19t/F0DZZK1XD0"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21u/6NRVE22NPE",
      "https://www.referyourchasecard.com/21u/5P2JOG1KV1",
      "https://www.referyourchasecard.com/21u/VHD03DKTV7",
      "https://www.referyourchasecard.com/21u/77SVORJIWF",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18A/A85BX0FG21"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215d/OPTN75PXFL"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226s/1EI0FYIHYB",
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
