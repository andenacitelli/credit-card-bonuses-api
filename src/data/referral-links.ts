const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19P/9WT5WQBFKH"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21s/6I9J2FNU9T",
      "https://www.referyourchasecard.com/21s/63VP5J3DX1",
      "https://www.referyourchasecard.com/21s/9BZH8BJC1Z",
      "https://www.referyourchasecard.com/21s/B4FA0PBHTK",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18C/BDWS964YDG"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215A/OADUJ1AWMB"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226o/0MJIAMX5UZ",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252n/YV4FE606LH"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA",
  },
};
