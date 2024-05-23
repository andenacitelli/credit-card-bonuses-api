## credit-card-offers-api

⚡ Free API for current credit card offers ⚡

The data is provided as both JSON and CSV:

- **CSV** - https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/exports/data.csv
- **JSON** - https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/exports/data.json

> **Looking for AWS Lambda links?** We migrated away from those on May 18th, 2024, preferring to instead statically embed them in this repository. Old endpoints will stick around until at least **July 1st, 2024**, but data will slowly become stale, so I advise you migrate as soon as able!

The companion site for this is [Offer Optimist](https://offeroptimist.com). It comes with tons of filters, valuation settings, and much more, and is a great first approach to comparing all the different cards out there. Give it a try!

---

_I work for [Akkio](https://akkio.com), an AI Data platform for agencies and their If you're looking for predictive AI without needing any data science knowledge, check us out!_

### Features

- **JSON + CSV Export:** - You can get the data in either format.
- **OpenAPI Spec:** - To see the exact format for what we'll return, you can view our OpenAPI / Swagger spec at `src/api.yaml`. For a nice UI, I recommend you go to https://editor.swagger.io/, then File > Import URL, then paste in https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/src/api.yaml.

### Support

I pay for the server time and development cost for this entirely out of my own pocket. If you'd like to support me, you can support me with the "Sponsor" options on the right of this repository or by using one of the referral links on [Offer Optimist](https://offeroptimist.com), which I get a kickback for. Thank you for your support!

### License

This project is under the MIT License with an added [Commons Clause](https://commonsclause.com/). In effect, you can do whatever you like with the project, just don't use it as a substantial part of a commercial product.

I make this available with the intent of enabling hobbyists to use it as they wish, not to try and get in some long-term business deal that implies support, SLAs, and more on my part.
