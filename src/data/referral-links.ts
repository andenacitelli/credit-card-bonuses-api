const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: {
      PREFERRED: getRandom([
        "https://www.referyourchasecard.com/6m/BQQ1IP0GRO",
      ]),
    },
    INKS: getRandom([
      "https://www.referyourchasecard.com/21m/MCRHDUWK7S",
      "https://www.referyourchasecard.com/21m/2K0IOUXKPS",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/6m/0XTOK0PQGK"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENav6ex?XLINK=MYCP",
    BUSINESS_GREEN:
      "https://americanexpress.com/en-us/referral/ANDENawfEX?XLINK=MYCP",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/ANDENaIh7t?XLINK=MYCP",
  },
};
