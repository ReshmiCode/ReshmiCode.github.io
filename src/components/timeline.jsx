import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

const Timeline = () => {
  const [elemCount, setElemCount] = useState(2);

  const loadMore = () => {
    setElemCount((elem) => elem + 2);
  };

  const addButton = () => (
    <Fab classes={{ root: "fab-button" }} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );

  const getTimelineElements = () =>
    dataExamples.map((element, index) => {
      if (index < elemCount)
        return (
          <VerticalTimelineElement {...element.props}>
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {element.subtitle}
            </h4>
            <p>{element.content}</p>
          </VerticalTimelineElement>
        );
      else return;
    });

  return (
    <section id="timeline" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Timeline</h3>
              <p className="subtitle-a">
                Here is a timeline of some of my main accomplishments and
                milestones of my journey through CS.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <VerticalTimeline className="vertical-timeline-custom-line">
              {getTimelineElements()}
              <VerticalTimelineElement
                iconOnClick={loadMore}
                iconClassName="vertical-timeline-element-icon--button"
                icon={addButton()}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

const eventTypes = {
  work: {
    className: "vertical-timeline-element--work",
    contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
    iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
    icon: <WorkIcon />,
  },
  school: {
    className: "vertical-timeline-element--education",
    contentStyle: { background: "#8537d4", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #8537d4" },
    iconStyle: { background: "#8537d4", color: "#fff" },
    icon: <SchoolIcon />,
  },
  personal: {
    className: "vertical-timeline-element--personal",
    contentStyle: { background: "#14b5b5", color: "#fff" },
    contentArrowStyle: { borderRight: "7px solid #14b5b5" },
    iconStyle: { background: "#14b5b5", color: "#fff" },
    icon: <StarIcon />,
  },
};

const dataExamples = [
  {
    props: {
      date: "January 2022 - current",
      ...eventTypes.work,
    },
    subtitle: "Software Development Intern at Motio",
    content:
      "I pull off available tickets as any regular dev during this internship. The product is a version control for BI platforms which is really interesting to learn how it works.",
  },
  {
    props: {
      date: "December 2021 - current",
      ...eventTypes.school,
    },
    subtitle: "ACM Co-VP",
    content:
      "Out of 90+ submissions, we placed first in HackDFW, our first in-person hackathon since covid started!",
  },
  {
    props: {
      date: "October 2021",
      ...eventTypes.personal,
    },
    subtitle: "HackDFW 1st Place and Sponsor Prize Winner",
    content:
      "Out of 90+ submissions, we placed first in HackDFW, our first in-person hackathon since covid started!",
  },
  {
    props: {
      date: "August 2021 - December 2021",
      ...eventTypes.work,
    },
    // title: "can put something here",
    subtitle: "Backend Development Intern at Broadleaf",
    content:
      "I started working part-time at Broadleaf, working on their microservices in their eCommerce platform. It was the first time I got tickets off a backlog like what I'd expect in full-time work.",
  },
  {
    props: {
      date: "May 2021 - August 2021",
      ...eventTypes.work,
    },
    subtitle: "Software Development Intern at Intuit",
    content:
      "I wanted to get out of Texas this summer and I was able to get an offer in California which unfortunately went virtual due to the pandemic. I am learning a lot though as I am working on creating a CLI using NodeJS and GraphQL. I was also able to reconnect with GWC through Intuit's program by being on an Early Careers panel and holding a workshop on resumes and LinkedIn.",
  },
  {
    props: {
      date: "May 2021",
      ...eventTypes.school,
    },
    subtitle: "Graduated",
    content:
      "I graduated with my Bachelor's of Science in Software Engineering! I graduated with Collegium V Honors, Summa Cum Laude, and a departmental Certificate of Excellence. Through the fast track program, I only need one more year to get my Masters.",
  },
  {
    props: {
      date: "Dec 2020 - Dec 2021",
      ...eventTypes.school,
    },
    subtitle: "ACM Director of Education",
    content:
      "I started as an Education Officer in ACM in January of 2020, but I was selected to be the Director of Education. I oversaw the Mentor Program, the pilot of a Technical Interview Prep Program, and the technical workshops of the club.",
  },
  {
    props: {
      date: "Fall 2020",
      ...eventTypes.school,
    },
    subtitle: "GHC + We20",
    content:
      "Through Bloomberg, I was able to attend the Grace Hopper Conference and through WMWE, I was able to attend the We Conference. This was my first time at both and while it was virtual, I still found many of the workshops/talks helpful.",
  },
  {
    props: {
      date: "October 2020",
      ...eventTypes.school,
    },
    subtitle: "ACM Hacktoberfest",
    content:
      "I have always wanted to organize events, but did not want to organize hackathons as I wanted to participate in them too much. Our club decided to host a Hacktoberfest event and I helped with logistics. By the day of the event, we had 30 different events and over 400 registrations.",
  },
  {
    props: {
      date: "Summer 2020",
      ...eventTypes.work,
    },
    subtitle: "Summer in Quarantine",
    content:
      "This summer my original internship with PwC was shortened to two weeks due to COVID. Luckily, I was able to get another virtual internship at Infosys where I worked on a full-stack project. I was accepted to be an MLH Fellow (only 5% acceptance rate) but I turned it down for Infosys whose timeline allowed me to pursue my other commitments. I still participated in the PwC program and learned much about their company. I also won 6 hackathons this summer!",
  },
  {
    props: {
      date: "Summer 2020",
      ...eventTypes.personal,
    },
    subtitle: "RTC Cohort Leader",
    content:
      "Due to quarantine, Rewriting the Code, where I had been a fellow, decided to start up summer cohorts. I applied and became a cohort leader. Our cohort hosted weekly events over the summer and we ended up winning the most active cohort!",
  },
  {
    props: {
      date: "Summer 2019",
      ...eventTypes.work,
    },
    subtitle: "Fan Guru QA Intern",
    content:
      "My first internship was in a Quality Assurance role. I wrote automated tests for the company and performed manual QA. I was asked to stay on part-time and still continue to work with them.",
  },
  {
    props: {
      date: "Feb 2019",
      ...eventTypes.personal,
    },
    subtitle: "First Hackathon Win",
    content:
      "My first hackathon win was a sponsor prize at HackDFW. It was followed by HackUTD in which we got third overall which was a huge surprise and fueled our passion for hackathons!",
  },
  {
    props: {
      date: "Aug 2018 - current",
      ...eventTypes.school,
    },
    subtitle: "Women Mentoring Women in Engineering",
    content:
      "I first started as a mentee freshman year but then became a Mentoring Team Manager and then Treasurer.",
  },
  {
    props: {
      date: "Fall 2018",
      ...eventTypes.school,
    },
    subtitle: "ACM Projects",
    content:
      "I was accepted into ACM Projects, with an acceptance rate of under 10% that semester. I worked in a group of 5 to build an Android app. We ended up winning that semester’s competition by our pitch to a panel of industry judges.",
  },
  {
    props: {
      date: "Aug 2018",
      ...eventTypes.school,
    },
    subtitle: "Started Software Engineering at UTD",
    content:
      "I decided to go to UTD as I received a huge scholarship. Even though I got accepted into more prestigious schools, I never regret the choice of being able to graduate debt free. In fact, adding on my external scholarships, I barely paid for college.",
  },
  {
    props: {
      date: "Jul 2016 - Jun 2018",
      ...eventTypes.work,
    },
    subtitle: "Stamford Government Center Intern",
    content:
      "My first work experience included converting regular PDFs on a platform to let users fill and submit forms online. I also fixed broken links and misspellings on our city’s site. I started as just a summer intern but was asked to continue during the school year.",
  },
  {
    props: {
      date: "Feb 2017 - current",
      ...eventTypes.personal,
    },
    subtitle: "Random Hacks of Kindness CS Mentor",
    content:
      "I started volunteering with RHoK by mentoring young students through their first app in a mini hackathon setting. When I moved to Texas I couldn’t continue, but during quarantine I have been able to volunteer during their virtual events.",
  },
  {
    props: {
      date: "Feb 2018",
      ...eventTypes.personal,
    },
    subtitle: "Aspirations in CS Award",
    content:
      "I was a local receipt of the National Center for Women and Information Technology Aspirations in CS award. The next year I was also a national honorable mention.",
  },
  {
    props: {
      date: "Sep 2016 - Jun 2018",
      ...eventTypes.school,
    },
    subtitle: "Founded Girls Who Code Section",
    content:
      "One of my friends and I started a section of Girls Who Code at my high school. We wanted to inspire more girls to take the CS courses offered at our school.",
  },
  {
    props: {
      date: "Aug 2015 - Jun 2016",
      ...eventTypes.school,
    },
    subtitle: "Took AP Computer Science A",
    content:
      "My first experience in CS. This class is what inspired me to pursue it further and I have taken a CS class every year since. I also later TAed for this class.",
  },
];
