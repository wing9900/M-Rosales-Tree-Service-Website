export type FeaturedReview = {
  id: number;
  name: string;
  avatar: string;
  photoUrl: string;
  date: string;
  rating: number;
  city: string;
  text: string;
};

function avatarInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

/** Locally saved profile photos verified as real human faces */
export const VERIFIED_FACE_PHOTOS: Record<string, string> = {
  "Ashley Lopez": "/assets/reviewers/ashley-lopez.jpg",
  "Jackie Davidson": "/assets/reviewers/jackie-davidson.jpg",
  "Sabrina Peng": "/assets/reviewers/sabrina-peng.jpg",
  "Steven Hughes": "/assets/reviewers/steven-hughes.jpg",
  "David": "/assets/reviewers/david.jpg",
};

function reviewEntry(
  id: number,
  name: string,
  date: string,
  text: string,
  city = "Houston",
): FeaturedReview {
  return {
    id,
    name,
    avatar: avatarInitial(name),
    photoUrl: VERIFIED_FACE_PHOTOS[name] ?? "",
    date,
    rating: 5,
    city,
    text,
  };
}

/** Best Google reviews for the homepage carousel (verified from Google Maps) */
export const FEATURED_REVIEWS: FeaturedReview[] = [
  reviewEntry(
    1,
    "Joshua Hall",
    "2026-06-30",
    "The crew did fantastic work. Rodrigo gave me a very fair quote, got out here next morning and did a great job removing 3 dead trees and trimming 8 more. The communication was great, and everything was handled very professionally. Highly recommend!",
  ),
  reviewEntry(
    2,
    "Steven Hughes",
    "2026-04-18",
    "We have been using M. Rosales for over 20 years now. They are the best at what they do. Rodrigo is very knowledgeable and his crews are always professional, fast, and safe when it comes to taking down trees or trimming them up. Also great at stump grinding and leave the area spotless when done.",
  ),
  reviewEntry(
    3,
    "Ashley Lopez",
    "2026-02-24",
    "I had a great experience with M Rosales Tree Service! I called on a Friday afternoon, and someone was at my house within 30 minutes to have a look at my tree and provide a quote. A crew came the following Monday and provided efficient and professional services. The customer service is great! I will definitely be using them for future services and highly recommend!",
  ),
  reviewEntry(
    4,
    "Victoria Perla",
    "2026-05-13",
    "Excellent customer service! Mr. Rosales is very knowledgeable in his job, will listen to what you want and make suggestions for the best results. 100% recommend!!",
  ),
  reviewEntry(
    5,
    "Amy R",
    "2025-04-07",
    "Rodrigo and his crew did an excellent job trimming our 6 large trees. Rodrigo came over within an hour of my call to request a quote. He made me feel comfortable by patiently explaining his approach. His quote was the most competitive. His crew came the following week and had everything done within 5-6 hours. Rodrigo supervised the whole affair which made me feel even more comfortable. They left our property immaculately clean after clearing away all the debris. These guys demonstrated a high degree of professionalism start to finish. The trees look great. Highly recommended.",
  ),
  reviewEntry(
    6,
    "Robert Wilson",
    "2025-10-15",
    "Rodrigo and his crew were amazing today. Started promptly at 8:00 AM and were finished cleaning up at 5:30 PM. They cut down a 50-year-old water oak which had fungus growing at the base (sign of decaying roots) and which was leaning slightly towards our house. They also ground down the large stump and trimmed two live oaks. Very professional service. Every large limb was tied off and lowered to the ground gently. All branches were mulched and the trunk was cut into sections and loaded with a skid steer onto a trailer and hauled away. Even after an exhausting day, the crew were meticulous in raking and blowing all the debris and left no trace that they had been here except the mulch from the stump grinder which they offered to spread around our flower beds. Would highly recommend M. Rosales Tree Service.",
  ),
  reviewEntry(
    7,
    "Andrew Ellis",
    "2025-10-25",
    "The service and professionalism is top notch.  I had been needing my trees trimmed for a while but had been holding off because of all the varied quotes I had gotten from random crews in my neighborhood.  I'm happy I was referred to M Rosales because the job was done so well for a really competitive price.  They do it all and do it well.  Highly recommend!",
  ),
  reviewEntry(
    8,
    "Vikram U",
    "2026-03-05",
    "Rodrigo and his crew did a great job in removing a tree and pruning three others. Very professional and punctual. Quite pleased with the service and look forward to using the services in future. Thank you!",
  ),
  reviewEntry(
    9,
    "Julie Archer",
    "2023-11-29",
    "They did a great job! Prompt and professional.  They worked much faster than I expected, in an area that has lots of wires and spreads over two houses on a narrow driveway. I will definitely use their services again.",
  ),
  reviewEntry(
    10,
    "Modiste",
    "2023-11-08",
    "I've used this service for several years and always received prompt and professional service each time.  They were recommended by my neighbor who'd used them for over a decade.  10/10.  Highly recommended!",
  ),
  reviewEntry(
    11,
    "Brissa Gaona",
    "2023-10-09",
    "Wonderful service! Rodrigo was great at communication and his team did an overall great job.",
  ),
  reviewEntry(
    12,
    "Sabrina Peng",
    "2024-10-03",
    "I had an excellent experience with Rodrigo! They were professional, efficient, and left my back and front yard looking better than ever. The team handled the tree trimming and removal. They were punctual and cleaned up everything perfectly. I highly recommend them for any tree work. Truly a 5-star service!",
  ),
  reviewEntry(
    13,
    "Sumit Shah",
    "2024-02-06",
    "Efficient and professional, Rodrigo and his team swiftly removed a fallen tree. Their skilled team navigated challenges with precision, ensuring a quick and safe operation. I highly recommend their services for prompt and expert tree removal.",
  ),
  reviewEntry(
    14,
    "Miss Tasha",
    "2024-05-13",
    "Rodrigo was quick to return my call and he was able to come out for a quote the same day! He was very knowledgeable about my trees and provided a fair price. Great experience with the crew. They were quick and cleaned up the area as if they were never there. Nice!",
  ),
  reviewEntry(
    15,
    "Alyson Guest",
    "2025-12-24",
    "Rodrigo and his crew were extremely professional and easy to work with! They did a beautiful job trimming and removing my trees - I highly recommend this company.",
  ),
  reviewEntry(
    16,
    "Jonathan Jaramillo",
    "2024-10-08",
    "Very professional and accommodating. The pricing was the best of three different quotes I received. Removed and cleaned everything in a few hours; very efficient. Would definitely recommend and work with again.",
  ),
  reviewEntry(
    17,
    "Jackie Davidson",
    "2024-03-12",
    "I have used M. Rosales Tree Service for years and am very pleased with their work. They give reasonable bids, finish in a timely manner, and clean up completely after the service. I would recommend them to anyone needing tree service.",
  ),
];

/** Hero pill — verified real human face photos only */
export const HERO_REVIEW_PHOTOS = [
  { name: "Ashley Lopez", url: VERIFIED_FACE_PHOTOS["Ashley Lopez"] },
  { name: "Jackie Davidson", url: VERIFIED_FACE_PHOTOS["Jackie Davidson"] },
  { name: "Steven Hughes", url: VERIFIED_FACE_PHOTOS["Steven Hughes"] },
  { name: "Sabrina Peng", url: VERIFIED_FACE_PHOTOS["Sabrina Peng"] },
  { name: "David", url: VERIFIED_FACE_PHOTOS["David"] },
];
