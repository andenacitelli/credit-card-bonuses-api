## credit-card-offers-api

⚡ Free API for current credit card offers ⚡

We allow data exporting in several formats. Simply visit the following pages in your browser and download the resulting page.

- **JSON** - `https://00tj54p4lb.execute-api.us-east-1.amazonaws.com/json`
- **CSV** - `https://00tj54p4lb.execute-api.us-east-1.amazonaws.com/csv`

The companion site for this is [Offer Optimist](https://offeroptimist.com). It comes with tons of filters, valuation settings, and much more, and is a great first approach to comparing all the different cards out there. Give it a try!

### Features

- **JSON + CSV Export:** - You can get the data in either format.
- **OpenAPI Spec:** - To see the exact format for what we'll return, you can view our OpenAPI / Swagger spec at `src/api.yaml`. For a nice UI, I recommend you go to https://editor.swagger.io/, then File > Import URL, then paste in https://github.com/aacitelli/credit-card-bonuses-api/blob/main/src/api.yaml.

### Support

I pay for the server time and development cost for this entirely out of my own pocket. If you'd like to support me, you can support me with the "Sponsor" options on the right ([direct link here](https://github.com/sponsors/aacitelli)) or by using one of the referral links on [Offer Optimist](https://offeroptimist.com), which I get a kickback for. Thank you for your support!

### Contributing

I highly encourage PRs or Issues for data updates. If you see an offer is out of date, create an issue or fix the issue yourself with a PR and I'll be happy to merge it in. 

### License

This project is licensed under the MIT license. This basically means you can use it for any purpose, commercially or not, but I have zero liability.

### Commercial Usage

Data accuracy is on a best-effort basis and is generally 90%+. I also run [Offer Optimist](https://offeroptimist.com) off of this data, so I have a stake in the game. However, **I make no guarantees** about perfect accuracy. If you need better accuracy, please get in touch ([here's my portfolio](https://andenacitelli.com), which has my contact info) and we can figure something out.

If you plan to use the project commercially, **please get in touch first.** I'll be happy to help you onboard, just want to make sure I have it noted down and that you have a cache with cache invalidation configured (even every five minutes should be sufficient) to avoid overloading my API. This helps me keep the project free and accessible for everyone.