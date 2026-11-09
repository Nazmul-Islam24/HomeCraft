/**
 * Virginia HomeCraft - Central Client Configuration
 * ============================================================================
 * EDIT THIS SINGLE FILE to customize all business details, branding, services,
 * testimonials, imagery, service areas, contact channels, and SEO metadata.
 * No components should hard-code business-specific information.
 * ============================================================================
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: 'Paintbrush' | 'Home' | 'UtensilsCrossed' | 'Bath' | 'Layers' | 'Hammer' | 'Wrench' | 'ShieldCheck';
  image: string;
  featured: boolean;
  benefits: string[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange?: string;
  estimatedTimeline?: string;
  targetKeywords: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Kitchens' | 'Bathrooms' | 'Painting' | 'Flooring' | 'Remodeling' | 'Home Improvement';
  location: string;
  image: string;
  year: string;
  description: string;
  highlights: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  content: string;
  verified: boolean;
  projectSnippet?: string;
}

export interface ServiceAreaItem {
  name: string;
  slug: string;
  countyOrRegion: string;
  isPrimary: boolean;
  zipCodes: string[];
  description: string;
  neighborhoodHighlights: string[];
}

export const siteConfig = {
  // 1. Business Identity
  business: {
    name: 'Virginia HomeCraft',
    shortName: 'HomeCraft',
    legalName: 'Virginia HomeCraft LLC',
    tagline: 'Arlington’s Premier Home Remodeling & Renovation Craftsmen',
    logoText: 'Virginia HomeCraft',
    logoImage: '/images/virginia-homecraft-renovation-logo.webp',
    faviconImage: '/favicon.png',
    license: 'VA Class A Contractor #2705-184920', // Configurable license placeholder
    insuredStatus: 'Fully Licensed, Bonded & $2M General Liability Insured',
    foundedYear: 2011,
    yearsInBusiness: '15+',
    projectsCompleted: '1,200+',
    satisfactionRate: '99.4%',
    googleRating: '4.9',
  },

  // 2. Contact Information & Hours
  contact: {
    phone: '(703) 555-0198',
    phoneRaw: '+17035550198', // Formatted for tel: links
    email: 'hello@virginiahomecraft.com',
    address: '2800 Clarendon Blvd, Suite 300',
    city: 'Arlington',
    state: 'Virginia',
    stateAbbr: 'VA',
    zip: '22201',
    country: 'USA',
    googleMapsUrl: 'https://maps.google.com/?q=Arlington,+VA+22201',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.43905096147!2d-77.16875084999999!3d38.880091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b69d7ba7a70f%3A0xf8cf6fc845f6b093!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
    hours: [
      { days: 'Monday – Friday', time: '7:30 AM – 6:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 3:00 PM' },
      { days: 'Sunday', time: 'Closed (Emergency Inquiries Only)' },
    ],
    quoteResponseTime: 'Guaranteed quote response within 2 business hours',
  },

  // 3. Brand Colors (Three Primary Colors)
  colors: {
    primary: '#142B3A', // Deep Navy
    background: '#F7F4EE', // Warm Off-White
    accent: '#D96B32', // Burnt Orange
    primaryLight: '#1E3D52',
    accentHover: '#BF5A24',
    accentSoft: '#FDF2EB',
  },

  // 4. Hero Section
  hero: {
    badge: 'Serving Arlington & Northern Virginia Since 2011',
    headline: 'Transform Your Home With Quality Remodeling & Improvement Services',
    subheadline:
      'From custom kitchen transformations and spa-inspired bathrooms to precision interior painting and wide-plank hardwood flooring. Built on local Arlington craftsmanship, transparent pricing, and clean, on-time delivery.',
    ctaPrimary: 'Get a Free Estimate',
    ctaSecondary: 'Call (703) 555-0198',
    image: '/images/whole-home-remodeling-renovation-arlington-va.webp',
    imageAlt: 'Exquisitely remodeled Northern Virginia craftsman home featuring open-concept kitchen and custom living room trim',
    trustHighlights: [
      { label: 'VA Class A Licensed', detail: 'Fully Bonded & Insured' },
      { label: '5-Year Guarantee', detail: 'On All Craftsmanship' },
      { label: 'Dust-Free Worksites', detail: 'HEPA Air Scrubbers & Daily Clean' },
      { label: '4.9★ Google Rating', detail: 'Verified Local Homeowners' },
    ],
  },

  // 5. Trust Section Statistics
  trustStats: [
    { value: '15+', label: 'Years in Northern VA', detail: 'Established in Arlington' },
    { value: '1,200+', label: 'Renovations Completed', detail: 'Kitchens, Baths & Homes' },
    { value: '4.9 / 5.0', label: 'Average Google Rating', detail: 'Verified Homeowner Reviews' },
    { value: '100%', label: 'Turnkey Project Delivery', detail: 'Design, Permits & Build' },
  ],

  // 6. Why Choose Us Differentiators
  whyChooseUs: [
    {
      title: 'Dedicated On-Site Project Manager',
      description: 'You will have one direct point of contact overseeing daily progress, subcontractor scheduling, and quality standards from demo to final punch list.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Arlington County Permit Mastery',
      description: 'We handle all drawings, permit submissions, and county inspections with Arlington County & City of Alexandria building departments so your project stays 100% code compliant.',
      icon: 'Layers',
    },
    {
      title: 'Guaranteed Dust-Free Protocols',
      description: 'We isolate work zones with ZipWall barriers, protect your flooring with Ram Board, and run commercial HEPA scrubbers to keep your living quarters pristine.',
      icon: 'Paintbrush',
    },
    {
      title: 'Fixed-Price Itemized Proposals',
      description: 'No hidden fees or surprise billings. Our detailed proposals define exact labor, material allowances, milestones, and realistic completion schedules.',
      icon: 'Hammer',
    },
  ],

  // 7. Services List
  services: [
    {
      id: 'kitchen-remodeling',
      slug: 'kitchen-remodeling',
      title: 'Kitchen Remodeling',
      shortDescription: 'Custom cabinetry, quartz & marble countertops, open-concept island conversions, and high-end culinary workspaces.',
      longDescription: 'The kitchen is the heart of your Northern Virginia home. Whether you live in a historic Lyon Village colonial or a contemporary Ballston condo, Virginia HomeCraft specializes in turnkey kitchen renovations. We reimagine layout flow, install custom Amish-built or semi-custom shaker cabinetry, plumb luxury chef islands, and craft timeless tile backsplashes with meticulous precision.',
      iconName: 'UtensilsCrossed',
      image: '/images/kitchen-remodeling-arlington-va.webp',
      featured: true,
      priceRange: '$35,000 – $95,000+',
      estimatedTimeline: '4 – 7 Weeks',
      benefits: [
        'Custom floorplan reconfiguration & wall removals for open living',
        'Premium quartz, marble, and quartzite waterfall countertops',
        'Soft-close dovetailed cabinetry with pantry pull-outs & appliance garages',
        'Task, ambient, and under-cabinet LED architectural lighting',
        'Complete plumbing, electrical, and commercial ventilation upgrades',
      ],
      process: [
        { step: '01', title: 'Design & 3D Spatial Layout', description: 'In-home measurement, appliance selection, and 3D rendering of your new kitchen.' },
        { step: '02', title: 'Permitting & Material Orders', description: 'Cabinetry fabrication, fixture procurement, and Arlington County permit approvals.' },
        { step: '03', title: 'Clean Demolition & Rough-In', description: 'Dust containment, electrical rerouting, plumbing rough-ins, and inspection.' },
        { step: '04', title: 'Cabinet, Stone & Tile Install', description: 'Laser-level cabinet setting, countertop fabrication, and custom backsplash work.' },
        { step: '05', title: 'Final Trim & Quality Walkthrough', description: 'Appliance hookups, hardware alignment, and our 40-point satisfaction check.' },
      ],
      faqs: [
        { question: 'Can we stay in our home during a kitchen remodel?', answer: 'Yes. Over 80% of our clients stay home. We set up a temporary functional kitchenette with a microwave, refrigerator access, and dust-barrier containment.' },
        { question: 'Do you assist with cabinet and appliance sourcing?', answer: 'Yes, we provide designer trade discounts on top cabinet lines and coordinate delivery with appliance distributors.' },
        { question: 'Do you manage Arlington County building permits?', answer: 'Yes, our team drafts all required trade permit documents and coordinates county building, plumbing, and electrical inspections.' },
      ],
      targetKeywords: ['Kitchen Remodeling Arlington VA', 'Custom Kitchens Arlington', 'Kitchen Renovation Northern Virginia', 'Kitchen Contractor Arlington VA'],
    },
    {
      id: 'bathroom-remodeling',
      slug: 'bathroom-remodeling',
      title: 'Bathroom Remodeling',
      shortDescription: 'Master suite retreats, curbless walk-in showers, freestanding tubs, heated tile floors, and custom vanities.',
      longDescription: 'Turn tired master baths, cramped guest bathrooms, or powder rooms into tranquil private spas. Virginia HomeCraft installs Schluter-certified waterproof shower systems, linear drains, thermostatic shower towers, frameless glass enclosures, floating vanities, and radiant in-floor heating tailored to Arlington homes.',
      iconName: 'Bath',
      image: '/images/luxury-bathroom-remodeling-arlington-va.webp',
      featured: true,
      priceRange: '$18,000 – $55,000+',
      estimatedTimeline: '2 – 4 Weeks',
      benefits: [
        '100% Schluter-Kerdi waterproof shower basins with lifetime seal warranties',
        'Curbless zero-threshold entry and frameless 3/8" heavy architectural glass',
        'Custom double vanities with quartz tops and undermount sinks',
        'NuHeat programmable radiant floor warming systems',
        'Quiet multi-speed Panasonic Whisper exhaust ventilation',
      ],
      process: [
        { step: '01', title: 'Consultation & Material Curation', description: 'Selecting porcelain, marble, vanities, faucets, and mood boards.' },
        { step: '02', title: 'Demolition & Plumbing Rough-In', description: 'Removal down to studs, valve upgrades, and plumbing line relocation.' },
        { step: '03', title: 'Waterproof Membrane Application', description: 'Flood testing and vapor-barrier membrane verification.' },
        { step: '04', title: 'Tile Craftsmanship & Enclosures', description: 'Precision niche placement, grout sealing, and custom glass fabrication.' },
      ],
      faqs: [
        { question: 'How long does a master bathroom renovation typically take?', answer: 'Most master bath renovations are completed within 3 to 4 weeks once materials have arrived on site.' },
        { question: 'How do you prevent bathroom tile leaks?', answer: 'We exclusively use engineered membrane waterproofing systems (Schluter-Kerdi) with 24-hour flood pan water tests prior to tile setting.' },
      ],
      targetKeywords: ['Bathroom Remodeling Arlington VA', 'Master Bath Renovation Arlington', 'Walk-in Shower Remodel Arlington VA', 'Bathroom Contractor Northern VA'],
    },
    {
      id: 'painting',
      slug: 'painting',
      title: 'Interior & Exterior Painting',
      shortDescription: 'Flawless wall preparation, architectural trim enamel, accent walls, and weather-resistant exterior coatings.',
      longDescription: 'A flawless paint finish starts with extraordinary surface preparation. Our skilled painters repair nail pops, skim plaster imperfections, sand trim silk-smooth, caulk gaps, and apply premium low-VOC Benjamin Moore and Sherwin-Williams coatings for vibrant, durable finishes in Arlington homes.',
      iconName: 'Paintbrush',
      image: '/images/interior-house-painting-contractor-arlington.webp',
      featured: true,
      priceRange: '$1,800 – $14,000',
      estimatedTimeline: '2 – 5 Days',
      benefits: [
        'Level 5 skim coating and drywall smoothing before prime coat',
        'Eco-friendly, ultra-low VOC Benjamin Moore Aura and Regal Select paints',
        'Cabinet spraying and baked-on furniture-grade lacquer finishes',
        'Exterior power-washing, scraping, priming, and weather-sealed caulk',
        'Complete protection of furnishings, floors, and landscaping',
      ],
      process: [
        { step: '01', title: 'Color Consulting & Test Samples', description: 'Reviewing paint swatches under your home’s natural lighting conditions.' },
        { step: '02', title: 'Meticulous Masking & Surface Prep', description: 'Full masking of floors, caulking trim, patching holes, and sanding surfaces.' },
        { step: '03', title: 'Priming & Two-Coat Application', description: 'Application of high-hide bonding primers and two rich finish coats.' },
        { step: '04', title: 'Detailed Inspection & Touch-Up Kit', description: 'Spotlight inspection walkthrough and leaving labeled touch-up jars for you.' },
      ],
      faqs: [
        { question: 'What paint brands do you apply?', answer: 'We specify premium Benjamin Moore (Regal Select, Aura) and Sherwin-Williams (Emerald, Duration) lines for maximum washability and color depth.' },
        { question: 'Do you move heavy furniture before painting?', answer: 'Yes, our crew carefully moves and wraps all heavy furniture to the center of the room with heavy-duty drop cloths.' },
      ],
      targetKeywords: ['Interior Painting Arlington VA', 'House Painters Arlington', 'Exterior House Painting Northern Virginia', 'Painters Near Me Arlington VA'],
    },
    {
      id: 'flooring',
      slug: 'flooring',
      title: 'Flooring Installation & Refinishing',
      shortDescription: 'White oak hardwood, luxury vinyl plank (LVP), custom herringbone patterns, and dustless hardwood refinishing.',
      longDescription: 'Upgrade the foundation of your home with premium flooring installations. Whether you desire timeless 5-inch character-grade white oak planks, intricate herringbone patterns, waterproof rigid-core LVP for basements, or dustless sand-and-stain refinishing of existing hardwoods, our craftsmen deliver squeak-free, seamless floors.',
      iconName: 'Layers',
      image: '/images/hardwood-flooring-installation-refinishing-arlington.webp',
      featured: true,
      priceRange: '$4,000 – $22,000',
      estimatedTimeline: '3 – 6 Days',
      benefits: [
        'Solid and engineered wide-plank white oak, red oak, and walnut installations',
        '99% dustless hardwood sanding with HEPA atomic extraction trailers',
        'Bona high-traffic commercial waterborne polyurethane matte finishes',
        'Subfloor leveling, screw reinforcement, and acoustic moisture underlayment',
        'Custom stair treads, risers, flush-mount wood vents, and transitions',
      ],
      process: [
        { step: '01', title: 'Moisture Testing & Acclimation', description: 'Checking subfloor relative humidity and allowing wood to acclimate in your home.' },
        { step: '02', title: 'Subfloor Prep & Screwing', description: 'Eliminating subfloor squeaks, grinding high spots, and applying vapor barriers.' },
        { step: '03', title: 'Precision Layout & Nailing', description: 'Blind-nailing and glue-assist installations for dead-straight runs.' },
        { step: '04', title: 'Baseboards & Flush Transitions', description: 'Installing matching shoe moldings, stair noses, and custom threshold transitions.' },
      ],
      faqs: [
        { question: 'Is engineered hardwood better than solid hardwood?', answer: 'Engineered hardwood is generally more dimensionally stable in humid Virginia summers and ideal over concrete basements, while solid hardwood can be sanded multiple times over decades.' },
        { question: 'How long do we have to stay off newly refinished floors?', answer: 'With our fast-curing Bona waterborne finishes, you can walk with socks after 24 hours and replace furniture after 48 hours.' },
      ],
      targetKeywords: ['Hardwood Flooring Arlington VA', 'Flooring Installation Arlington', 'Hardwood Floor Refinishing Northern VA', 'LVP Flooring Arlington VA'],
    },
    {
      id: 'home-remodeling',
      slug: 'home-remodeling',
      title: 'Full Home Remodeling',
      shortDescription: 'Whole-house renovations, structural wall removals, basement finishing, and historic colonial modernizations.',
      longDescription: 'When your growing family needs reimagined space or you have purchased a classic Arlington property ready for modernization, Virginia HomeCraft provides turnkey whole-home remodeling. We handle structural engineering, load-bearing beam installations, basement walkouts, in-law suites, and comprehensive interior overhauls.',
      iconName: 'Home',
      image: '/images/hero-home-remodel.webp',
      featured: false,
      priceRange: '$75,000 – $250,000+',
      estimatedTimeline: '8 – 16 Weeks',
      benefits: [
        'Complete architectural coordination and structural PE-stamped plans',
        'Removal of load-bearing walls and insertion of recessed steel beams',
        'Basement waterproofing, egress windows, wet bars, and media rooms',
        'Electrical 200A service panel upgrades and smart home infrastructure',
        'Unified design aesthetic across every room in your home',
      ],
      process: [
        { step: '01', title: 'Architectural Discovery', description: 'Feasibility study, zoning compliance check, and budget scoping.' },
        { step: '02', title: 'Engineering & Permits', description: 'Structural engineer review and Arlington County permit expedited filing.' },
        { step: '03', title: 'Phased Construction', description: 'Controlled phase demolition, MEP rough-ins, and drywall installation.' },
        { step: '04', title: 'Finishes & Turnkey Handover', description: 'Full finish carpentry, paint, flooring, and final certificate of occupancy.' },
      ],
      faqs: [
        { question: 'Do you handle the architectural and structural engineering plans?', answer: 'Yes, we partner with licensed Virginia structural engineers and architects to provide stamped plans for Arlington County permit review.' },
      ],
      targetKeywords: ['Home Remodeling Arlington VA', 'Whole House Renovation Arlington', 'Basement Finishing Arlington VA', 'Remodeling Contractor Northern Virginia'],
    },
    {
      id: 'home-improvement',
      slug: 'home-improvement',
      title: 'General Home Improvement & Finish Carpentry',
      shortDescription: 'Custom built-ins, wainscoting, crown molding, door replacements, and architectural woodwork.',
      longDescription: 'Elevate your interiors with exquisite architectural details. Our master finish carpenters construct custom fireplace mantels, library bookcases, mudroom locker cubbies, coffered ceilings, board-and-batten accent walls, and solid-core interior doors that add enduring value to your home.',
      iconName: 'Hammer',
      image: '/images/interior-painting.webp',
      featured: false,
      priceRange: '$3,500 – $25,000',
      estimatedTimeline: '3 – 10 Days',
      benefits: [
        'Custom fireplace mantels, shiplap, and stone surround installations',
        'Mudroom benches, coat hooks, and drop-zone storage lockers',
        'Precision crown molding, picture-frame wainscoting, and baseboards',
        'Solid-core interior door installations and custom hardware fittings',
        'Drywall repairs, water damage restoration, and seamless acoustic blending',
      ],
      process: [
        { step: '01', title: 'Detailed Measurements & Profiles', description: 'Matching your home’s existing casing profiles and millwork scale.' },
        { step: '02', title: 'Shop Fabrication & Assembly', description: 'Pre-cutting and priming cabinetry components in our local shop.' },
        { step: '03', title: 'On-Site Scribing & Fastening', description: 'Laser-guided scribing to uneven walls for a seamless built-in look.' },
        { step: '04', title: 'Enamel Coating & Final Hardware', description: 'Spray finish application and hardware mounting.' },
      ],
      faqs: [
        { question: 'Can you match the existing 1930s trim in my Arlington bungalow?', answer: 'Yes, our carpenters can either mill custom profiles or source exact historical casing profiles to match original millwork.' },
      ],
      targetKeywords: ['Home Improvement Arlington VA', 'Custom Trim Carpentry Arlington', 'Built-in Cabinets Northern VA', 'Handyman Contractor Arlington VA'],
    },
  ] as ServiceItem[],

  // 8. Service Areas (Arlington & Northern Virginia focus)
  serviceAreas: {
    primary: 'Arlington, Virginia',
    county: 'Arlington County & Northern Virginia',
    areas: [
      {
        name: 'Arlington (Central & North)',
        slug: 'arlington-va',
        countyOrRegion: 'Arlington County',
        isPrimary: true,
        zipCodes: ['22201', '22203', '22205', '22207', '22209', '22213'],
        description: 'Our home base and core community. We have renovated hundreds of homes across North Arlington, including Lyon Village, Country Club Hills, Cherrydale, Ashton Heights, and Clarendon.',
        neighborhoodHighlights: ['Clarendon', 'Ballston', 'Cherrydale', 'Lyon Village', 'Country Club Hills', 'Westover', 'Williamsburg'],
      },
      {
        name: 'Arlington (South & Pentagon City)',
        slug: 'south-arlington-va',
        countyOrRegion: 'Arlington County',
        isPrimary: true,
        zipCodes: ['22202', '22204', '22206'],
        description: 'Serving South Arlington communities with historic brick renovations, condo interior redesigns, and rowhouse kitchen updates.',
        neighborhoodHighlights: ['Pentagon City', 'Crystal City', 'Shirlington', 'Fairlington', 'Barcroft', 'Columbia Forest'],
      },
      {
        name: 'Alexandria (Old Town & Del Ray)',
        slug: 'alexandria-va',
        countyOrRegion: 'City of Alexandria',
        isPrimary: false,
        zipCodes: ['22301', '22302', '22304', '22314'],
        description: 'Renovating historic townhomes and craftsman bungalows throughout Del Ray, Old Town, Rosemont, and Seminary Hill.',
        neighborhoodHighlights: ['Old Town Alexandria', 'Del Ray', 'Rosemont', 'Beverley Hills', 'Seminary Hill'],
      },
      {
        name: 'Falls Church',
        slug: 'falls-church-va',
        countyOrRegion: 'City of Falls Church & Fairfax Co.',
        isPrimary: false,
        zipCodes: ['22041', '22042', '22044', '22046'],
        description: 'Providing kitchen overhauls, master bathroom sanctuaries, and whole-house renovations in the City of Falls Church.',
        neighborhoodHighlights: ['Broad Street Corridor', 'Winter Hill', 'Pimmit Hills', 'Sleepy Hollow'],
      },
      {
        name: 'McLean & Great Falls',
        slug: 'mclean-va',
        countyOrRegion: 'Fairfax County',
        isPrimary: false,
        zipCodes: ['22101', '22102', '22066'],
        description: 'Luxury estate renovations, high-end kitchen transformations, custom cabinetry, and premium hardwood flooring.',
        neighborhoodHighlights: ['Langley', 'Salona Village', 'Franklin Park', 'Chesterbrook Woods'],
      },
      {
        name: 'Vienna & Oakton',
        slug: 'vienna-va',
        countyOrRegion: 'Fairfax County',
        isPrimary: false,
        zipCodes: ['22180', '22181', '22182', '22124'],
        description: 'Transforming suburban homes with modern open-concept floorplans, exterior repaints, and finished basements.',
        neighborhoodHighlights: ['Town of Vienna', 'Windover Heights', 'Clark’s Crossing', 'Fox Mill'],
      },
      {
        name: 'Washington, DC (NW Neighborhoods)',
        slug: 'washington-dc',
        countyOrRegion: 'District of Columbia',
        isPrimary: false,
        zipCodes: ['20007', '20008', '20015', '20016'],
        description: 'Selected projects in Northwest DC rowhomes and historic residences in Georgetown, Palisades, and Spring Valley.',
        neighborhoodHighlights: ['Palisades', 'Georgetown', 'Spring Valley', 'Tenleytown'],
      },
    ] as ServiceAreaItem[],
  },

  // 9. Project Gallery
  projects: [
    {
      id: 'proj-1',
      title: 'Modern Gourmet Kitchen & Quartz Waterfall Island',
      category: 'Kitchens',
      location: 'Lyon Village, Arlington, VA',
      image: '/images/kitchen-remodel.webp',
      year: '2025',
      description: 'Complete removal of a dividing load-bearing wall to create an expansive culinary entertainment island, custom navy shaker cabinetry, and brass pendant lighting.',
      highlights: ['Custom Shaker Cabinets', 'Calacatta Quartz Island', 'Sub-Zero & Wolf Integration', 'Reclaimed Oak Hardwood'],
    },
    {
      id: 'proj-2',
      title: 'Spa-Inspired Master Bathroom with Freestanding Tub',
      category: 'Bathrooms',
      location: 'Cherrydale, Arlington, VA',
      image: '/images/bathroom-remodel.webp',
      year: '2025',
      description: 'Reconfigured 1950s bath into an airy retreat featuring a zero-threshold curbless shower, natural white oak double vanity, and heated travertine floors.',
      highlights: ['Schluter Waterproofing', 'NuHeat Radiant Floor', 'Vertical Subway Tile', 'Frameless Glass Enclosure'],
    },
    {
      id: 'proj-3',
      title: 'Craftsman Great Room & Whole-Home Transformation',
      category: 'Remodeling',
      location: 'Country Club Hills, Arlington, VA',
      image: '/images/hero-home-remodel.webp',
      year: '2025',
      description: 'Whole-house main floor renovation featuring coffered ceiling beams, custom fireplace mantel, expanded windows, and seamless wide-plank oak flooring.',
      highlights: ['Recessed Steel Beam', 'Coffered Ceiling Millwork', 'Energy-Efficient Pella Windows', 'Full Architectural Lighting'],
    },
    {
      id: 'proj-4',
      title: 'Living Room Architecture Painting & Fine Trim Lacquer',
      category: 'Painting',
      location: 'Del Ray, Alexandria, VA',
      image: '/images/interior-painting.webp',
      year: '2024',
      description: 'Level 5 plaster restoration, custom crown molding installation, and sprayed satin enamel trim work using Benjamin Moore designer palettes.',
      highlights: ['Benjamin Moore Aura', 'Level 5 Skim Coating', 'Crown Molding Scribing', 'Dust-Free Preparation'],
    },
    {
      id: 'proj-5',
      title: 'European White Oak Wide-Plank Hardwood Flooring',
      category: 'Flooring',
      location: 'McLean, VA',
      image: '/images/flooring-installation.webp',
      year: '2024',
      description: 'Installation of 7.5-inch wire-brushed European white oak across 2,400 sq. ft., including flush HVAC floor vents and custom stair nosing.',
      highlights: ['7.5" Wide Planks', 'Bona Traffic HD Matte Finish', 'Subfloor Squeak-Proofing', 'Acoustic Soundproofing Pad'],
    },
    {
      id: 'proj-6',
      title: 'Contemporary Luxury Kitchen & Butler’s Pantry',
      category: 'Kitchens',
      location: 'Ashton Heights, Arlington, VA',
      image: '/images/kitchen-remodel.webp',
      year: '2024',
      description: 'Expanded kitchen with concealed walk-in pantry, hidden induction cooktop, and custom integrated panel-ready refrigeration.',
      highlights: ['Panel-Ready Appliances', 'Concealed Pantry', 'Undercabinet LED Channels', 'Porcelain Slab Splash'],
    },
  ] as ProjectItem[],

  // 10. Reviews & Testimonials
  reviews: [
    {
      id: 'rev-1',
      author: 'Marcus & Eleanor Davies',
      location: 'Lyon Village, Arlington, VA',
      service: 'Full Kitchen Remodel',
      rating: 5,
      date: 'October 2025',
      content: 'Removing our load-bearing kitchen wall transformed our 1940s colonial into an open, light-filled space. The project manager gave daily updates and the worksite was vacuumed spotless every evening.',
      verified: true,
      projectSnippet: 'Kitchen Remodel & Structural Beam',
    },
    {
      id: 'rev-2',
      author: 'Sarah Jenkins',
      location: 'Country Club Hills, Arlington, VA',
      service: 'Master Bathroom Sanctuary',
      rating: 5,
      date: 'September 2025',
      content: 'The curbless shower and freestanding soaking tub look straight out of Architectural Digest. Their tile craftsmanship is flawless. Highly recommend them to any Arlington homeowner!',
      verified: true,
      projectSnippet: 'Master Bath & Heated Tile',
    },
    {
      id: 'rev-3',
      author: 'David & Kimberly Pham',
      location: 'Del Ray, Alexandria, VA',
      service: 'Interior Painting & Trim',
      rating: 5,
      date: 'August 2025',
      content: 'Level 5 drywall prep made old plaster cracks disappear completely. Crisp crown molding and satin enamel woodwork. Polite, prompt, and true professionals.',
      verified: true,
      projectSnippet: 'Whole-Home Interior Paint',
    },
    {
      id: 'rev-4',
      author: 'Brian Callahan',
      location: 'Cherrydale, Arlington, VA',
      service: 'Hardwood Floor Installation',
      rating: 5,
      date: 'July 2025',
      content: 'Replaced 1,800 sq ft with wide-plank white oak. They properly acclimated the wood and cured every subfloor squeak. The Bona matte finish is stunning.',
      verified: true,
      projectSnippet: 'Oak Hardwood Flooring',
    },
    {
      id: 'rev-5',
      author: 'Amanda & Robert Miller',
      location: 'McLean, VA',
      service: 'Main Floor Renovation',
      rating: 5,
      date: 'May 2025',
      content: 'We interviewed four contractors across Northern Virginia and chose Virginia HomeCraft for their transparent pricing. Delivered ahead of schedule with top craftsmanship.',
      verified: true,
      projectSnippet: 'Main Floor Remodel',
    },
    {
      id: 'rev-6',
      author: 'Katherine Zhao',
      location: 'Ballston, Arlington, VA',
      service: 'Modern Condo Bath & Vanity',
      rating: 5,
      date: 'April 2025',
      content: 'Transformed our master bath into a modern oasis. Clean lines, recessed niche with LED lighting, and exceptional plumbing execution.',
      verified: true,
      projectSnippet: 'Ballston Condo Bath',
    },
    {
      id: 'rev-7',
      author: 'Thomas Sterling',
      location: 'Falls Church, VA',
      service: 'Craftsman Exterior Painting',
      rating: 5,
      date: 'March 2025',
      content: 'Full scraping, wood rot replacement, and two coats of Sherwin-Williams Emerald. The house looks brand new and neighbors keep stopping to ask who did it.',
      verified: true,
      projectSnippet: 'Exterior Restoration',
    },
    {
      id: 'rev-8',
      author: 'Rachel & Ethan Cole',
      location: 'Ashton Heights, Arlington, VA',
      service: 'Kitchen & Island Extension',
      rating: 5,
      date: 'February 2025',
      content: 'From 3D layout to final quartz waterfall installation, their team was attentive and respectful of our home. Zero stress and fair pricing.',
      verified: true,
      projectSnippet: 'Custom Kitchen Island',
    },
    {
      id: 'rev-9',
      author: 'Gregory Hughes',
      location: 'Clarendon, Arlington, VA',
      service: 'Custom Fireplace & Built-ins',
      rating: 5,
      date: 'January 2025',
      content: 'Built floor-to-ceiling library bookshelves and a custom mantel. The millwork scribing against our uneven walls is pure artistry.',
      verified: true,
      projectSnippet: 'Built-in Bookcases',
    },
    {
      id: 'rev-10',
      author: 'Elena Rostova',
      location: 'Vienna, VA',
      service: 'Herringbone Foyer & Hardwood',
      rating: 5,
      date: 'December 2024',
      content: 'The herringbone hardwood pattern in our entrance hall is breathtaking. Precision cuts and zero mess left behind.',
      verified: true,
      projectSnippet: 'Herringbone Flooring',
    },
    {
      id: 'rev-11',
      author: 'Christopher Wood',
      location: 'North Arlington, VA',
      service: 'Basement Waterproofing & Finish',
      rating: 5,
      date: 'November 2024',
      content: 'Turned a dark unfinished basement into a warm family recreation room with a wet bar and modern half-bath. Outstanding work.',
      verified: true,
      projectSnippet: 'Basement Renovation',
    },
    {
      id: 'rev-12',
      author: 'Melissa & Sean O’Connor',
      location: 'Shirlington, Arlington, VA',
      service: 'Kitchen Cabinet Refacing & Tile',
      rating: 5,
      date: 'October 2024',
      content: 'Fast, clean, and courteous. They completed our kitchen cabinet update and subway tile backsplash in less than two weeks.',
      verified: true,
      projectSnippet: 'Kitchen Refacing',
    },
  ] as ReviewItem[],

  // 11. 4-Step Renovation Process
  process: [
    {
      step: '01',
      title: 'Free In-Home Consultation',
      description: 'We meet at your Arlington home to listen to your goals, inspect the space, discuss design ideas, and establish your target budget.',
      detail: 'No high-pressure sales. Just transparent expert advice.',
    },
    {
      step: '02',
      title: 'Design, 3D Plans & Fixed Proposal',
      description: 'We create 3D visualizations, guide you through material selections, and provide a clear, itemized proposal with guaranteed pricing.',
      detail: 'Complete schedule and allowance breakdown.',
    },
    {
      step: '03',
      title: 'Clean, Precision Construction',
      description: 'Our certified craftsmen execute demolition, structural work, MEP rough-ins, and high-end finishes with daily dust protection and updates.',
      detail: 'Dedicated on-site project manager every day.',
    },
    {
      step: '04',
      title: 'Final Walkthrough & 5-Year Warranty',
      description: 'We conduct a meticulous 40-point quality audit, present your warranty documentation, and leave your home spotless and move-in ready.',
      detail: '100% satisfaction before final sign-off.',
    },
  ],

  // 12. Frequently Asked Questions
  faqs: [
    {
      category: 'General',
      question: 'How do I request a free estimate with Virginia HomeCraft?',
      answer: 'You can request an estimate by calling us directly at (703) 555-0198 or filling out our quick online quote form. We respond within 2 business hours to schedule a complimentary in-home consultation at your Arlington or Northern Virginia residence.',
    },
    {
      category: 'Pricing & Budget',
      question: 'How much does a typical home remodeling project cost in Arlington?',
      answer: 'Costs vary depending on scope and materials. As a general benchmark in Northern Virginia: powder room updates start around $12,000; luxury master baths range from $22,000 to $50,000+; kitchen renovations typically run between $35,000 and $90,000+; and whole-home remodels start at $75,000+. We provide fixed-price proposals with no surprises.',
    },
    {
      category: 'Timeline',
      question: 'How long will my kitchen or bathroom renovation take?',
      answer: 'Most standard bathrooms take 2 to 3 weeks; master bathroom suites take 3 to 4 weeks; and complete kitchen remodels take 4 to 7 weeks once on-site work begins. We establish a clear calendar schedule before demo begins.',
    },
    {
      category: 'Licensing & Permits',
      question: 'Do you obtain the necessary Arlington County building permits?',
      answer: 'Yes. We hold a Virginia Class A Contractor license. We prepare all architectural drawings, file permit applications with the Arlington County Inspection Services Division, and manage all building, plumbing, electrical, and mechanical inspections.',
    },
    {
      category: 'Cleanliness',
      question: 'How do you keep dust from spreading throughout our home?',
      answer: 'We treat your home with immense respect. We seal work areas with floor-to-ceiling ZipWall plastic barriers, protect hardwood floors with heavy-duty Ram Board, wrap return air ducts, and run industrial HEPA air scrubbers 24/7 to capture airborne particles.',
    },
    {
      category: 'Warranty',
      question: 'What warranty do you provide on your remodeling work?',
      answer: 'We back all of our workmanship with a written 5-Year Craftsmanship Guarantee. In addition, all materials, cabinetry, fixtures, and appliances carry full manufacturer warranties that we register on your behalf.',
    },
    {
      category: 'Services',
      question: 'Do you handle both interior and exterior painting projects?',
      answer: 'Yes. We handle comprehensive interior painting (walls, ceilings, trim, cabinetry) as well as exterior house painting, deck staining, and historic exterior restoration throughout Arlington, Alexandria, and McLean.',
    },
    {
      category: 'Service Areas',
      question: 'What specific areas in Northern Virginia do you serve?',
      answer: 'Our primary service area is Arlington County (Ballston, Clarendon, Rosslyn, Cherrydale, Lyon Village, Country Club Hills, Fairlington, Shirlington). We also regularly complete projects in Alexandria, Falls Church, McLean, Vienna, Great Falls, and Northwest Washington DC.',
    },
  ],

  // 13. About Page Details
  about: {
    storyHeading: 'Crafting Beautiful Living Spaces Across Arlington Since 2011',
    storyText: [
      'Virginia HomeCraft was founded in Arlington with a straightforward conviction: local homeowners deserve exceptional remodeling craftsmanship paired with clear, honest communication and respectful, clean jobsites.',
      'Over the past 15+ years, we have grown from a boutique residential carpentry and painting crew into one of Arlington’s most trusted full-service home remodeling contractors. We have completed over 1,200 kitchen renovations, master bath sanctuaries, hardwood floor installations, and whole-house transformations.',
      'Unlike fly-by-night subcontractors or impersonal national franchises, our leadership team lives and works right here in Northern Virginia. We know the unique architectural charm and structural nuances of Arlington’s neighborhoods—from 1920s bungalows in Cherrydale and brick colonials in Lyon Village to modern high-rises in Rosslyn and sprawling estates in McLean.',
    ],
    mission: 'To enhance the comfort, beauty, and enduring value of Northern Virginia homes through uncompromising craftsmanship, transparent pricing, and a stress-free remodeling experience.',
    coreValues: [
      { title: 'Uncompromising Quality', desc: 'We never cut corners behind the drywall. Proper waterproofing, laser-level framing, and premier materials ensure your renovation stands the test of time.' },
      { title: 'Respect For Your Home', desc: 'Daily cleanup, HEPA dust containment, and courteous crews ensure your family remains comfortable throughout the construction process.' },
      { title: 'Upfront & Transparent', desc: 'No bait-and-switch pricing. Every estimate is itemized, and every change order is approved by you in writing before execution.' },
      { title: 'Local Accountability', desc: 'We are your neighbors. Our reputation is built one home at a time in Arlington, Alexandria, and Falls Church.' },
    ],
    teamIntro: 'Led by seasoned licensed builders, master carpenters, and design consultants with decades of combined residential remodeling expertise.',
  },

  // 14. Social Media Links
  socialLinks: {
    facebook: 'https://facebook.com/virginiahomecraft',
    instagram: 'https://instagram.com/virginiahomecraft',
    pinterest: 'https://pinterest.com/virginiahomecraft',
    tiktok: 'https://tiktok.com/@virginiahomecraft',
    x: 'https://x.com/vahomecraft',
    youtube: 'https://youtube.com/@virginiahomecraft',
    linkedin: 'https://linkedin.com/company/virginiahomecraft',
    yelp: 'https://yelp.com/biz/virginiahomecraft-arlington',
    bbb: 'https://bbb.org/us/va/arlington/profile/homecraft',
    googleBusinessProfile: 'https://business.google.com/virginiahomecraft',
  },

  // 15. SEO & Open Graph Metadata
  seo: {
    siteUrl: 'https://virginiahomecraft.com',
    defaultTitle: 'Virginia HomeCraft – Home Remodeling & Renovation | Arlington, VA',
    titleTemplate: '%s | Virginia HomeCraft Arlington VA',
    defaultDescription:
      'Premier residential home remodeling, kitchen and bathroom renovations, painting, and flooring contractor in Arlington, VA. Licensed, insured, 5-year warranty. Free estimates: (703) 555-0198.',
    keywords: [
      'Home Remodeling Arlington VA',
      'Kitchen Remodeling Arlington VA',
      'Bathroom Remodeling Arlington VA',
      'House Painting Arlington VA',
      'Interior Painting Arlington VA',
      'Exterior Painting Arlington VA',
      'Flooring Contractor Arlington VA',
      'Hardwood Flooring Arlington VA',
      'Home Improvement Contractor Northern Virginia',
      'Home Renovation Arlington VA',
      'Virginia HomeCraft',
    ],
    ogImage: '/images/og-share-card.jpg',
    twitterHandle: '@vahomecraft',
    googleSearchConsoleVerification: 'YOUR_GSC_VERIFICATION_CODE_HERE',
    googleAnalyticsId: 'G-XXXXXXXXXX', // Configurable Google Analytics 4 Measurement ID
  },

  // 16. Legal & Policy Meta
  legal: {
    privacyLastUpdated: 'November 2025',
    termsLastUpdated: 'November 2025',
  },
};

export type SiteConfig = typeof siteConfig;
export default siteConfig;
