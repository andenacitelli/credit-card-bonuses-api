const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: {
      PREFERRED: getRandom([
        "https://www.referyourchasecard.com/6j/QN3N8HQ4KX",
      ]),
    },
    INKS: getRandom([
      "https://www.referyourchasecard.com/21o/98ZI1A53EK",
      "https://www.referyourchasecard.com/21o/1QKLYDOXDQ",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18o/9KKC4IK8LP"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215N/D2KTYJ4FTP"]),
    SOUTHWEST: getRandom(["https://www.referyourchasecard.com/226N/0MJIAMX5UZ"])
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA?xl=cp19",
    BUSINESS_GREEN:
      "https://americanexpress.com/en-us/referral/ANDENaewip?xl=cp19",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/ANDENaYGO3?xl=cp19",
  },
};
