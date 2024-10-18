const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19o/QN3N8HQ4KX"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21r/URE6QWKIBT", // Premier
      // "https://www.referyourchasecard.com/21r/5XN33129Y3",
      // "https://www.referyourchasecard.com/21r/Z9CI8ZT4ON",
      // "https://www.referyourchasecard.com/21r/ONDY31NAZE",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18s/BXSOWPQ68F"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215A/OADUJ1AWMB"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226p/C2WKH1NBGL",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252j/1FMGX9HG9J"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA",
  },
};
