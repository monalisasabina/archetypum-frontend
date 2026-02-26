const blogList = [
  {
    id: 1,
    title: "Principles of Modern Architecture",
    subtitle: "Exploring Functionality, Form, and Spatial Harmony",
    category: "Architecture",
    image: "https://picsum.photos/600/400?random=1",
    date: "2023-10-01",
    author: {
      name: "Monalisa MpendaRaha",
      profilePicture: "https://robohash.org/janedoe.png?set=set1",
      bio: "Monalisa is an architectural design enthusiast passionate about contemporary spaces and sustainable construction.",
      socialLinks: {
        facebook: "https://facebook.com/monalisa_sabina",
        twitter: "https://twitter.com/monalisa_MpendaRaha",
        linkedin: "https://linkedin.com/in/MpendaRaha"
      }
    },
    blogText: [
      "Modern architecture focuses on clean lines, functional spaces, and eliminating unnecessary ornamentation.",
      "This article breaks down the principles behind modern design and how architects balance aesthetics with user experience.",
      "By the end, you'll understand how modern architecture shapes the way we live and interact with our environments."
    ],
    link: "/blog/modern-architecture"
  },
  {
    id: 2,
    title: "Introduction to Building Construction",
    subtitle: "Understanding Foundations, Materials, and Structural Systems",
    category: "Construction",
    image: "https://picsum.photos/600/400?random=2",
    date: "2023-10-05",
    author: {
      name: "John Smith",
      profilePicture: "https://robohash.org/johnsmith.png?set=set2",
      bio: "John is a construction engineer with expertise in structural design and project site management.",
      socialLinks: {
        twitter: "https://twitter.com/john_smith",
        linkedin: "https://linkedin.com/in/john-smith"
      }
    },
    blogText: [
      "Building construction plays a crucial role in transforming architectural designs into physical structures.",
      "This article explores foundations, structural systems, and the selection of materials for safe construction.",
      "By the end, you'll understand the key processes that bring buildings to life."
    ],
    link: "/blog/building-construction"
  },
  {
    id: 3,
    title: "Urban Planning Essentials",
    subtitle: "Designing Cities for People and the Future",
    category: "Urban Planning",
    image: "https://picsum.photos/600/400?random=3",
    date: "2023-10-10",
    author: {
      name: "Alice Johnson",
      profilePicture: "https://robohash.org/alicejohnson.png?set=set3",
      bio: "Alice is an urban planner focused on sustainable development and human-centered design.",
      socialLinks: {
        twitter: "https://twitter.com/alice_johnson",
        linkedin: "https://linkedin.com/in/alice-johnson"
      }
    },
    blogText: [
      "Urban planning ensures the organized and sustainable growth of cities.",
      "We explore zoning regulations, public spaces, mobility planning, and environmental considerations.",
      "Learn how good planning improves quality of life for city residents."
    ],
    link: "/blog/urban-planning"
  },
  {
    id: 4,
    title: "Sustainable Building Techniques",
    subtitle: "Eco-Friendly Materials and Energy-Efficient Design",
    category: "Sustainability",
    image: "https://picsum.photos/600/400?random=4",
    date: "2023-10-15",
    author: {
      name: "Michael Brown",
      profilePicture: "https://robohash.org/michaelbrown.png?set=set4",
      bio: "Michael is a sustainability consultant and green-building advocate.",
      socialLinks: {
        twitter: "https://twitter.com/michael_brown",
        linkedin: "https://linkedin.com/in/michael-brown"
      }
    },
    blogText: [
      "Sustainable building techniques reduce environmental impact and create healthier spaces.",
      "This article covers eco-friendly materials such as bamboo, rammed earth, and recycled products.",
      "You'll also explore passive cooling strategies and renewable energy integration."
    ],
    link: "/blog/sustainable-building"
  },
  {
    id: 5,
    title: "Interior Design Fundamentals",
    subtitle: "Creating Comfortable and Functional Living Spaces",
    category: "Interior Design",
    image: "https://picsum.photos/600/400?random=5",
    date: "2023-10-20",
    author: {
      name: "Sophia Lee",
      profilePicture: "https://robohash.org/sophialee.png?set=set1",
      bio: "Sophia is an interior designer specializing in minimalism and biophilic design.",
      socialLinks: {
        twitter: "https://twitter.com/sophia_lee",
        linkedin: "https://linkedin.com/in/sophia-lee"
      }
    },
    blogText: [
      "Interior design is the art of enhancing interior spaces to achieve a healthier and aesthetically pleasing environment.",
      "We explore colour palettes, lighting techniques, textures, and spatial arrangement.",
      "Learn how to create interiors that reflect personality while maintaining functionality."
    ],
    link: "/blog/interior-design"
  },
  {
    id: 6,
    title: "Understanding Architectural Drawings",
    subtitle: "Blueprints, Floor Plans, Elevations, and Sections Explained",
    category: "Drafting",
    image: "https://picsum.photos/600/400?random=6",
    date: "2023-10-25",
    author: {
      name: "Daniel White",
      profilePicture: "https://robohash.org/danielwhite.png?set=set2",
      bio: "Daniel is an architectural drafter passionate about precision and technical documentation.",
      socialLinks: {
        twitter: "https://twitter.com/daniel_white",
        linkedin: "https://linkedin.com/in/daniel-white"
      }
    },
    blogText: [
      "Architectural drawings communicate design intent to builders, engineers, and clients.",
      "We break down symbols, scales, dimensions, and reading construction sheets.",
      "By the end, you'll interpret drawings confidently like a pro."
    ],
    link: "/blog/architectural-drawings"
  },
  {
    id: 7,
    title: "Landscape Architecture Basics",
    subtitle: "Designing Outdoor Spaces with Nature in Mind",
    category: "Landscape",
    image: "https://picsum.photos/600/400?random=7",
    date: "2023-10-28",
    author: {
      name: "Emma Davis",
      profilePicture: "https://robohash.org/emmadavis.png?set=set3",
      bio: "Emma is a landscape architect whose work blends nature with contemporary outdoor living.",
      socialLinks: {
        twitter: "https://twitter.com/emma_davis",
        linkedin: "https://linkedin.com/in/emma-davis"
      }
    },
    blogText: [
      "Landscape architecture enhances the beauty and function of outdoor spaces.",
      "We explore plant selection, circulation paths, water features, and topography.",
      "Learn how to design outdoor areas that feel serene and purposeful."
    ],
    link: "/blog/landscape-architecture"
  },
  {
    id: 8,
    title: "Structural Design Concepts",
    subtitle: "How Beams, Columns, and Trusses Support Buildings",
    category: "Structural Engineering",
    image: "https://picsum.photos/600/400?random=8",
    date: "2023-11-01",
    author: {
      name: "Liam Garcia",
      profilePicture: "https://robohash.org/liamgarcia.png?set=set4",
      bio: "Liam is a structural engineer fascinated by load distribution and building stability.",
      socialLinks: {
        twitter: "https://twitter.com/liam_garcia",
        linkedin: "https://linkedin.com/in/liam-garcia"
      }
    },
    blogText: [
      "Structural design ensures that buildings stand strong against internal and external forces.",
      "We explore load paths, trusses, moment frames, and safe material selection.",
      "This guide helps you understand the science that keeps buildings safe."
    ],
    link: "/blog/structural-design"
  },
  {
    id: 9,
    title: "Architectural Photography Tips",
    subtitle: "Capturing Buildings with Professional Composition",
    category: "Photography",
    image: "https://picsum.photos/600/400?random=9",
    date: "2023-11-05",
    author: {
      name: "Noah Kim",
      profilePicture: "https://robohash.org/noahkim.png?set=set1",
      bio: "Noah is a visual artist specializing in architectural and real estate photography.",
      socialLinks: {
        twitter: "https://twitter.com/noah_kim",
        linkedin: "https://linkedin.com/in/noah-kim"
      }
    },
    blogText: [
      "Architectural photography captures the essence of buildings using thoughtful composition.",
      "Learn about angles, natural lighting, perspective correction, and post-processing.",
      "By the end, you'll master the art of photographing architectural spaces."
    ],
    link: "/blog/architectural-photography"
  },
  {
    id: 10,
    title: "Introduction to Building Codes",
    subtitle: "Safety Standards Every Designer Should Know",
    category: "Regulations",
    image: "https://picsum.photos/600/400?random=10",
    date: "2023-11-10",
    author: {
      name: "Olivia Martinez",
      profilePicture: "https://robohash.org/oliviamartinez.png?set=set2",
      bio: "Olivia is a building inspector and code specialist passionate about safe construction.",
      socialLinks: {
        twitter: "https://twitter.com/olivia_martinez",
        linkedin: "https://linkedin.com/in/olivia-martinez"
      }
    },
    blogText: [
      "Building codes ensure safety, durability, and accessibility in construction.",
      "We break down fire regulations, structural standards, and sanitation requirements.",
      "This guide helps beginners understand why compliance matters."
    ],
    link: "/blog/building-codes"
  },

  // ---------------------------
  // KENYAN / AFRICAN POSTS (11–15)
  // ---------------------------

  {
    id: 11,
    title: "Climate-Responsive Architecture in East Africa",
    subtitle: "Designing Buildings That Work With Nature, Not Against It",
    category: "African Architecture",
    image: "https://picsum.photos/600/400?random=11",
    date: "2023-11-15",
    author: {
      name: "Aisha Mutua",
      profilePicture: "https://robohash.org/aishamutua.png?set=set3",
      bio: "Aisha is a Kenyan architect specializing in tropical and climate-responsive design.",
      socialLinks: {
        twitter: "https://twitter.com/aisha_mutua",
        linkedin: "https://linkedin.com/in/aisha-mutua"
      }
    },
    blogText: [
      "East Africa experiences warm climates that require thoughtful architectural solutions.",
      "We explore passive cooling, cross-ventilation, sun-shading, and thermal mass strategies.",
      "See how African architects design comfortable buildings without relying heavily on air conditioning."
    ],
    link: "/blog/climate-responsive-architecture"
  },
  {
    id: 12,
    title: "Common Building Materials Used in Kenya",
    subtitle: "Mabati, Stone, Timber, and Sustainable Local Alternatives",
    category: "Materials",
    image: "https://picsum.photos/600/400?random=12",
    date: "2023-11-18",
    author: {
      name: "Peter Ochieng",
      profilePicture: "https://robohash.org/peterochieng.png?set=set2",
      bio: "Peter is a construction materials expert with experience in affordable housing projects across Kenya.",
      socialLinks: {
        twitter: "https://twitter.com/peter_ochieng",
        linkedin: "https://linkedin.com/in/peter-ochieng"
      }
    },
    blogText: [
      "Kenya's construction sector relies heavily on materials like stone, timber, and mabati roofing sheets.",
      "We explore their benefits, cost considerations, and where each material performs best.",
      "You'll also learn about emerging sustainable options such as compressed earth blocks and stabilized soil bricks."
    ],
    link: "/blog/kenyan-building-materials"
  },
  {
    id: 13,
    title: "Understanding NCA Approvals",
    subtitle: "A Beginner’s Guide to Kenya's Construction Regulations",
    category: "Kenya Regulations",
    image: "https://picsum.photos/600/400?random=13",
    date: "2023-11-20",
    author: {
      name: "Grace Wambui",
      profilePicture: "https://robohash.org/gracewambui.png?set=set4",
      bio: "Grace is a construction consultant who helps clients navigate NCA compliance and project approvals.",
      socialLinks: {
        twitter: "https://twitter.com/grace_wambui",
        linkedin: "https://linkedin.com/in/grace-wambui"
      }
    },
    blogText: [
      "In Kenya, construction projects must comply with National Construction Authority regulations.",
      "This article explains NCA categories, contractor registration, project registration, and compliance certificates.",
      "Learn the steps to ensure your building project is legally approved and compliant."
    ],
    link: "/blog/nca-approvals"
  },
  {
    id: 14,
    title: "Affordable Housing in Kenya",
    subtitle: "Design Strategies for Cost-Effective and Durable Homes",
    category: "Affordable Housing",
    image: "https://picsum.photos/600/400?random=14",
    date: "2023-11-22",
    author: {
      name: "Brian Otieno",
      profilePicture: "https://robohash.org/brianotieno.png?set=set1",
      bio: "Brian is a housing architect focused on low-cost and community-driven housing solutions.",
      socialLinks: {
        twitter: "https://twitter.com/brian_otieno",
        linkedin: "https://linkedin.com/in/brian-otieno"
      }
    },
    blogText: [
      "Affordable housing in Kenya requires creative approaches to reduce cost without compromising quality.",
      "We explore modular construction, prefabrication, and alternative materials.",
      "Discover how architects create practical, durable homes for low- and middle-income families."
    ],
    link: "/blog/affordable-housing-kenya"
  },
  {
    id: 15,
    title: "Traditional African Architecture",
    subtitle: "Cultural Inspirations for Modern Building Design",
    category: "Culture & Design",
    image: "https://picsum.photos/600/400?random=15",
    date: "2023-11-25",
    author: {
      name: "Samuel Njoroge",
      profilePicture: "https://robohash.org/samuelnjoroge.png?set=set3",
      bio: "Samuel is a cultural historian exploring how African traditions influence modern architecture.",
      socialLinks: {
        twitter: "https://twitter.com/samuel_njoroge",
        linkedin: "https://linkedin.com/in/samuel-njoroge"
      }
    },
    blogText: [
      "Traditional African architecture is rich in symbolism, craftsmanship, and sustainability.",
      "This article explores homestead layouts, vernacular materials, and cultural patterns from different regions.",
      "Learn how modern architects reinterpret traditional African design in contemporary projects."
    ],
    link: "/blog/traditional-african-architecture"
  }
];

export default blogList;
