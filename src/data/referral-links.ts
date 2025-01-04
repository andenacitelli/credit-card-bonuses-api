const getRandom = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)] as string;
};

export const REFERRALS = {
  CHASE: {
    SAPPHIRE: getRandom(["https://www.referyourchasecard.com/19Q/QN3N8HQ4KX"]),
    INKS: getRandom([
      "https://www.referyourchasecard.com/21s/63VP5J3DX1",
      "https://www.referyourchasecard.com/21s/9BZH8BJC1Z",
      "https://www.referyourchasecard.com/21s/B4FA0PBHTK",
      "https://www.referyourchasecard.com/21s/6I9J2FNU9T",
    ]),
    FREEDOM: getRandom(["https://www.referyourchasecard.com/18N/UXXI57YWJ7"]),
    UNITED: getRandom(["https://www.referyourchasecard.com/215n/D2KTYJ4FTP"]),
    SOUTHWEST: getRandom([
      "https://www.referyourchasecard.com/226n/0MJIAMX5UZ",
    ]),
    MARRIOTT: getRandom(["https://www.referyourchasecard.com/252n/YV4FE606LH"]),
  },
  DISCOVER: getRandom(["https://refer.discover.com/aacitelli3!a9f01e6210!a"]),
};
