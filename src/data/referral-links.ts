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
      "https://www.referyourchasecard.com/21m/MCRHDUWK7S",
      "https://www.referyourchasecard.com/21m/2K0IOUXKPS",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18r/BDWS964YDG"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215j/6LYQQTKRUJ"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENatae0?xl=cp19",
    BUSINESS_GREEN:
      "https://americanexpress.com/en-us/referral/ANDENaHXuk?xl=cp19",
    DELTA_BUSINESS_PLATINUM:
      "https://americanexpress.com/en-us/referral/ANDENaV0cz?XLINK=MYCP",
  },
};
