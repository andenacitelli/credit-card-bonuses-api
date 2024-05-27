## credit-card-offers-api

⚡ Free API for current credit card offers ⚡

The data is provided in several formats:

- **CSV** - https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/exports/data.csv
- **JSON** - https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/exports/data.json
- **YAML** - https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/exports/data.yaml

> **Looking for AWS Lambda links?** We migrated away from those on May 18th, 2024, preferring to instead statically embed them in this repository. Old endpoints will stick around until at least **July 1st, 2024**, but data will slowly become stale, so I advise you migrate as soon as able!

The companion site for this is [Offer Optimist](https://offeroptimist.com). It comes with tons of filters, valuation settings, and much more, and is a great first approach to comparing all the different cards out there. Give it a try!

---

### API Specification

We keep an OpenAPI (formerly Swagger) spec here: https://raw.githubusercontent.com/andenacitelli/credit-card-bonuses-api/main/src/api.yaml

For a nice UI, you can go to https://editor.swagger.io/, click File > Import URL, then paste the above URL.

You're free to do code generation or whatever you like off of it. The spec has had enough time to mature that future breaking changes can be considered unlikely.

### Support

I maintain this for free. If you found this useful and would like to support me, check out the "Sponsor" options on the right of this repository to donate directly, or use one of the referral links on [Offer Optimist](https://offeroptimist.com), which I get a kickback for. Thanks for your support!

### License

This project is MIT-Licensed with an added [Commons Clause](https://commonsclause.com/). In effect, you can do whatever you like with the project, just don't turn around and sell it as a substantial part of a commercial product. I make this available with the intent of enabling hobbyists, not to get in some long-term business deal that implies support, SLAs, and more on my part.
