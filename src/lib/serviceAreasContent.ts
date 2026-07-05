export type ServiceAreaContent = {
  city: string;
  subtitle: string;
  paragraphs: [string, string];
};

export const SERVICE_AREAS_CONTENT: Record<string, ServiceAreaContent> = {
  houston: {
    city: "Houston",
    subtitle: "Your Trusted Tree Service Experts in Houston, TX",
    paragraphs: [
      "M Rosales Tree Service is based right here in Houston at 1929 Coulcrest Dr, and we work across the city every week. Our crew takes on dead tree removal, trimming, stump grinding, and lot clearing in tight backyards, along fence lines, and near rooflines where careful rigging matters. Rodrigo and his team show up ready to work and leave the yard clean when the job is done.",
      "Houston weather is hard on trees. Heavy rain, summer heat, and hurricane season all take a toll. We help homeowners get ahead of problems with trimming that reduces wind damage, and we respond when a storm leaves a tree on the house or blocking the driveway. Call (281) 804-5020 for a free estimate anywhere in Houston, TX.",
    ],
  },
  katy: {
    city: "Katy",
    subtitle: "Professional Tree Service in Katy, TX",
    paragraphs: [
      "Katy neighborhoods like Cinco Ranch, Seven Lakes, and Grand Lakes have plenty of mature trees that need regular attention. M Rosales Tree Service handles removals close to patios and pools, trims that open up the canopy without hurting the tree, and stump grinding so you get your yard back. We know the area and we treat your property with care.",
      "West Houston growth means Katy lots often have a mix of old oaks and newer plantings that outgrow their space. Our crew works around sprinkler systems, fences, and tight side yards without cutting corners on safety. For tree work in Katy, TX, call our Houston office at (281) 804-5020.",
    ],
  },
  "sugar-land": {
    city: "Sugar Land",
    subtitle: "Expert Tree Care Services in Sugar Land, TX",
    paragraphs: [
      "Sugar Land homeowners take pride in their yards, and we match that standard on every job. M Rosales Tree Service removes hazardous trees near driveways and second stories, shapes canopies for a clean look, and grinds stumps so the lawn is smooth again. We work in established subdivisions throughout Sugar Land and know how to keep the job site neat.",
      "Large oaks and pecans are common here, and they need trimming before storm season and removal when they start to lean or lose major limbs. Our team uses rigging when a tree is too close to the house to drop safely. Contact us for a free estimate on tree service in Sugar Land, TX.",
    ],
  },
  richmond: {
    city: "Richmond",
    subtitle: "Richmond's Choice for Professional Tree Service",
    paragraphs: [
      "Richmond sits in a part of Fort Bend County where older neighborhoods meet new development along the Grand Parkway. M Rosales Tree Service helps with both: clearing brush for new home sites and taking down dead trees on long-established lots. We also trim mature trees that shade the house but hang too low over the roof or driveway.",
      "Properties near the Brazos River corridor see more moisture and wind exposure than inland areas, which can weaken roots and branches over time. Our crew evaluates what needs to come out and what can stay with a good trim. Reach us at (281) 804-5020 for tree service in Richmond, TX.",
    ],
  },
  rosenberg: {
    city: "Rosenberg",
    subtitle: "Dedicated Tree Services for Rosenberg, TX",
    paragraphs: [
      "Rosenberg has a lot of large, older trees that give the community character. When one of those trees starts to die back or lean toward a structure, M Rosales Tree Service can remove it safely or trim it back before it becomes a bigger problem. We work on residential lots throughout Rosenberg with the same rigging and cleanup standards we use across the Houston area.",
      "Rodrigo and his crew have handled everything from single limb removal to full takedowns on tight Rosenberg properties. We do not rush the job. We plan the cut, protect what is around the tree, and haul off the debris when we are finished. Call for a free estimate in Rosenberg, TX.",
    ],
  },
  fulshear: {
    city: "Fulshear",
    subtitle: "Tree Service for Fulshear, TX Homes and Acreage",
    paragraphs: [
      "Fulshear lots tend to be bigger, with native pecans and oaks that have been on the property for decades. M Rosales Tree Service clears land for new builds, removes trees that threaten a home foundation or roofline, and grinds stumps on acreage where a homeowner wants usable lawn again. We bring the chip truck and crew sized for the job.",
      "Development in Fulshear often means deciding which trees to keep and which to remove before construction starts. We can take out select trees and underbrush while leaving healthy specimens in place. For tree removal, trimming, or clearing in Fulshear, TX, contact our Houston-based team.",
    ],
  },
  cypress: {
    city: "Cypress",
    subtitle: "Trusted Tree Service in Cypress, TX",
    paragraphs: [
      "Communities like Bridgeland, Towne Lake, and Fairfield have seen a lot of new construction, but many Cypress streets still have tall trees that need professional work. M Rosales Tree Service removes trees wedged between houses, trims branches over the garage, and responds when a Gulf Coast storm snaps limbs into the yard.",
      "Northwest Houston clay soil and long hot summers stress trees in ways that show up as dead branches or a thinning canopy. We trim for health and structure, not just appearance. If a tree has to come down, we handle it with rigging and leave the site clean. Call (281) 804-5020 for Cypress, TX tree service.",
    ],
  },
  pasadena: {
    city: "Pasadena",
    subtitle: "Professional Tree Service in Pasadena, TX",
    paragraphs: [
      "Pasadena residential streets often run under a thick tree canopy that looks great until a branch lands on a fence or a dead tree starts leaning toward the garage. M Rosales Tree Service removes those hazards, trims back overgrowth from power lines and roof edges, and cleans up storm debris when southeast Houston gets hit hard.",
      "We serve Pasadena from our Houston shop and can often provide an estimate the same day. Whether the job is one stump or a full backyard removal, our crew treats it the same way: safe cuts, controlled drops, and no mess left behind. Contact us for tree work in Pasadena, TX.",
    ],
  },
  baytown: {
    city: "Baytown",
    subtitle: "Tree Removal and Trimming in Baytown, TX",
    paragraphs: [
      "Baytown's location near the coast means humidity, salt exposure, and strong storms that wear on trees year after year. M Rosales Tree Service helps Baytown homeowners remove trees that have become unstable, grind stumps that attract pests, and clear lots before or after a building project.",
      "Our crew travels to east Harris County regularly and is equipped for removals near houses, sheds, and driveways where there is not much room to work. If wind or rot has compromised a tree on your Baytown property, call (281) 804-5020 for an honest assessment and a free estimate.",
    ],
  },
  pearland: {
    city: "Pearland",
    subtitle: "Tree Service Experts Serving Pearland, TX",
    paragraphs: [
      "Pearland has grown quickly, and that shows in the mix of brand-new subdivisions and older sections with full-size trees. M Rosales Tree Service clears construction sites, removes trees that were planted too close to the house, and grinds stumps so new landscaping can go in flat and even.",
      "Many Pearland homeowners call us after a tree dies and they realize how close it sits to the roof or a neighbor's fence. We take those jobs seriously and use rigging when the drop zone is tight. For trimming, removal, or stump grinding in Pearland, TX, reach out to our Houston crew.",
    ],
  },
  "league-city": {
    city: "League City",
    subtitle: "Professional Tree Care in League City, TX",
    paragraphs: [
      "League City sits between Houston and the coast, and the trees here include oaks, pines, and palms that each need a different approach. M Rosales Tree Service trims palms and hardwoods, removes trees damaged in a storm, and grinds stumps so the backyard is usable again.",
      "Salt air and Gulf storms affect League City properties differently than inland suburbs. Branches break, roots loosen, and trees that looked fine one season can fail the next. Our team handles emergency callouts and planned work alike. Request a free estimate for tree service in League City, TX.",
    ],
  },
  galveston: {
    city: "Galveston",
    subtitle: "Coastal Tree Service in Galveston, TX",
    paragraphs: [
      "Galveston Island properties deal with wind, salt, and hurricane damage that mainland yards rarely see. M Rosales Tree Service removes fallen and damaged trees after a storm, cuts back limbs that threaten windows and roofs, and grinds stumps when a coastal tree finally has to come out.",
      "Preventive trimming before hurricane season can reduce how much damage a tree does if it fails. We cannot stop every storm, but we can remove dead wood and reduce weight in the canopy so the tree stands a better chance. Call (281) 804-5020 for tree work serving Galveston, TX.",
    ],
  },
  "texas-city": {
    city: "Texas City",
    subtitle: "Tree Service for Texas City, TX",
    paragraphs: [
      "Texas City homeowners along Galveston Bay know that coastal weather turns healthy trees into liabilities fast. M Rosales Tree Service removes storm-damaged trees, grinds stumps below grade, and clears debris so you can use your yard again without stepping over branches for weeks.",
      "We travel from our Houston location to serve Texas City and nearby Galveston County communities. Our crew works Monday through Saturday and can respond when a tree is blocking access or resting on a structure. Contact us for tree removal and trimming in Texas City, TX.",
    ],
  },
  "the-woodlands": {
    city: "The Woodlands",
    subtitle: "Tree Service in The Woodlands, TX",
    paragraphs: [
      "The Woodlands was built around its trees, and most homeowners want to keep that look while staying safe. M Rosales Tree Service removes trees that disease or storm damage has made unstable, trims canopies that block light or scrape the roof, and clears brush on lots where the undergrowth has gotten out of hand.",
      "Forest-style communities need careful work so one removal does not damage the trees around it. Our crew takes time to rig lines, section large trunks, and protect lawns and planting beds during the job. For tree service in The Woodlands, TX, call our Houston office for a free estimate.",
    ],
  },
  conroe: {
    city: "Conroe",
    subtitle: "Tree Removal and Trimming in Conroe, TX",
    paragraphs: [
      "Conroe and Montgomery County lots are often larger, with tall pines and oaks that require real equipment to manage. M Rosales Tree Service handles acreage clearing, single-tree removal near a lake house, and stump grinding on properties where a leftover stump is in the way of mowing or building.",
      "North of Houston, pine trees in particular can snap in high wind if they are dead or heavily leaning. We assess the tree on site, explain what we recommend, and give you a straight price before we start. Call (281) 804-5020 for tree service in Conroe, TX.",
    ],
  },
  "missouri-city": {
    city: "Missouri City",
    subtitle: "Tree Service in Missouri City, TX",
    paragraphs: [
      "From Quail Valley to Sienna Plantation, Missouri City neighborhoods have mature shade trees that need trimming every few years and removal when they decline. M Rosales Tree Service works on Fort Bend County properties where the tree is close to the house, the fence, or overhead utility lines.",
      "Rodrigo's crew is known for showing up on time, communicating clearly, and cleaning up when the work is done. That matters on Missouri City streets where neighbors notice when a yard is left messy. Contact us for trimming, removal, or stump grinding in Missouri City, TX.",
    ],
  },
  friendswood: {
    city: "Friendswood",
    subtitle: "Professional Tree Service in Friendswood, TX",
    paragraphs: [
      "Friendswood's tree-lined streets are part of what makes the area attractive, but overgrown or damaged trees create real risk to roofs and vehicles. M Rosales Tree Service trims back what can be saved and removes what cannot, including storm-damaged limbs and dead trunks leaning toward the house.",
      "We serve Friendswood and the Clear Lake area from our Houston base. Most jobs include full debris removal and stump grinding if you need it. If a tree on your Friendswood property has you worried, call (281) 804-5020 for a free look and an honest quote.",
    ],
  },
  humble: {
    city: "Humble",
    subtitle: "Tree Service in Humble, TX and Northeast Houston",
    paragraphs: [
      "Humble, Atascocita, and Kingwood sit on some of the larger residential lots in northeast Houston, with pines and oaks that outgrow a standard ladder job pretty quickly. M Rosales Tree Service brings the crew and chip equipment needed for safe removal, heavy trimming, and lot clearing on bigger properties.",
      "Storm damage hits this part of the metro hard because tall pines fail in blocks rather than one branch at a time. We respond to emergencies and schedule routine work Monday through Saturday. For tree service in Humble, TX, contact M Rosales Tree Service for a free estimate.",
    ],
  },
};

export function getServiceAreaContent(slug: string): ServiceAreaContent | undefined {
  return SERVICE_AREAS_CONTENT[slug];
}
