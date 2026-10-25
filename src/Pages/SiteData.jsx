/* ---- Edit this block: all business details live here ---- */
export const BIZ = {
  name: "Suds & Co. Laundromat",
  phone: "(555) 123-4567",
  email: "hello@example.com",
  address: "123 Main Street, Your Town, MA 00000",
  hours: [
    ["Monday – Friday", "6:00 AM – 10:00 PM"],
    ["Saturday – Sunday", "7:00 AM – 9:00 PM"],
  ],
};
export const SERVICES = [
  { slug: "standard-washers", name: "Standard washers", size: "20 lb load",
    desc: "Fits a week of everyday clothes for one person.",
    steps: ["Load clothes loosely, filling the drum about three-quarters full.", "Add detergent to the drawer or directly in the drum.", "Close the door, choose a cycle and temperature, then start the machine.", "Move clothes to a dryer as soon as the cycle ends."],
    notes: ["Best for daily clothes, shirts and jeans.", "Do not wash bedding in these. Use a large washer."] },
  { slug: "large-washers", name: "Large washers", size: "40 lb load",
    desc: "Fits bedding, towels and a family's mixed laundry.",
    steps: ["Load items loosely so water can move through them.", "Add detergent.", "Choose a cycle and temperature, then start the machine.", "Take a cart to the dryers when finished."],
    notes: ["Fits a queen comforter.", "Wash heavy towels separately from light clothes."] },
  { slug: "extra-large-washers", name: "Extra-large washers", size: "60 lb load",
    desc: "Fits comforters, rugs and bulky items.",
    steps: ["Check the care label on bulky items.", "Load one large item at a time, without packing it tight.", "Add detergent, choose a cycle, then start the machine.", "Ask for help moving heavy wet items if you need it."],
    notes: ["Best for king comforters, rugs and sleeping bags.", "Pet bedding goes here, not in standard washers."] },
  { slug: "dryers", name: "Dryers", size: "30 lb and 50 lb",
    desc: "Set your own time. Add minutes if clothes are still damp.",
    steps: ["Clean the lint filter before you load.", "Load clothes and close the door.", "Choose a heat setting and a drying time.", "Start the dryer. Check clothes near the end and add time if needed."],
    notes: ["Use low heat for delicates and synthetics.", "Remove clothes promptly so they do not wrinkle."] },
  { slug: "folding-tables", name: "Folding tables", size: "Free to use",
    desc: "Large tables and carts near the dryers.",
    steps: ["Take warm clothes straight from the dryer.", "Fold at any open table.", "Use a cart to carry finished laundry to your car."],
    notes: ["Tables are wheelchair height accessible.", "Please leave tables clear for the next person."] },
  { slug: "vending-and-supplies", name: "Vending and supplies", size: "Self-serve",
    desc: "Detergent, softener and dryer sheets by the front door.",
    steps: ["Find the vending machines by the front door.", "Choose single-use detergent, softener or dryer sheets.", "Take your supplies to your machine."],
    notes: ["You are welcome to bring your own detergent.", "Ask staff if a machine is empty."] },
];
export const ACCESS = [
  "Step-free entrance and wide aisles for wheelchairs and walkers",
  "Front-loading washers with controls at seated reach height",
  "Large-print, high-contrast instructions on every machine",
  "Quiet seating area and clear, well-lit floors",
];