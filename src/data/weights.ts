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
   */
  LOUNGES: 0.25,
};

export const HILTON_FREE_NIGHT_CREDIT = {
  description: "1x FNC",
  value: 300, // can be used at any hotel, but I tend to value these conservatively b/c you don't usually stay only one night and would need to be on the hook for points for the rest
  weight: WEIGHTS.FREE_NIGHT_CREDIT,
};
