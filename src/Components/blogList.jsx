

const blogList = [
  {
    id: 1,
    title: "Understanding React Hooks",
    subtitle: "A Deep Dive into React's Functional Components",
    category: "React",
    image: "https://source.unsplash.com/featured/?react,javascript,code",
    date: "2023-10-01",
    author: {
      name: "Monalisa MpendaRaha",
      profilePicture: "https://robohash.org/janedoe.png?set=set1",
      bio: "Jane is a front-end developer with a passion for React and modern web technologies.",
      socialLinks: {
        twitter: "https://twitter.com/jane_doe",
        linkedin: "https://linkedin.com/in/jane-doe"
      }
    },
    blogText: [
      "React Hooks are a powerful feature that allows you to use state and other React features without writing a class.",
      "In this blog, we will explore the different types of hooks, how to use them effectively, and best practices for integrating them into your React applications.",
      "By the end, you’ll understand how to replace class-based components with functional ones."
    ],
    link: "/blog/react-hooks"
  },
  {
    id: 2,
    title: "Getting Started with Flask",
    subtitle: "Building Your First Backend API",
    category: "Flask",
    image: "https://source.unsplash.com/featured/?flask,python,backend",
    date: "2023-10-05",
    author: {
      name: "John Smith",
      profilePicture: "https://robohash.org/johnsmith.png?set=set2",
      bio: "John is a backend engineer who loves working with Python and Flask.",
      socialLinks: {
        twitter: "https://twitter.com/john_smith",
        linkedin: "https://linkedin.com/in/john-smith"
      }
    },
    blogText: [
      "Flask is a lightweight Python web framework that makes it easy to build APIs and web applications.",
      "In this article, we’ll walk through creating your first Flask app, defining routes, and returning JSON responses.",
      "By the end, you’ll have a simple but functional backend ready to connect to a frontend."
    ],
    link: "/blog/flask-intro"
  },
  {
    id: 3,
    title: "State Management with Redux",
    subtitle: "Handling Global State in React Applications",
    category: "Redux",
    image: "https://source.unsplash.com/featured/?redux,state,management",
    date: "2023-10-10",
    author: {
      name: "Alice Johnson",
      profilePicture: "https://robohash.org/alicejohnson.png?set=set3",
      bio: "Alice is a software architect specializing in scalable frontend applications.",
      socialLinks: {
        twitter: "https://twitter.com/alice_johnson",
        linkedin: "https://linkedin.com/in/alice-johnson"
      }
    },
    blogText: [
      "Managing state in large applications can be challenging. Redux provides a predictable state container that makes this easier.",
      "We’ll discuss how to integrate Redux with React, when to use it, and common patterns for cleaner code.",
      "You’ll also learn best practices for debugging and testing Redux-based applications."
    ],
    link: "/blog/redux-state"
  },
  {
    id: 4,
    title: "Deploying Apps with Docker",
    subtitle: "Containerizing Your Applications for Easy Deployment",
    category: "DevOps",
    image: "https://source.unsplash.com/featured/?docker,containers,devops",
    date: "2023-10-15",
    author: {
      name: "Michael Brown",
      profilePicture: "https://robohash.org/michaelbrown.png?set=set4",
      bio: "Michael is a DevOps engineer passionate about cloud-native technologies.",
      socialLinks: {
        twitter: "https://twitter.com/michael_brown",
        linkedin: "https://linkedin.com/in/michael-brown"
      }
    },
    blogText: [
      "Docker revolutionized how developers package and deploy applications.",
      "In this post, we’ll cover how to write a Dockerfile, build images, and run containers.",
      "We’ll also touch on best practices for keeping images lightweight and secure."
    ],
    link: "/blog/docker-deployment"
  },
  {
    id: 5,
    title: "Responsive Web Design",
    subtitle: "Creating Websites that Work Across Devices",
    category: "Web Design",
    image: "https://source.unsplash.com/featured/?responsive,design,css",
    date: "2023-10-20",
    author: {
      name: "Sophia Lee",
      profilePicture: "https://robohash.org/sophialee.png?set=set1",
      bio: "Sophia is a UI/UX designer focused on creating accessible digital experiences.",
      socialLinks: {
        twitter: "https://twitter.com/sophia_lee",
        linkedin: "https://linkedin.com/in/sophia-lee"
      }
    },
    blogText: [
      "With so many devices available today, responsive design ensures your website looks great everywhere.",
      "We’ll go over CSS techniques like media queries, fluid grids, and flexible images.",
      "You’ll also learn how to test responsiveness effectively during development."
    ],
    link: "/blog/responsive-design"
  },
  {
    id: 6,
    title: "Mastering Git and GitHub",
    subtitle: "Version Control and Collaboration for Developers",
    category: "Git",
    image: "https://source.unsplash.com/featured/?git,github,versioncontrol",
    date: "2023-10-25",
    author: {
      name: "David Wilson",
      profilePicture: "https://robohash.org/davidwilson.png?set=set2",
      bio: "David is a full-stack developer and open-source contributor.",
      socialLinks: {
        twitter: "https://twitter.com/david_wilson",
        linkedin: "https://linkedin.com/in/david-wilson"
      }
    },
    blogText: [
      "Git is an essential tool for modern developers, enabling collaboration and version control.",
      "This post introduces common Git commands, workflows, and how to leverage GitHub for team projects.",
      "By mastering Git, you’ll improve both productivity and code quality."
    ],
    link: "/blog/git-mastery"
  },
  {
    id: 7,
    title: "Introduction to TypeScript",
    subtitle: "Adding Strong Typing to Your JavaScript",
    category: "TypeScript",
    image: "https://source.unsplash.com/featured/?typescript,javascript,programming",
    date: "2023-11-01",
    author: {
      name: "Emma Davis",
      profilePicture: "https://robohash.org/emmadavis.png?set=set3",
      bio: "Emma is a front-end engineer who enjoys writing scalable and maintainable code.",
      socialLinks: {
        twitter: "https://twitter.com/emma_davis",
        linkedin: "https://linkedin.com/in/emma-davis"
      }
    },
    blogText: [
      "TypeScript brings optional static typing to JavaScript, helping catch errors early.",
      "We’ll explore how to get started with TypeScript in a React project and discuss its key features.",
      "By the end, you’ll understand how TypeScript improves developer experience."
    ],
    link: "/blog/typescript-intro"
  },
  {
    id: 8,
    title: "Building RESTful APIs",
    subtitle: "Designing APIs That Scale",
    category: "API",
    image: "https://source.unsplash.com/featured/?api,rest,backend",
    date: "2023-11-05",
    author: {
      name: "Liam Martinez",
      profilePicture: "https://robohash.org/liammartinez.png?set=set4",
      bio: "Liam is an API specialist who designs scalable and maintainable backend systems.",
      socialLinks: {
        twitter: "https://twitter.com/liam_martinez",
        linkedin: "https://linkedin.com/in/liam-martinez"
      }
    },
    blogText: [
      "REST is a widely used architecture style for building scalable APIs.",
      "We’ll cover best practices for designing endpoints, handling errors, and securing your API.",
      "We’ll also discuss tools for testing and documenting your APIs."
    ],
    link: "/blog/restful-apis"
  },
  {
    id: 9,
    title: "CSS Grid vs Flexbox",
    subtitle: "Choosing the Right Layout Tool",
    category: "CSS",
    image: "https://source.unsplash.com/featured/?css,grid,flexbox",
    date: "2023-11-10",
    author: {
      name: "Olivia Garcia",
      profilePicture: "https://robohash.org/oliviagarcia.png?set=set1",
      bio: "Olivia is a front-end developer with expertise in CSS and layout systems.",
      socialLinks: {
        twitter: "https://twitter.com/olivia_garcia",
        linkedin: "https://linkedin.com/in/olivia-garcia"
      }
    },
    blogText: [
      "CSS Grid and Flexbox are two powerful layout systems, each with its strengths.",
      "This blog compares when to use Grid vs Flexbox and shows examples of both.",
      "By mastering these tools, you’ll create cleaner and more flexible designs."
    ],
    link: "/blog/css-grid-flexbox"
  },
  {
    id: 10,
    title: "Next.js for Beginners",
    subtitle: "Building Fast and SEO-Friendly React Apps",
    category: "Next.js",
    image: "https://source.unsplash.com/featured/?nextjs,react,web",
    date: "2023-11-15",
    author: {
      name: "William Taylor",
      profilePicture: "https://robohash.org/williamtaylor.png?set=set2",
      bio: "William is a full-stack engineer who builds modern web apps using React and Next.js.",
      socialLinks: {
        twitter: "https://twitter.com/william_taylor",
        linkedin: "https://linkedin.com/in/william-taylor"
      }
    },
    blogText: [
      "Next.js is a React framework that enables server-side rendering and static site generation.",
      "We’ll walk through setting up a basic Next.js project and building your first pages.",
      "You’ll learn why Next.js is a great choice for performance and SEO."
    ],
    link: "/blog/nextjs-beginners"
  },
  {
    id: 11,
    title: "Authentication with JWT",
    subtitle: "Securing Your APIs",
    category: "Security",
    image: "https://source.unsplash.com/featured/?jwt,security,authentication",
    date: "2023-11-20",
    author: {
      name: "Isabella Hernandez",
      profilePicture: "https://robohash.org/isabellahernandez.png?set=set3",
      bio: "Isabella is a backend developer focused on authentication and security systems.",
      socialLinks: {
        twitter: "https://twitter.com/isabella_hernandez",
        linkedin: "https://linkedin.com/in/isabella-hernandez"
      }
    },
    blogText: [
      "JWTs (JSON Web Tokens) are a popular way to handle authentication in modern applications.",
      "We’ll discuss how JWTs work, how to implement them in Flask, and best practices for security.",
      "By the end, you’ll know how to protect your routes with JWT authentication."
    ],
    link: "/blog/jwt-authentication"
  },
  {
    id: 12,
    title: "Testing in React",
    subtitle: "Ensuring Reliability with Unit and Integration Tests",
    category: "Testing",
    image: "https://source.unsplash.com/featured/?testing,react,unittest",
    date: "2023-11-25",
    author: {
      name: "James Lopez",
      profilePicture: "https://robohash.org/jameslopez.png?set=set4",
      bio: "James is a software engineer dedicated to writing reliable and testable code.",
      socialLinks: {
        twitter: "https://twitter.com/james_lopez",
        linkedin: "https://linkedin.com/in/james-lopez"
      }
    },
    blogText: [
      "Testing is crucial for building reliable React applications.",
      "We’ll explore libraries like Jest and React Testing Library, with examples of unit and integration tests.",
      "Testing will help you catch bugs early and build confidence in your codebase."
    ],
    link: "/blog/react-testing"
  },
  {
    id: 13,
    title: "GraphQL Basics",
    subtitle: "A New Way to Query APIs",
    category: "GraphQL",
    image: "https://source.unsplash.com/featured/?graphql,api,query",
    date: "2023-11-30",
    author: {
      name: "Mia Clark",
      profilePicture: "https://robohash.org/miaclark.png?set=set1",
      bio: "Mia is a developer advocate passionate about modern API technologies.",
      socialLinks: {
        twitter: "https://twitter.com/mia_clark",
        linkedin: "https://linkedin.com/in/mia-clark"
      }
    },
    blogText: [
      "GraphQL provides a flexible way to query data from APIs, solving issues with over-fetching and under-fetching.",
      "In this post, we’ll cover the basics of GraphQL schemas, queries, and mutations.",
      "You’ll also see how to integrate GraphQL with frontend frameworks like React."
    ],
    link: "/blog/graphql-basics"
  },
  {
    id: 14,
    title: "Intro to Tailwind CSS",
    subtitle: "Utility-First Styling for Modern Web Apps",
    category: "CSS",
    image: "https://source.unsplash.com/featured/?tailwind,css,design",
    date: "2023-12-05",
    author: {
      name: "Ethan Walker",
      profilePicture: "https://robohash.org/ethanwalker.png?set=set2",
      bio: "Ethan is a frontend developer who loves clean design and efficient workflows.",
      socialLinks: {
        twitter: "https://twitter.com/ethan_walker",
        linkedin: "https://linkedin.com/in/ethan-walker"
      }
    },
    blogText: [
      "Tailwind CSS is a utility-first framework that helps you build modern interfaces quickly.",
      "We’ll look at how to set up Tailwind in a React project and use its classes effectively.",
      "Tailwind allows for rapid prototyping while keeping your CSS manageable."
    ],
    link: "/blog/tailwind-css"
  },
  {
    id: 15,
    title: "AI in Web Development",
    subtitle: "Leveraging Artificial Intelligence for Smarter Apps",
    category: "AI",
    image: "https://source.unsplash.com/featured/?ai,artificialintelligence,web",
    date: "2023-12-10",
    author: {
      name: "Charlotte White",
      profilePicture: "https://robohash.org/charlottewhite.png?set=set3",
      bio: "Charlotte is a researcher exploring the intersection of AI and web development.",
      socialLinks: {
        twitter: "https://twitter.com/charlotte_white",
        linkedin: "https://linkedin.com/in/charlotte-white"
      }
    },
    blogText: [
      "AI is transforming web development, from intelligent chatbots to personalized recommendations.",
      "We’ll explore real-world examples of AI in frontend and backend systems.",
      "You’ll also learn about tools and frameworks that make AI integration easier."
    ],
    link: "/blog/ai-webdev"
  }
];

export default blogList;