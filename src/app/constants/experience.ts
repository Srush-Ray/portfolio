export interface Details {
    company: string,
    title: string,
    year: string,
    qualities: string[],
    description: string,
}

const professional: Details[] = [
    {
        company: "Addepar",
        title: "Software Engineer 2",
        year: "July 2024 - Present",
        qualities: ["Web Development","JAVA", "Python", "AWS","React", "Javascript", "Typescript", "Leadership", "Mentor"],
        description: "Fullstack developer in Javascript, ReactJs, Java and Python helping in building fintech products to extract data for easy investment-portfolio analysis and management.",
    }
    ,{
    company: "Bajaj Finserv Health Ltd",
    title: "Software Development Engineer",
    year: "August 2022 - September 2024",
    qualities: ["Mobile and Web Development","NodeJs/NestJs", "React/NextJs", "React Native", "Javascript", "Typescript", "Leadership", "Mentor", "Manager"],
    description: "Led a team of 4 junior developers and 2 interns on Healthtech and Insurtech projects, handling planning, tech solutions, and full-stack development with ReactJs, NestJs/NodeJs, and MySQL. Implemented key features on web and app under tight deadlines, improved onboarding and catalogue management, and optimized performance by integrating ELK logging and tracking.",
},
{
    company: "Bajaj Finserv Health Ltd",
    title: "Associate Software Development Engineer",
    year: "August 2021 - September 2022",
    qualities: ["React", "React Native", "Javascript", "Interviews"],
    description: "Help build health-tech products providing access to preventive, personalized & affordable healthcare access. Built 3 end-to-end user and business-centric features - Lab Booking, Medicine Order, and RxUpload on app and web. Improved documentation, test coverage and code quality to reduce production bugs significantly. Assisted in the hiring process by interviewing interns.",
}
];

const internship: Details[] = [
    {
        company: "Web Development Intern",
        title: "Upcloud Technology",
        year: "September 2020 - May 2021",
        qualities: ["Team Management", "CSS", "HTML-HTML5", "Javascript", "ReactJs", "Leadership", "Mentor"],
        description: "Fullstack developer in Javascript, ReactJs, Java and Python helping in building fintech products to extract data for easy investment-portfolio analysis and management.",
    }
    ,{
    company: "Web Application Developer Intern",
    title: "Bajaj Auto Ltd",
    year: "January 2021 - February 2021",
    qualities: ["MongoDB","NodeJs","Angular","Express.js","MEAN stack"],
    description: "Internal HR organisational portal/tool. MEAN stack internal company portal to manage employee details, leaves, notices and other employee benefits.",
},
{
    company: "Android Developer Intern",
    title: "SoftEzi Solutions LLP",
    year: "June 2020 - July 2020",
    qualities: ["Android Development", "Android Design"],
    description: "Digital Solutions in form of android applications",
},{
    company: "Android Application Developer Intern",
    title: "Homedroid Technologies",
    year: "January 2020 - March 2020",
    qualities: ["Android","Android Development","Angular","Express.js","MEAN stack"],
    description: "Developed Android application for automation solution for low-cost high-end home security systems.",
},
];

const freelance: Details[] = [
    {
        company: "Graduhat",
        title: "Web Developer",
        year: "August 2021",
        qualities: ["React",],
        description: "Built UI for a website to predict colleges based on rank and exam details that ranked 3rd place in google search.",
    },
];

export const ExperienceDetails = {
    professional,
    internship,
    freelance
}

