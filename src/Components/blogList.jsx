const blogList = [
  {
    id: 1,
    title: "Understanding React Hooks",
    subtitle: "A Deep Dive into React's Functional Components",
    category: "React",
    image: "https://picsum.photos/600/400?random=1",
    date: "2023-10-01",
    author: {
      name: "Monalisa MpendaRaha",
      profilePicture: "https://robohash.org/janedoe.png?set=set1",
      bio: "Monalisa is a front-end developer with a passion for React and modern web technologies.",
      socialLinks: {
        facebook: "https://facebook.com/monalisa_sabina",
        twitter: "https://twitter.com/monalisa_MpendaRaha",
        linkedin: "https://linkedin.com/in/MpendaRaha"
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
    image: "https://picsum.photos/600/400?random=2",
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
    image: "https://picsum.photos/600/400?random=3",
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
    image: "https://picsum.photos/600/400?random=4",
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
    image: "https://picsum.photos/600/400?random=5",
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
    title: "Mastering Git & GitHub",
    subtitle: "Version Control for Modern Developers",
    category: "Tools",
    image: "https://picsum.photos/600/400?random=6",
    date: "2023-10-25",
    author: {
      name: "Daniel White",
      profilePicture: "https://robohash.org/danielwhite.png?set=set2",
      bio: "Daniel is a software engineer who mentors devs on Git workflows.",
      socialLinks: {
        twitter: "https://twitter.com/daniel_white",
        linkedin: "https://linkedin.com/in/daniel-white"
      }
    },
    blogText: [
      "Git and GitHub are essential tools for collaboration in software projects.",
      "This guide will show you branching strategies, pull requests, and merging best practices.",
      "By the end, you’ll be confident using Git in any project."
    ],
    link: "/blog/git-github"
  },
  {
    id: 7,
    title: "Intro to TypeScript",
    subtitle: "Adding Strong Typing to JavaScript",
    category: "TypeScript",
    image: "https://picsum.photos/600/400?random=7",
    date: "2023-10-28",
    author: {
      name: "Emma Davis",
      profilePicture: "https://robohash.org/emmadavis.png?set=set3",
      bio: "Emma is a full-stack developer who loves TypeScript and clean code.",
      socialLinks: {
        twitter: "https://twitter.com/emma_davis",
        linkedin: "https://linkedin.com/in/emma-davis"
      }
    },
    blogText: [
      "TypeScript helps catch bugs early by adding static typing to JavaScript.",
      "We’ll look at types, interfaces, and how to migrate an existing project.",
      "By the end, you’ll see why TypeScript is so widely adopted."
    ],
    link: "/blog/typescript-intro"
  },
  {
    id: 8,
    title: "CSS Grid & Flexbox",
    subtitle: "Modern Layout Techniques for Web Developers",
    category: "CSS",
    image: "https://picsum.photos/600/400?random=8",
    date: "2023-11-01",
    author: {
      name: "Liam Garcia",
      profilePicture: "https://robohash.org/liamgarcia.png?set=set4",
      bio: "Liam is a frontend engineer and CSS enthusiast.",
      socialLinks: {
        twitter: "https://twitter.com/liam_garcia",
        linkedin: "https://linkedin.com/in/liam-garcia"
      }
    },
    blogText: [
      "CSS Grid and Flexbox make building layouts easier and more flexible than ever.",
      "We’ll compare the two, show common patterns, and discuss when to use each.",
      "By the end, you’ll be able to design responsive layouts confidently."
    ],
    link: "/blog/css-layouts"
  },
  {
    id: 9,
    title: "Next.js for Beginners",
    subtitle: "Server-Side Rendering Made Simple",
    category: "Next.js",
    image: "https://picsum.photos/600/400?random=9",
    date: "2023-11-05",
    author: {
      name: "Noah Kim",
      profilePicture: "https://robohash.org/noahkim.png?set=set1",
      bio: "Noah is a frontend engineer exploring full-stack development with Next.js.",
      socialLinks: {
        twitter: "https://twitter.com/noah_kim",
        linkedin: "https://linkedin.com/in/noah-kim"
      }
    },
    blogText: [
      "Next.js simplifies server-side rendering and static site generation.",
      "We’ll set up a project, add pages, and fetch data from an API.",
      "By the end, you’ll be able to deploy your first Next.js app."
    ],
    link: "/blog/nextjs-intro"
  },
  {
    id: 10,
    title: "APIs 101",
    subtitle: "Understanding REST and GraphQL",
    category: "APIs",
    image: "https://picsum.photos/600/400?random=10",
    date: "2023-11-10",
    author: {
      name: "Olivia Martinez",
      profilePicture: "https://robohash.org/oliviamartinez.png?set=set2",
      bio: "Olivia is an API specialist who loves simplifying backend concepts.",
      socialLinks: {
        twitter: "https://twitter.com/olivia_martinez",
        linkedin: "https://linkedin.com/in/olivia-martinez"
      }
    },
    blogText: [
      "APIs are the backbone of modern applications.",
      "We’ll explain REST and GraphQL, their differences, and when to use each.",
      "By the end, you’ll have a solid understanding of API design."
    ],
    link: "/blog/apis-101"
  }
];

export default blogList;
