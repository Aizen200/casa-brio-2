export const estateData = {
  brand: {
    name: "CASA BRIO",
    tagline: "Private Luxury Estate · Lonavala",
    phone: "+91 74003 38525",
    whatsapp: "917400338525",
    email: "reservations@casabrio.in",
    address: "Casa Brio Estate, Tungarli Hill Road, Near Tungarli Lake, Lonavala, Maharashtra 410401",
    driveTimes: [
      { from: "Mumbai", time: "~90 mins", route: "via Mumbai–Pune Expressway" },
      { from: "Pune", time: "~60 mins", route: "via Mumbai–Pune Expressway" }
    ]
  },

  hero: {
    eyebrow: "EXCLUSIVE PRIVATE ESTATE BUYOUT • LONAVALA",
    title: "Private Luxury Estate.",
    titleItalic: "Entirely Yours.",
    description: "A secluded single-group bungalow buyout in Lonavala featuring a private swimming pool, floodlit box cricket turf, and the REVEL speakeasy snooker lounge.",
    ctaPrimary: "Reserve Whole Estate",
    ctaSecondary: "Explore The Villa",
    stats: [
      { title: "PRIVACY", spec: "100% Private Buyout", sub: "Zero Shared Spaces or Guests" },
      { title: "AQUATICS", spec: "Private Pool & Pergola", sub: "Illuminated Sunbed Deck" },
      { title: "RECREATION", spec: "Floodlit Box Turf", sub: "Private Cricket Pitch" },
      { title: "NIGHTLIFE", spec: "REVEL Lounge & Bar", sub: "Underground Snooker Den" }
    ]
  },

  philosophy: {
    eyebrow: "THE CASA BRIO PHILOSOPHY",
    title: "Unrivalled Seclusion.",
    titleItalic: "Entirely Yours.",
    description: "Casa Brio is engineered around absolute privacy. When you reserve the estate, the entire property—from the temperature-controlled pool deck to the subterranean REVEL snooker lounge—belongs exclusively to your party with no strangers or shared gates.",
    points: [
      { bold: "100% Private", text: "Single Group Buyout only" },
      { bold: "4 Master Suites", text: "Framing sweeping Sahyadri mountain vistas" },
      { bold: "Private Chef & Butler", text: "Service catered to your schedule & palate" },
      { bold: "Zero Noise Curfews", text: "Inside the subterranean REVEL speakeasy lounge" }
    ],
    imagePrimary: "/images/bungalow/drone-facade.jpg",
    imageSecondary: "/images/bungalow/interior-portrait-1.jpg",
    quoteBadge: "A sanctuary crafted for celebrations that demand complete freedom."
  },

  spaces: [
    {
      id: "speakeasy",
      category: "EXCLUSIVE RECREATION",
      title: "REVEL Speakeasy & Lounge",
      subtitle: "Subterranean Entertainment Sanctuary",
      description: "A private subterranean entertainment den equipped with a professional tournament snooker table, Chesterfield leather club seating, bar counter, and high-fidelity acoustics.",
      coverImage: "/images/bungalow/speakeasy-snooker-neon.png",
      gallery: [
        "/images/bungalow/speakeasy-snooker-neon.png",
        "/images/bungalow/snooker-bar-lounge.jpg",
        "/images/bungalow/bar-ambiance-warm.png",
        "/images/bungalow/billiards-leather-lounge.png",
        "/images/bungalow/bar-counter-snooker.png",
        "/images/bungalow/snooker-corner-cue.png"
      ],
      features: ["Full-Size Tournament Snooker", "Artisanal Bar Counter", "High-Fidelity Acoustics", "Chesterfield Leather Seating", "Subterranean Soundproofing"]
    },
    {
      id: "pool",
      category: "PRIVATE WATERFRONT",
      title: "Sapphire Pool & Pergola",
      subtitle: "Illuminated Sunbed Deck & Evening Glow",
      description: "Crystal blue swimming pool featuring an illuminated wooden pergola deck, luxury sun loungers, and alfresco dining services framed by lush tropical greenery.",
      coverImage: "/images/bungalow/pool-day-pergola.jpg",
      gallery: [
        "/images/bungalow/pool-day-pergola.jpg",
        "/images/bungalow/pool-night-pergola.jpg",
        "/images/bungalow/pool-party-celebration.png",
        "/images/bungalow/garden-lounge.jpg"
      ],
      features: ["Crystal Sapphire Swimming Pool", "Handcrafted Wooden Pergola", "Illuminated Night Ambience", "Sunken Loungers & Sunbeds", "Poolside Barbecue Setup"]
    },
    {
      id: "turf",
      category: "PRIVATE SPORTS ARENA",
      title: "Floodlit Box Cricket Turf",
      subtitle: "Day & Night Stadium Experience",
      description: "A fully enclosed private box cricket turf pitch right inside the estate boundary for competitive day and late-night matches under high-lumen floodlights.",
      coverImage: "/images/bungalow/cricket-turf-day.png",
      gallery: [
        "/images/bungalow/cricket-turf-day.png",
        "/images/bungalow/turf-play-night.jpg",
        "/images/bungalow/turf-angle-2.png",
        "/images/bungalow/turf-angle-3.png"
      ],
      features: ["Full Boundary Net Enclosure", "High-Intensity Stadium Floodlights", "AstroTurf Precision Pitch", "Spectator Seating Rail", "Cricket & Football Kits Provided"]
    },
    {
      id: "suites",
      category: "PANORAMIC VIEWS",
      title: "Mountain Master Suites",
      subtitle: "Sahyadri Valley Vistas & Ensuite Luxury",
      description: "4 expansive bedrooms with floor-to-ceiling glass windows framing misty Sahyadri mountain peaks, premium king mattresses, ensuite Italian marble baths, and private balconies.",
      coverImage: "/images/bungalow/master-suite-view.jpg",
      gallery: [
        "/images/bungalow/master-suite-view.jpg",
        "/images/bungalow/bedroom-suite-2.jpg",
        "/images/bungalow/bedroom-suite-3.jpg",
        "/images/bungalow/estate-balcony-view.jpg",
        "/images/bungalow/suite-evening-cocktails.png"
      ],
      features: ["4 Air-Conditioned Suites", "Panoramic Sahyadri Views", "Italian Marble Bathrooms", "High Thread Count Linens", "Private Sit-out Balconies"]
    },
    {
      id: "salon",
      category: "LUXURY COMMON SPACES",
      title: "Grand Living & Dining Salon",
      subtitle: "Double-Height Architectural Gathering Space",
      description: "Double-height living salon designed for intimate conversations, banquets, and lively group gatherings. Includes bespoke lounge furnishings and a 4K ultra-HD viewing screen.",
      coverImage: "/images/bungalow/living-dining-view.jpg",
      gallery: [
        "/images/bungalow/living-dining-view.jpg",
        "/images/bungalow/living-lounge-party.jpg",
        "/images/bungalow/party-lounge-detail.jpg"
      ],
      features: ["Double-Height Volume", "Custom 12-Seater Dining Suite", "4K Ultra-HD Entertainment Setup", "Bespoke Velvet & Linen Seating", "Direct Pooldeck Seamless Access"]
    },
    {
      id: "washrooms",
      category: "BESPOKE AMENITIES",
      title: "Designer Washrooms & Spa",
      subtitle: "Italian Marble & Rain Showers",
      description: "Meticulously crafted ensuite washrooms with honed Italian marble finishes, premium rainfall showers, ambient back-lit vanity mirrors, and luxury organic toiletries.",
      coverImage: "/images/bungalow/designer-washroom.jpg",
      gallery: [
        "/images/bungalow/designer-washroom.jpg",
        "/images/bungalow/interior-portrait-2.jpg"
      ],
      features: ["Honed Italian Marble Finishes", "Thermostatic Rain Showers", "Custom Ambient Backlit Mirrors", "Organic Botanical Toiletries", "Plush Towels & Bathrobes"]
    }
  ],

  revelDen: {
    eyebrow: "THE UNDERGROUND DEN",
    title: "REVEL.",
    titleItalic: "The Private Speakeasy.",
    description: "A subterranean entertainment lounge built for unhurried nights. No curfews, no noise complaints, no external bookings.",
    features: [
      { title: "Full-Size Tournament Snooker", desc: "Regulation slate table with precision brass cues and tournament balls." },
      { title: "Private Bar & Mixology", desc: "Dedicated mixologist counter for craft cocktails and signature sundowners." },
      { title: "High-Fidelity Club Acoustics", desc: "Custom tuned acoustics allowing music to pulse with zero sound leakage outside." },
      { title: "Foosball & Indoor Games", desc: "Fast-paced foosball table, board games, and den recreation." },
      { title: "Chesterfield Leather Club Seating", desc: "Deep button-tufted leather lounge seating designed for evening camaraderie." },
      { title: "100% Subterranean Privacy", desc: "Tucked below ground level ensuring complete privacy until dawn." }
    ],
    images: [
      "/images/bungalow/speakeasy-snooker-neon.png",
      "/images/bungalow/bar-ambiance-warm.png",
      "/images/bungalow/snooker-bar-lounge.jpg"
    ]
  },

  timeline: [
    {
      number: "01",
      day: "Day 1",
      time: "2:00 PM",
      title: "Estate Check-in & Gourmet Welcome Meal",
      tagline: "ARRIVAL & WELCOME LUNCH",
      description: "Arrive at your exclusive private villa in Lonavala at 2:00 PM. Step into the air-conditioned living salon where refreshing welcome drinks await, followed by a multi-course lunch prepared by your private chef.",
      highlights: [
        "Chilled welcome mocktails & fresh hand towels on arrival",
        "Multi-course gourmet lunch prepared by your private chef",
        "Luggage concierge & personal suite orientation"
      ],
      image: "/images/bungalow/living-dining-view.jpg"
    },
    {
      number: "02",
      day: "Day 1",
      time: "4:00 PM",
      title: "Sapphire Pool Dip & Box Turf Cricket Matches",
      tagline: "AFTERNOON RECREATION",
      description: "Cool off in the crystal sapphire pool under the wooden pergola or challenge your crew to high-stakes box cricket on the private turf inside your grounds.",
      highlights: [
        "Chilled pool water with sunken sun loungers",
        "Enclosed private turf with cricket & football gear",
        "Afternoon chai, iced coolers, and poolside grazing boards"
      ],
      image: "/images/bungalow/cricket-turf-day.png"
    },
    {
      number: "03",
      day: "Day 1",
      time: "8:30 PM",
      title: "Chef's Barbecue & Subterranean REVEL Speakeasy",
      tagline: "SUNDOWNERS & LATE NIGHTS",
      description: "As dusk falls over Tungarli Lake, gather around the glowing pool for live barbecue grills before heading underground into REVEL for snooker, music, and bar service with zero curfews.",
      highlights: [
        "Live charcoal grill setup curated by the butler",
        "Subterranean snooker tournament & acoustic sound system",
        "No noise curfews or time limits inside the den"
      ],
      image: "/images/bungalow/pool-night-pergola.jpg"
    },
    {
      number: "04",
      day: "Day 2",
      time: "8:30 AM",
      title: "Sahyadri Morning Mist & Artisanal Lawn Breakfast",
      tagline: "MORNING TRANQUILITY",
      description: "Wake to mountain mist floating across your bedroom glass. Enjoy freshly brewed artisanal coffee and hot breakfast served alfresco on the garden terrace.",
      highlights: [
        "Fresh tropical fruits, artisan eggs, and regional delicacies",
        "Pristine mountain air and Sahyadri valley views",
        "Morning swim in the sunlit pool"
      ],
      image: "/images/bungalow/master-suite-view.jpg"
    },
    {
      number: "05",
      day: "Day 2",
      time: "11:00 AM",
      title: "Unhurried Morning Check-Out",
      tagline: "FOND FAREWELLS",
      description: "Pack at your leisure, take group photographs by the illuminated pergola deck, and depart refreshed with memories of a private estate entirely your own.",
      highlights: [
        "Luggage assistance and express private checkout",
        "Curated roadtrip snacks & hydration packs",
        "Seamless ~90 min drive back to Mumbai or ~60 mins to Pune"
      ],
      image: "/images/bungalow/drone-facade.jpg"
    }
  ],

  amenities: [
    { title: "Private Swimming Pool", desc: "Temperature-controlled, illuminated pergola deck", icon: "Waves" },
    { title: "Floodlit Box Cricket Turf", desc: "Full enclosed pitch inside the estate boundary", icon: "Activity" },
    { title: "REVEL Speakeasy Lounge", desc: "Snooker table, private bar & high-fidelity audio", icon: "GlassWater" },
    { title: "4 Master Suites", desc: "Mountain-facing rooms with ensuite washrooms", icon: "Bed" },
    { title: "Private Chef & Butler", desc: "On-call service for every meal and request", icon: "UtensilsCrossed" },
    { title: "Grand Living Salon", desc: "Double-height common space with 4K screen", icon: "Tv" },
    { title: "Designer Washrooms", desc: "Italian marble finishes and rain showers", icon: "Sparkles" },
    { title: "Open Terrace & Garden", desc: "Landscaped lawns and mountain panorama", icon: "Trees" },
    { title: "High-Speed WiFi", desc: "Fibre broadband across the full estate", icon: "Wifi" },
    { title: "Barbecue & Outdoor Dining", desc: "Poolside grill and alfresco setup on demand", icon: "Flame" },
    { title: "Foosball & Indoor Games", desc: "Curated recreation within the REVEL zone", icon: "Gamepad2" },
    { title: "100% Single-Group Buyout", desc: "No shared gates, strangers or curfews", icon: "ShieldCheck" }
  ],

  testimonials: [
    {
      author: "Rohan & Devina Singhal",
      role: "Private Family Buyout",
      stay: "Weekend Celebration",
      quote: "Having the entire estate solely to ourselves made all the difference. The REVEL lounge downstairs with the full-size snooker table and private bar felt like an underground VIP club. We played cricket till 2 AM on the floodlit turf and had breakfast by the pool. 10/10 experience."
    },
    {
      author: "Arjun Verma",
      role: "Founders Strategy Offsite",
      stay: "Executive Retreat (18 Guests)",
      quote: "Booked Casa Brio for an 18-person executive strategy offsite. The high-speed WiFi, massive living hall with 4K screen, and total seclusion from city noise were unmatched. Evenings in the illuminated pool under the pergola with barbecue by the chef were unforgettable."
    },
    {
      author: "Siddharth Kothari",
      role: "Milestone Birthday Group",
      stay: "Private Buyout Weekend",
      quote: "Most villas in Lonavala have strict noise rules or shared gates. Casa Brio is on another level: high-wattage sound system, foosball, billiards, and a private cricket turf right inside the boundary. The butler took care of every single ice bucket and mixer seamlessly."
    }
  ],

  allPhotos: [
    { src: "/images/bungalow/drone-facade.jpg", title: "Estate Aerial & Facade", category: "Architecture" },
    { src: "/images/bungalow/pool-day-pergola.jpg", title: "Sapphire Pool & Pergola (Day)", category: "Aquatics" },
    { src: "/images/bungalow/pool-night-pergola.jpg", title: "Illuminated Pergola Pool Deck", category: "Aquatics" },
    { src: "/images/bungalow/speakeasy-snooker-neon.png", title: "REVEL Speakeasy Snooker Table", category: "Speakeasy" },
    { src: "/images/bungalow/snooker-bar-lounge.jpg", title: "REVEL Club Lounge & Bar", category: "Speakeasy" },
    { src: "/images/bungalow/bar-ambiance-warm.png", title: "Artisanal Cocktail Counter", category: "Speakeasy" },
    { src: "/images/bungalow/billiards-leather-lounge.png", title: "Chesterfield Leather Club Seating", category: "Speakeasy" },
    { src: "/images/bungalow/bar-counter-snooker.png", title: "Den Lounge Atmosphere", category: "Speakeasy" },
    { src: "/images/bungalow/snooker-corner-cue.png", title: "Tournament Cue Rack", category: "Speakeasy" },
    { src: "/images/bungalow/cricket-turf-day.png", title: "Private Box Cricket Arena", category: "Sports" },
    { src: "/images/bungalow/turf-play-night.jpg", title: "Night Matches Under Floodlights", category: "Sports" },
    { src: "/images/bungalow/turf-angle-2.png", title: "Turf Boundary & Pitch", category: "Sports" },
    { src: "/images/bungalow/turf-angle-3.png", title: "Box Turf Full Court View", category: "Sports" },
    { src: "/images/bungalow/master-suite-view.jpg", title: "Mountain Master Suite View", category: "Suites" },
    { src: "/images/bungalow/bedroom-suite-2.jpg", title: "Executive Suite II", category: "Suites" },
    { src: "/images/bungalow/bedroom-suite-3.jpg", title: "Valley Master Suite III", category: "Suites" },
    { src: "/images/bungalow/estate-balcony-view.jpg", title: "Private Suite Balcony", category: "Suites" },
    { src: "/images/bungalow/suite-evening-cocktails.png", title: "Sundowner on Suite Terrace", category: "Suites" },
    { src: "/images/bungalow/living-dining-view.jpg", title: "Grand Double-Height Salon", category: "Interiors" },
    { src: "/images/bungalow/living-lounge-party.jpg", title: "Evening Living Salon Setup", category: "Interiors" },
    { src: "/images/bungalow/party-lounge-detail.jpg", title: "Designer Interior Appointments", category: "Interiors" },
    { src: "/images/bungalow/interior-portrait-1.jpg", title: "Architectural Staircase & Voids", category: "Interiors" },
    { src: "/images/bungalow/interior-portrait-2.jpg", title: "Lounge Nooks & Textures", category: "Interiors" },
    { src: "/images/bungalow/designer-washroom.jpg", title: "Italian Marble Spa Bath", category: "Wellness" },
    { src: "/images/bungalow/pool-party-celebration.png", title: "Poolside Celebration", category: "Celebrations" },
    { src: "/images/bungalow/garden-lounge.jpg", title: "Lush Landscaped Lawn & Garden", category: "Outdoors" }
  ]
};

