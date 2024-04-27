const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19m/QN3N8HQ4KX"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21q/98ZI1A53EK",
      "https://www.referyourchasecard.com/21q/1QKLYDOXDQ",
      "https://www.referyourchasecard.com/21q/YURXNKIY4Y",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18M/BDWS964YDG"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215r/2YQ6628FQC"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226m/0MJIAMX5UZ",
    ]),
  },
  AMERICAN_EXPRESS: {
    GREEN:
      "https://americanexpress.com/en-us/referral/business-green-rewards-charge-card?ref=ANDENahhML&xl=cp01",
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA?xl=cp19",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/delta-skymiles-platinum?ref=ANDENaNoZ9&xl=cp01",
  },
};
