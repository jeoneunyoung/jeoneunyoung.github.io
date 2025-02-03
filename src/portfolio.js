/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Eun Young Jeon",
  title: "Hi all, I'm Eunyoung",
  subTitle: emoji(
    "A passionate bioinformatican 🚀 with experience in integrating large datasets to find therapeutic targets and disease-modulating factors."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1Ens4JneZaxfzW5jC-lLNBhFLbeG4FvfF/edit?usp=drive_link&ouid=114580923322909012463&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  
  linkedin: "https://www.linkedin.com/in/eun-young-jeon-13b16b24b/",
  gmail: "eyjeon@snu.ac.kr",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BIOINFORMATICAN WHO WANTS TO CONTRIBUTE TO A DIVERSE GENETIC DB, ADVANCING GENETICS APPLICATIONS IN HEALTHCARE, DRUG DEV, AND PERSONALIZED MED",
  skills: [
    emoji(
      "⚡ Process and integrate more than 700 single-cell RNA sequencing datasets"
    ),
    emoji("⚡ Analyze single-cell RNA sequencing and spatial transcriptomics to find therapeutic targets"),
    emoji(
      "⚡ Utilize whole-genome, RNA, ATAC, ChIP-sequencing to identify novel genetic factors involved with diseases"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [



    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Seoul National University",
      logo: require("./assets/images/snulogo.webp"),
      subHeader: "Joint Masters and PhD in Biomedical Sciences",
      duration: "Jan 2018 - Aug 2025",
      desc: "Participated in the research of Duchenne muscular dystrophy and COVID-19."
    },
    {
      schoolName: "Smith College",
      logo: require("./assets/images/sc_logo.webp"),
      subHeader: "Bachelor of Arts in Biological Sciences",
      duration: "Sept 2013 - May 2017",
      desc: "Scholar athlete. Took courses about Comp Sci Programming."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Research",
  projects: [
    {
      image: require("./assets/images/dmd.png"),
      projectName: "Science Advances, in press",
      projectDesc: "Inhibiting EZH2 complements steroid effects in Duchenne muscular dystrophy",
      footerLink: [
        {
          name: "See paper",
          url: "https://www.biorxiv.org/content/10.1101/2024.08.22.609220v1.full.pdf"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/covid.png"),
      projectName: "Under review in Nature Communications",
      projectDesc: "Integrated analysis of COVID-19 multi-omics data for eQTLs reveals genetic mechanisms underlying disease severity",
      footerLink: [
        {
          name: "See paper",
          url: "https://www.biorxiv.org/content/10.1101/2024.12.18.629144v1.full.pdf"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Patent and Achievements 🏆 "),
  subtitle:
    "Patent, Achievements and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Use of EZH2 inhibition in muscular diseases",
      subtitle:
        "Korean Patent Application 10-2024-0096174",
      image: require("./assets/images/patent_logo.jpg"),
      imageAlt: "Patent Logo",
      footerLink: [
      ]
    },
    {
      title: "Young Scientist Program 2025 Fellowship",
      subtitle:
        "For outstanding PhD candidates and early career researchers from the Federation of Asian and Oceania Biochemists and Molecular Biologists",
      image: require("./assets/images/faobmb_logo.png"),
      imageAlt: "FAOBMB Logo",
      footerLink: [

      ]
    },

    {
      title: "1st place in Korea Clinical Datathon",
      subtitle: "Developed and validated a risk prediction model for a novel clinical sepsis phenotype",
      image: require("./assets/images/korea_clinical_datathon_logo.jpg"),
      imageAlt: "Korea Clinical Datathon 2019 Logo",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "ICGSK 2021",
      subtitle: "SnRNA-seq reveals key contributors in Duchenne muscular dystrophy",
      event_url: "https://www.youtube.com/watch?v=Eo8VkFqhqt8&ab_channel=EunYoungJeon",
      slides_url: "https://drive.google.com/file/d/1RvNLZLpdjk573EyVW5EHirrZa32EP8jd/view?usp=sharing"

    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-1087498667",
  email_address: "eyjeon@snu.ac.kr"
};

// Twitter Section

const twitterDetails = {
  userName: "EunYoungJeon2", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
