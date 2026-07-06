/** Real job photos for the full /gallery page (not homepage preview cards). */

const GALLERY_BASE = "/assets/gallery";

export const STUMP_GRINDING_JOB = {
  title: "Stump Grinding",
  category: "Stump Grinding" as const,
  location: "Houston, TX",
  image: `${GALLERY_BASE}/stump-grinding-job.png`,
  description:
    "A member of our team operating our self-propelled grinder to remove this stump located in a small backyard.",
  imageClassName: "[&_img]:object-[center_55%]",
};

export const TREE_REMOVAL_JOBS = [
  {
    id: 101,
    title: "Technical Tree Removal",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-03.png`,
    description:
      "One of our climbers utilizing our top-notch rigging gear to safely dismantle this large tree next to a house.",
    imageClassName: "[&_img]:object-[center_32%]",
  },
  {
    id: 102,
    title: "Hazardous Tree Removal",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-05.png`,
    description:
      "One of our climbers using spurs to finish the removal of this large oak tree that was posing a hazard to the nearby home.",
    imageClassName: "[&_img]:object-[center_35%]",
  },
  {
    id: 104,
    title: "Utility Lines Clearance",
    category: "Tree Removal" as const,
    location: "Katy, TX",
    image: `${GALLERY_BASE}/tree-removal-08.png`,
    description:
      "Our team completing the removal of this large tree that was creating issues for the adjacent structures and utility lines.",
    imageClassName: "[&_img]:object-[center_25%]",
  },
  {
    id: 105,
    title: "Dismantling Preparation",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-09.png`,
    description:
      "Our team setting up to remove this large dead pine tree threatening the property owner's safety.",
    imageClassName: "[&_img]:object-[center_22%]",
    modalImageClassName: "max-sm:object-top",
  },
  {
    id: 106,
    title: "Palm Tree Removal",
    category: "Tree Removal" as const,
    location: "Spring, TX",
    image: `${GALLERY_BASE}/tree-removal-10.png`,
    description:
      "Our team working hard to remove a dying palm tree in the backyard of one of our clients' homes.",
    imageClassName: "[&_img]:object-[center_30%]",
  },
  {
    id: 107,
    title: "Front Yard Tree Removal",
    category: "Tree Removal" as const,
    location: "Cypress, TX",
    image: `${GALLERY_BASE}/tree-removal-11.png`,
    description:
      "Our team working together in close communication to complete the removal of this hazardous pine tree close to the resident's home.",
    imageClassName: "[&_img]:object-[center_35%]",
  },
  {
    id: 108,
    title: "Leaning Tree Removal",
    category: "Tree Removal" as const,
    location: "Missouri City, TX",
    image: `${GALLERY_BASE}/tree-removal-12.png`,
    description:
      "Technical removal of a large tree leaning toward a client's house.",
    imageClassName: "[&_img]:object-[center_28%]",
  },
  {
    id: 109,
    title: "Threatening Tree Removal",
    category: "Tree Removal" as const,
    location: "League City, TX",
    image: `${GALLERY_BASE}/tree-removal-13.png`,
    description:
      "Our crew working hard to remove this tall dying tree that was posing a risk to the safety of the residents and their property.",
    imageClassName: "[&_img]:object-[center_40%]",
  },
  {
    id: 111,
    title: "Blocking Down The Bole",
    category: "Tree Removal" as const,
    location: "Rosenberg, TX",
    image: `${GALLERY_BASE}/tree-removal-15.png`,
    description:
      "One of our climbers using gaffs and rigging gear to block down the bole of this large pine tree safely into the drop zone.",
    imageClassName: "[&_img]:object-[center_38%]",
  },
  {
    id: 112,
    title: "Dead Pine Tree Removal",
    category: "Tree Removal" as const,
    location: "Friendswood, TX",
    image: `${GALLERY_BASE}/tree-removal-16.png`,
    description:
      "Our crew working together to remove this dead pine tree piece-by-piece to ensure no damage is done to the structures below.",
    imageClassName: "[&_img]:object-[center_42%]",
  },
  {
    id: 113,
    title: "Complex Tree Removal",
    category: "Tree Removal" as const,
    location: "Baytown, TX",
    image: `${GALLERY_BASE}/tree-removal-17.png`,
    description:
      "Prepping to remove this large tree with structural issues posing a risk to the safety of the homeowners and their property.",
    imageClassName: "[&_img]:object-[center_50%]",
    modalImageClassName: "max-sm:object-top",
  },
  {
    id: 114,
    title: "Tree Removal Between Homes",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-between-houses.png`,
    description:
      "Our team working cautiously within a very narrow space to remove this hazardous leaning tree.",
  },
  {
    id: 115,
    title: "Tree Removal By Utility Lines",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-by-powerlines.png`,
    description:
      "Our team removing another large dead pine tree posing a risk to nearby traffic and utility lines.",
    imageClassName: "[&_img]:object-[center_30%]",
  },
];
