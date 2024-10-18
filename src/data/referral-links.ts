const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19P/9WT5WQBFKH"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21r/URE6QWKIBT", // Premier
      // "https://www.referyourchasecard.com/21r/5XN33129Y3",
      // "https://www.referyourchasecard.com/21r/Z9CI8ZT4ON",
      // "https://www.referyourchasecard.com/21r/ONDY31NAZE",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18C/BDWS964YDG"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215A/OADUJ1AWMB"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226o/0MJIAMX5UZ",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252s/EE1YBTRY3X"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA",
  },
};
