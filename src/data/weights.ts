/**
 * Weights applied to different kind of credits
 * I centrally source this for consistency across cards, otherwise I end up basically making fresh decisions each time
 *
 * TODO: Expand out more of these. Every single credit should end up mapped back to here. Probably something I should enforce with the type system as well.
 */
export const WEIGHTS = {
  /**
   * Credit broadly fungible for a prominent travel category like hotels or airfare
   * These are easy to use and generally easy to get near-full value for
   */
  TRAVEL_CREDIT_FUNGIBLE: 0.9,

  /**
   * Credit fungible for a prominent travel category like hotels or airfare, but only one of them
   * These generally require you going a bit out of your way to use, but are still mostly valuable
   */
  TRAVEL_CREDIT_LOYALTY_PROGRAM_SPECIFIC: 0.75,

  /**
   * These are usually pretty valuable, but you usually can't book right at the limit (i.e. for a FNC up to 50k, you don't usually find a 50k hotel), so reasonably high but not perfect weight makes sense
   */
  FREE_NIGHT_CREDIT: 0.7,

  /**
   * Useful, but you aren't actually super likely to use this credit on every card you have the benefit for, and PreCheck doesn't usually cost the full amount of the credit (was $70 for me, but most cards offer $100 or $120)
   */
  TSA_PRECHECK_OR_SIMILAR: 0.4,

  /**
   * A dining credit, which is generally easy to get near-full value
   */
  DINING_CREDIT: 0.8,

  /**
   * Useful, but not everyone uses rideshare, and it's usually a monthly per diem that's less than what a full ride usually costs
   */
  RIDESHARE_CREDIT: 0.5,

  /**
   * Credit for streaming services
   * These are oftentimes money you wouldn't otherwise spend, so are valued fairly low (but nonzero)
   */
  STREAMING_CREDIT: 0.25,

  /**
   * Not frequently useful
   */
  AIRLINE_FEE_CREDIT: 0.25,

  /**
   * Represents the value of being able to go to a lounge an indefinite number of times.
   * This is weighted pretty low because the "anchor" value they usually provide is quite high.
   */
  LOUNGES: 0.25,

  /**
   * Represents a limited number of Lounge Passes.
   * Weight is a bit higher b/c the "anchor" value tends to be higher.
   * Is generally still much less useful than the above.
   */
  LOUNGES_LIMITED_USE: 0.4,

  /**
   * Checked bags are generally pretty useful.
   * Some cards permit 2x; we weight this lower, but not half as low, as it's still an upgrade.
   */
  CHECKED_BAG: 0.75,
};
