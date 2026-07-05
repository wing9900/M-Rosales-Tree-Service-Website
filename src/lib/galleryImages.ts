/** Real job photos for the full /gallery page (not homepage preview cards). */

const GALLERY_BASE = "/assets/gallery";

export const STUMP_GRINDING_JOB = {
  title: "Stump Grinding Service",
  category: "Stump Grinding" as const,
  location: "Houston, TX",
  image: `${GALLERY_BASE}/stump-grinding-job.png`,
  description:
    "Rayco RG1635 stump grinder used to grind a backyard stump below ground level while our operator works in full safety gear.",
  imageClassName: "[&_img]:object-[center_55%]",
};

export const TREE_REMOVAL_JOBS = [
  {
    id: 100,
    title: "Tree Removals",
    category: "Tree Removal" as const,
    location: "Houston, TX",
    image: `${GALLERY_BASE}/tree-removal-01.png`,
    description:
      "Sectional dismantling of a tall stripped trunk beside a two-story home with a climber cutting from the top and ground crew monitoring below.",
    imageClassName: "[&_img]:object-[center_28%]",
  },
  {
    id: 101,
    title: "Palm Tree Removal",
    category: "Tree Removal" as const,
    location: "Sugar Land, TX",
    image: `${GALLERY_BASE}/tree-removal-03.png`,
    description:
      "Palm tree dismantling in a residential backyard with a climber removing fronds while the ground crew clears cut material from the lawn.",
    imageClassName: "[&_img]:object-[center_32%]",
  },
  {
    id: 102,
    title: "Dead Pine Removal",
    category: "Tree Removal" as const,
    location: "Katy, TX",
    image: `${GALLERY_BASE}/tree-removal-05.png`,
    description:
      "Removal of a dead pine tree with brown needles, showing our climber ascending the trunk with rigging ropes against a clear blue sky.",
    imageClassName: "[&_img]:object-[center_35%]",
  },
  {
    id: 103,
    title: "Rigged Tree Removal",
    category: "Tree Removal" as const,
    location: "Pasadena, TX",
    image: `${GALLERY_BASE}/tree-removal-07.png`,
    description:
      "Tall tree removal behind a stone and brick home using multiple rigging lines to lower cut sections away from the roofline.",
    imageClassName: "[&_img]:object-[center_30%]",
  },
  {
    id: 104,
    title: "Crew Tree Removal",
    category: "Tree Removal" as const,
    location: "The Woodlands, TX",
    image: `${GALLERY_BASE}/tree-removal-08.png`,
    description:
      "Full crew on site at a brick home with a climber rigged near the top of the trunk and ground workers managing ropes and cut logs.",
    imageClassName: "[&_img]:object-[center_25%]",
  },
  {
    id: 105,
    title: "Canopy Dismantling",
    category: "Tree Removal" as const,
    location: "Pearland, TX",
    image: `${GALLERY_BASE}/tree-removal-09.png`,
    description:
      "Arborist working on a large horizontal limb high in the canopy with rigging lines running down toward the ground crew below.",
    imageClassName: "[&_img]:object-[center_22%]",
  },
  {
    id: 106,
    title: "Tall Trunk Removal",
    category: "Tree Removal" as const,
    location: "Spring, TX",
    image: `${GALLERY_BASE}/tree-removal-10.png`,
    description:
      "Climber at the top of a tall bare trunk with rigging ropes hanging down, photographed from below against a bright sky near a residential home.",
    imageClassName: "[&_img]:object-[center_30%]",
  },
  {
    id: 107,
    title: "Front Yard Removal",
    category: "Tree Removal" as const,
    location: "Cypress, TX",
    image: `${GALLERY_BASE}/tree-removal-11.png`,
    description:
      "Tree removal in a front yard beside a white home with a red door, with a chipper on the lawn and a climber working near the top of the trunk.",
    imageClassName: "[&_img]:object-[center_35%]",
  },
  {
    id: 108,
    title: "Power Line Clearance",
    category: "Tree Removal" as const,
    location: "Missouri City, TX",
    image: `${GALLERY_BASE}/tree-removal-12.png`,
    description:
      "Technical removal of a large tree near utility lines with a climber using orange and white rigging while ground crew cuts fallen sections on the sidewalk.",
    imageClassName: "[&_img]:object-[center_28%]",
  },
  {
    id: 109,
    title: "Residential Trunk Work",
    category: "Tree Removal" as const,
    location: "League City, TX",
    image: `${GALLERY_BASE}/tree-removal-13.png`,
    description:
      "Two-man crew removing a tall stripped trunk in front of a grey siding home with chainsaws and climbing rope staged at the base.",
    imageClassName: "[&_img]:object-[center_40%]",
  },
  {
    id: 110,
    title: "High Climb Removal",
    category: "Tree Removal" as const,
    location: "Conroe, TX",
    image: `${GALLERY_BASE}/tree-removal-14.png`,
    description:
      "Low-angle view of a climber working high on a curved trunk with rigging gear, emphasizing the height and precision of the job.",
    imageClassName: "[&_img]:object-[center_45%]",
  },
  {
    id: 111,
    title: "Limb Section Removal",
    category: "Tree Removal" as const,
    location: "Rosenberg, TX",
    image: `${GALLERY_BASE}/tree-removal-15.png`,
    description:
      "Climber cutting through a large limb on a tall tree beside a white brick home, with rigging attached to control the section on the way down.",
    imageClassName: "[&_img]:object-[center_38%]",
  },
  {
    id: 112,
    title: "Equipment On Site",
    category: "Tree Removal" as const,
    location: "Friendswood, TX",
    image: `${GALLERY_BASE}/tree-removal-16.png`,
    description:
      "Service trucks parked on site while a climber works at the top of a tall stripped tree with a cut branch suspended on a rigging line.",
    imageClassName: "[&_img]:object-[center_42%]",
  },
  {
    id: 113,
    title: "Controlled Lowering",
    category: "Tree Removal" as const,
    location: "Baytown, TX",
    image: `${GALLERY_BASE}/tree-removal-17.png`,
    description:
      "Cut log section lowered on a rigging line between pine trunks near a brick home and garage, showing controlled sectional removal.",
    imageClassName: "[&_img]:object-[center_50%]",
  },
];
