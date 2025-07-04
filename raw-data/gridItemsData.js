import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    // className: "lg:col-span-2 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    className:"col-span-2  h-[400px] row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className:"col-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "col-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  // {
  //   id: 4,
  //   title: "Tech enthusiast with a passion for development.",
  //   description: "",
  //   className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  //   imgClassName: "",
  //   titleClassName: "justify-start",
  //   img: "/grid.svg",
  //   spareImg: "/b4.svg",
  // },



];

export const projects = [
  {
    id: 1,
    title: "all media downloader",
    des: "Explore the wonders of our downloading all kind of videos with react emmerging power",
    img: "/mediadownloader.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://allmediadownloader.netlify.app",
  },
  {
    id: 2,
    title: "Artrix-Entertainment celebrity booking website",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: '/artrix.png',
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://artrixentertainment.netlify.app/",
  },
  {
    id: 3,
    title: "INDO-BHUTAN TRAVELS ",
    des: "A real world travel agency website where people can book their travel plans, can  rent Cars along with that they can book cars .",
    img: "/indo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://indobhutantaxiservice.netlify.app/",
  },
  {
    id: 4,
    title: "Animated Youth Computer Training Center",
    des: "Created a Visually Stunning and Interactive website for Youth Computer Training Center using Next.js and Acsternity ui ",
    img: "/youthcomputer.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://youth-computer-training-center.vercel.app/",
  },
  {
    id: 5,
    title: "Animated Gym Website ",
    des: "Created A Well Structured and Responsive Gym Website using Next.js and GSAP Animation",
    img: "/gym.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://gym-website-nine-ashen.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rajib was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajib is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rajib was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajib is the ideal partner.",
    name: "Anirban Eych",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rajib was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajib is the ideal partner.",
    name: "Judhistir Das",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rajib was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajib is the ideal partner.",
    name: "Banga Bhumi PVT",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Rajib was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rajib's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rajib is the ideal partner.",
    name: "Abhijit Sarkar",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:'https://github.com/RajibDebnat'
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
    link:'https://www.linkedin.com/in/rajib-debnath-0715a6236/'
  },
];
export const Approachs = [
  {
    outerTitle:'Phase 1',
    title: "Planning and Strategy",
    description:
      "Define the purpose, audience, and structure of your website. Create a clear roadmap, including the sitemap, wireframes, and technologies to use for seamless development.",
  },
  {
    outerTitle:'Phase 2',
    title: "Development and Testing",
    description:
      "Turn your plans into a functional website by building and styling the pages. Test for responsiveness, performance, and functionality across devices and browsers.",
  },
  {
    outerTitle:'Phase 3',
    title: "Launch and Marketing",
    description:
      "Host the website with a custom domain, optimize for SEO, and make it live. ",
  },
];
