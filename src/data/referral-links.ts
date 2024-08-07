const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19o/QN3N8HQ4KX"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21q/98ZI1A53EK",
      "https://www.referyourchasecard.com/21q/1QKLYDOXDQ",
      "https://www.referyourchasecard.com/21q/YURXNKIY4Y",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18j/53EOT30OLL"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215j/D2KTYJ4FTP"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226p/C2WKH1NBGL",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252m/YV4FE606LH"]),
  },
  AMERICAN_EXPRESS: {
    GOLD: "https://americanexpress.com/en-us/referral/ANDENa0UQA?xl=cp19",
  },
};
