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
        qualities: ["Web Development", "Java", "Python", "AWS", "React", "JavaScript", "TypeScript", "Agentic AI", "Databricks", "Leadership", "Mentor"],
        description: "Fullstack engineer building high-impact fintech products for investment portfolio analysis and management. Developed new React UI applications and client onboarding features, while integrating AI Agents and data extraction capabilities for effective analytics and interactive dashboarding.",
    },
    {
        company: "Bajaj Finserv Health Ltd",
        title: "Software Development Engineer",
        year: "August 2022 - September 2024",
        qualities: ["Mobile and Web Development", "NodeJS / NestJS", "React / NextJS", "React Native", "JavaScript", "TypeScript", "Leadership", "Mentor"],
        description: "Led a team of 4 junior developers and 2 interns across Healthtech and Insurtech initiatives, driving planning, technical solutions, and full-stack development with React, NestJS/NodeJS, and MySQL. Delivered critical web and mobile features under tight deadlines, streamlined user onboarding and catalogue management, and optimized system observability and performance with ELK logging.",
    },
    {
        company: "Bajaj Finserv Health Ltd",
        title: "Associate Software Development Engineer",
        year: "August 2021 - September 2022",
        qualities: ["React", "React Native", "JavaScript", "Technical Interviewing"],
        description: "Contributed to core health-tech products expanding access to preventive and personalized healthcare. Built 3 end-to-end features—Lab Booking, Medicine Order, and RxUpload—across mobile and web platforms. Significantly reduced production bugs by improving test coverage and code quality standards, and assisted in hiring by interviewing candidates.",
    }
];

const internship: Details[] = [
    {
        company: "Web Development Intern",
        title: "Upcloud Technology",
        year: "September 2020 - May 2021",
        qualities: ["Team Management", "CSS", "HTML5", "JavaScript", "ReactJS", "Leadership"],
        description: "Developed and maintained web applications using JavaScript, ReactJS, HTML5, and CSS. Collaborated with design and dev teams to construct responsive UI components and enhance user experience.",
    },
    {
        company: "Web Application Developer Intern",
        title: "Bajaj Auto Ltd",
        year: "January 2021 - February 2021",
        qualities: ["MongoDB", "NodeJS", "Angular", "Express.js", "MEAN Stack"],
        description: "Built an internal HR portal on the MEAN stack to streamline management of employee details, leave applications, notices, and company benefits.",
    },
    {
        company: "Android Developer Intern",
        title: "SoftEzi Solutions LLP",
        year: "June 2020 - July 2020",
        qualities: ["Android Development", "Mobile UI Design"],
        description: "Developed digital solutions and responsive Android application features focused on seamless user experience.",
    },
    {
        company: "Android Application Developer Intern",
        title: "Homedroid Technologies",
        year: "January 2020 - March 2020",
        qualities: ["Android", "Android Development", "Angular", "Express.js", "MEAN Stack"],
        description: "Engineered an Android application for automated home security solutions, integrating low-cost hardware with smart mobile controls.",
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

