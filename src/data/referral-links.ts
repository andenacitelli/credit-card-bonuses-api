const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19r/EKKGSTEZXG"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21s/9BZH8BJC1Z",
      "https://www.referyourchasecard.com/21s/6I9J2FNU9T",
      "https://www.referyourchasecard.com/21s/63VP5J3DX1",
      "https://www.referyourchasecard.com/21s/B4FA0PBHTK",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18A/A85BX0FG21"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215Y/RO0613CS0T"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226m/EK4J5RUTDJ",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252a/YV4FE606LH"]),
  },
  AMERICAN_EXPRESS: {
    BLUE_BUSINESS_PLUS: getRandom([
      "https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=ANDENa2lzi&XLINK=MYCP",
    ]),
    GOLD: getRandom([
      "https://americanexpress.com/en-us/referral/gold-card?ref=ANDENagIRZ&XLINK=MYCP",
    ]),
  },
  DISCOVER: getRandom(["https://refer.discover.com/aacitelli3!a9f01e6210!a"]),
};
