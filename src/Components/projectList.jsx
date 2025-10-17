import houseImage1 from "../Pictures/download1.jpeg";
import houseImage2 from "../Pictures/download.jpeg";
import houseImage3 from "../Pictures/images.jpeg";
import houseImage4 from "../Pictures/images.jpeg";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "A Modern Marvel",
    thumbnail: houseImage1,
    images: [houseImage1, houseImage2, houseImage3],
    dateAdded: "2025-10-13",
    location: "Nairobi, Kenya",
    clientName: "John Mwangi",
    description: [
      "Project Alpha represents a bold step toward modern residential architecture. Its sleek geometry and clean lines are paired with functional interior layouts that maximize light and space. Each room flows seamlessly, creating an environment where beauty meets practicality for a sophisticated, contemporary living experience.",
      "With Project Alpha, innovation is brought to life through balanced proportions and smart design solutions. The exterior’s modern aesthetic complements spacious interiors designed for comfort and creativity. Large windows invite natural light, while open layouts ensure both elegance and functionality in every corner of this visionary home.",
      "Project Alpha is crafted with precision and purpose, embodying architectural excellence. Its streamlined form, open plan, and natural finishes create a striking yet warm atmosphere. The project celebrates minimalism without compromising comfort, offering residents a serene environment that reflects thoughtful design and modern elegance."
    ],
    testimonials: [
      "“This team exceeded my expectations — every detail was handled with care and creativity.” — John Mwangi",
      "“I’m proud to call Project Alpha my home. It’s modern, bright, and perfectly built.”"
    ]
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "Urban Living Redefined",
    thumbnail: houseImage2,
    images: [houseImage2, houseImage3, houseImage4],
    dateAdded: "2025-09-21",
    location: "Kisumu, Kenya",
    clientName: "Urban Edge Ltd.",
    description: [
      "Project Beta redefines urban living with its innovative design and functional spaces. The structure blends modern materials with sustainable techniques, creating a dynamic environment that supports both work and leisure. It brings a new level of sophistication and efficiency to the heart of the city’s growing skyline.",
      "The design of Project Beta emphasizes sustainability and energy efficiency. Carefully positioned openings and strategic insulation reduce energy usage without sacrificing comfort. It’s a symbol of what forward-thinking urban development can achieve while respecting environmental and community values.",
      "With its contemporary architecture and thoughtful layout, Project Beta offers a unique living experience. This project embodies the evolution of urban architecture, blending functionality with elegance to create spaces where people thrive and communities grow."
    ],
    testimonials: [
      "“Project Beta has transformed how we think about urban housing. Impressive work!” — Urban Edge Ltd."
    ]
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "Sustainable Living",
    thumbnail: houseImage3,
    images: [houseImage2, houseImage1, houseImage4],
    dateAdded: "2025-08-30",
    location: "Nakuru, Kenya",
    clientName: "GreenBuild Co.",
    description: [
      "Project Gamma explores the concept of sustainable architecture through innovative design choices. Solar power integration, rainwater harvesting, and energy-efficient insulation make it a model for eco-friendly residential development in growing cities.",
      "The spaces within Gamma are designed to promote wellness and environmental responsibility. Natural ventilation, minimal waste materials, and green roofs combine aesthetics with a strong ecological message.",
      "This project stands as a testament to the possibilities of sustainable living. It’s a blueprint for a greener future, demonstrating that environmental consciousness and beautiful design can coexist seamlessly."
    ],
    testimonials: [
      "“We wanted a sustainable, smart design — they delivered beyond expectations.” — GreenBuild Co."
    ]
  },
  {
    id: 4,
    title: "Project Delta",
    subtitle: "Minimalist Elegance",
    thumbnail: houseImage4,
    images: [houseImage4, houseImage1, houseImage2],
    dateAdded: "2025-07-10",
    location: "Eldoret, Kenya",
    clientName: "Delta Homes",
    description: [
      "Project Delta embraces minimalist design principles. Its layout focuses on open spaces, soft neutral tones, and carefully chosen textures that inspire a sense of calm and balance throughout the home.",
      "Natural light is at the core of Project Delta’s design philosophy. Large, strategically placed windows allow sunlight to flow through, creating a warm and inviting atmosphere in every room.",
      "Project Delta demonstrates how minimalism can elevate modern living, offering a space that is elegant, uncluttered, and beautifully functional."
    ],
    testimonials: [
      "“The simplicity and elegance of Project Delta made our dream home come true.” — Delta Homes"
    ]
  },
  {
    id: 5,
    title: "Project Epsilon",
    subtitle: "Light and Air",
    thumbnail: houseImage1,
    images: [houseImage1, houseImage3, houseImage2],
    dateAdded: "2025-06-18",
    location: "Mombasa, Kenya",
    clientName: "Epsilon Holdings",
    description: [
      "Project Epsilon is designed to celebrate the beauty of natural light. Its architecture features wide glass panels and open-plan spaces that blur the boundary between indoor and outdoor living.",
      "The use of large windows and thoughtful ventilation ensures a naturally cool, bright environment throughout the day. Every space is optimized for relaxation and connectivity with nature.",
      "Epsilon embodies a serene, breezy atmosphere that enhances modern coastal living. It’s ideal for families and individuals who value openness and tranquility."
    ],
    testimonials: [
      "“Our home is full of natural light — exactly what we dreamed of.” — Epsilon Holdings"
    ]
  },
  {
    id: 6,
    title: "Project Zeta",
    subtitle: "Coastal Harmony",
    thumbnail: houseImage2,
    images: [houseImage3, houseImage2, houseImage4],
    dateAdded: "2025-06-01",
    location: "Diani, Kenya",
    clientName: "Zeta Resorts",
    description: [
      "Zeta is a stunning coastal project designed to bring luxury and relaxation together. Inspired by ocean views and breezy living, it features a seamless blend of modern design and natural textures.",
      "The architectural design embraces open spaces, shaded terraces, and a refreshing indoor-outdoor flow. It invites the ocean breeze into every corner, creating an uplifting retreat.",
      "Zeta is not just a building but an experience, offering an unparalleled sense of harmony with its environment."
    ]
  },
  {
    id: 7,
    title: "Project Eta",
    subtitle: "Urban Escape",
    thumbnail: houseImage3,
    images: [houseImage1, houseImage4, houseImage2],
    dateAdded: "2025-05-15",
    location: "Thika, Kenya",
    clientName: "Eta Real Estate",
    description: [
      "Eta offers an urban retreat within a vibrant city. Its design focuses on peaceful interiors, green courtyards, and privacy-enhancing layouts.",
      "Natural elements and elegant finishes balance urban energy with personal tranquility. The spaces are ideal for professionals seeking calm without leaving the city.",
      "Eta blends smart city living with comfort, setting a new standard for urban residential projects."
    ]
  },
  {
    id: 8,
    title: "Project Theta",
    subtitle: "Cultural Fusion",
    thumbnail: houseImage4,
    images: [houseImage2, houseImage3, houseImage1],
    dateAdded: "2025-05-01",
    location: "Machakos, Kenya",
    clientName: "Theta Collective",
    description: [
      "Theta celebrates the fusion of modern design with traditional Kenyan elements. It features warm earthy tones, handcrafted details, and sustainable materials.",
      "The structure honors cultural roots while integrating advanced building techniques. It stands as a statement of pride and identity.",
      "Theta demonstrates how architecture can preserve heritage while embracing innovation."
    ]
  },
  {
    id: 9,
    title: "Project Iota",
    subtitle: "Smart Living",
    thumbnail: houseImage1,
    images: [houseImage4, houseImage1, houseImage3],
    dateAdded: "2025-04-22",
    location: "Kajiado, Kenya",
    clientName: "Iota Properties",
    description: [
      "Iota integrates smart technology into every corner of its design. Lighting, security, and climate control systems work seamlessly for maximum comfort.",
      "The building combines modern aesthetics with intelligent infrastructure, ensuring energy efficiency and effortless living.",
      "Iota represents the future of residential architecture — adaptive, elegant, and connected."
    ]
  },
  {
    id: 10,
    title: "Project Kappa",
    subtitle: "Green Heart",
    thumbnail: houseImage2,
    images: [houseImage2, houseImage3, houseImage1],
    dateAdded: "2025-04-01",
    location: "Nyeri, Kenya",
    clientName: "Kappa Developments",
    description: [
      "Kappa is inspired by lush greenery and ecological responsibility. Vertical gardens and natural finishes create a refreshing ambiance.",
      "The design integrates green technologies to reduce environmental impact, proving that luxury and sustainability can coexist beautifully.",
      "Kappa sets a new benchmark for eco-friendly architecture in residential spaces."
    ]
  },
  {
    id: 11,
    title: "Project Lambda",
    subtitle: "Quiet Corners",
    thumbnail: houseImage3,
    images: [houseImage3, houseImage1, houseImage4],
    dateAdded: "2025-03-18",
    location: "Naivasha, Kenya",
    clientName: "Lambda Living",
    description: [
      "Lambda creates cozy private spaces where families can thrive. Its simple, elegant design emphasizes intimacy and warmth.",
      "Every room opens to quiet green spaces, making it ideal for calm living environments.",
      "Lambda is about more than architecture — it’s about building a sense of home."
    ]
  },
  {
    id: 12,
    title: "Project Mu",
    subtitle: "Community Spirit",
    thumbnail: houseImage4,
    images: [houseImage1, houseImage2, houseImage3],
    dateAdded: "2025-03-02",
    location: "Kakamega, Kenya",
    clientName: "Mu Estate",
    description: [
      "Mu focuses on community living. Shared spaces, open courtyards, and walking paths foster social connection and belonging.",
      "Its design encourages sustainable living while creating opportunities for neighbors to interact naturally.",
      "Mu demonstrates how thoughtful planning can shape connected, happy communities."
    ]
  },
  {
    id: 13,
    title: "Project Nu",
    subtitle: "Luxury and Light",
    thumbnail: houseImage1,
    images: [houseImage2, houseImage4, houseImage3],
    dateAdded: "2025-02-21",
    location: "Karen, Nairobi",
    clientName: "Nu Homes",
    description: [
      "Nu offers a luxurious living experience with a design that celebrates natural light and space.",
      "Every finish and fixture has been carefully selected to achieve a modern and timeless look.",
      "Nu stands as a testament to architectural excellence and refined living."
    ]
  },
  {
    id: 14,
    title: "Project Xi",
    subtitle: "Urban Village",
    thumbnail: houseImage2,
    images: [houseImage3, houseImage1, houseImage4],
    dateAdded: "2025-02-05",
    location: "Ruiru, Kenya",
    clientName: "Xi Developers",
    description: [
      "Xi combines the comfort of village living with the convenience of the city. Green paths and shared amenities promote a strong community feel.",
      "The design is warm, accessible, and modern, perfect for young families and professionals.",
      "Xi reimagines urban neighborhoods as spaces for connection and growth."
    ]
  },
  {
    id: 15,
    title: "Project Omicron",
    subtitle: "Elevated Living",
    thumbnail: houseImage3,
    images: [houseImage1, houseImage2, houseImage4],
    dateAdded: "2025-01-20",
    location: "Kitale, Kenya",
    clientName: "Omicron Estates",
    description: [
      "Omicron rises with bold architectural lines and a commanding presence. Its design elevates everyday living to a new level.",
      "The structure blends elegance and function, offering modern comforts in a beautifully crafted space.",
      "Omicron is more than a home — it’s a lifestyle statement."
    ]
  }
];

export default projects;
