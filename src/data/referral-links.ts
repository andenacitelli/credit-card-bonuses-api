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
    UNITED: getRandom(["https://www.referyourchasecard.com/215o/P2LRT1OY54"]),
    SOUTHWEST: getRandom(["https://www.referyourchasecard.com/226L/0MJIAMX5UZ"])
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENatae0?xl=cp19",
    BUSINESS_GREEN:
      "https://americanexpress.com/en-us/referral/ANDENaHXuk?xl=cp19",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/ANDENan46E?xl=cp01",
  },
};
