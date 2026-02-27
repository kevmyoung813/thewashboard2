export interface GoogleReview {
  reviewerName: string;
  isLocalGuide: boolean;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GoogleReviewData {
  googleBusinessUrl: string;
  averageRating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

// Google Business Profile URL — update if needed
// To find: search "The Washboard Murray KY" on Google Maps → copy the URL
export const googleReviewData: GoogleReviewData = {
  googleBusinessUrl:
    "https://www.google.com/search?sca_esv=8910885c1c2cfd19&sxsrf=ANbL-n4f1enbVKuUpT1nXqs8QeflR0sIGg:1772231633038&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOXKxvSkcihb7xzh-bosZdTNu92ikhv7YANuawv-JPmWRdtrP9Hm8GaaP0CY59IZo-vRuiAaeirGTkbMP8Tui1DgIAaQJTSYoksCyfIRQNzjcCxbqwQ%3D%3D&q=The+Washboard+Laundromat+Reviews&sa=X&ved=2ahUKEwjGssmn3fqSAxWXlYkEHUCHAHUQ0bkNegQIIRAF&biw=1280&bih=661&dpr=2",
  averageRating: 4.9,
  totalReviews: 21,
  // Only reviews with written text are included (4 rating-only reviews omitted from carousel)
  reviews: [
    {
      reviewerName: "Wayne Hogue",
      isLocalGuide: false,
      rating: 5,
      text: "The Washboard in Murray was a fantastic experience! I have tried to find a place to get my machine washable 9X12 area rug cleaned for a couple weeks now, and I finally got it done here. Kaili was more than helpful, and she was fantastic to work with! I will be revisiting!",
      relativeTime: "6 months ago",
    },
    {
      reviewerName: "Haley Brandt",
      isLocalGuide: false,
      rating: 5,
      text: "HIGHLY recommend!! Very clean and cost friendly! Edie, is an absolute sweetheart and super helpful with the process. Answering any and all questions for you with a smile on her face. Come here if you want the best laundry experience!",
      relativeTime: "a year ago",
    },
    {
      reviewerName: "Brittany Boyd",
      isLocalGuide: false,
      rating: 5,
      text: "Clean, convenient friendly staff, machines work so well and not expensive. Definitely recommend.",
      relativeTime: "2 months ago",
    },
    {
      reviewerName: "Lany Aldridge",
      isLocalGuide: false,
      rating: 5,
      text: "Very clean laundromat not sure if they have quarter washers so you have to use a card.",
      relativeTime: "5 months ago",
    },
    {
      reviewerName: "Clifford Hill",
      isLocalGuide: false,
      rating: 5,
      text: "My fiancee want to wash and dry laundry yesterday the place was clean and young lady on Friday was very friendly.",
      relativeTime: "5 months ago",
    },
    {
      reviewerName: "Cindy",
      isLocalGuide: false,
      rating: 5,
      text: "Nice clean laundromat! My washer is waiting on a part, so I had to catch up on the families laundry. The manager was helpful in getting the washers going. The place was clean!",
      relativeTime: "11 months ago",
    },
    {
      reviewerName: "Latasha Cole",
      isLocalGuide: false,
      rating: 5,
      text: "Michelle was great at explaining everything and definitely deserves a raise! I will definitely be going back!",
      relativeTime: "5 months ago",
    },
    {
      reviewerName: "Alexa Goff",
      isLocalGuide: false,
      rating: 5,
      text: "This place is SO clean and convenient! The super sweet woman working, Edie, helped us get started, and now we won't go anywhere else. 10/10 review.",
      relativeTime: "a year ago",
    },
    {
      reviewerName: "Jeamie Price",
      isLocalGuide: false,
      rating: 5,
      text: "New Laundry mat, New washers and Dryers!!!!!! Very nice, Very clean, The Lady working today is SUPER HELPFUL AND Nice. Thank you.",
      relativeTime: "a year ago",
    },
    {
      reviewerName: "ohio charlie",
      isLocalGuide: false,
      rating: 5,
      text: "Nice new laundromat love it being so clean and very friendly staff to assist with the purchase of a card to operate the washer and dryer, this will be my weekly laundromat for now on, ohiocharlie approved what what........",
      relativeTime: "a year ago",
    },
    {
      reviewerName: "Suzette Vaughn",
      isLocalGuide: false,
      rating: 5,
      text: "Highly recommend. Clean inside and helpful friendly attendant.",
      relativeTime: "5 months ago",
    },
    {
      reviewerName: "evie shaffer",
      isLocalGuide: false,
      rating: 5,
      text: "Clean and the dryers are amazing and washers are amazing. Highly recommend.",
      relativeTime: "7 months ago",
    },
    {
      reviewerName: "Thomas McWherter",
      isLocalGuide: false,
      rating: 5,
      text: "Super clean, excellent attendant.",
      relativeTime: "a month ago",
    },
    {
      reviewerName: "Matthew Morton",
      isLocalGuide: false,
      rating: 5,
      text: "Always clean, machines work great, plenty of room when I have gone. One big wash and dry for $7.50 is not bad.",
      relativeTime: "6 days ago",
    },
  ],
};
