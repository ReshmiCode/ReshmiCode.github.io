import React, { useState, useEffect, useCallback } from "react";
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
  const [elements, setElements] = useState(dataExamples);

  const loadMore = () => {
    setElements([...elements, ...dataExamples]);
  };

  const addButton = () => (
    <Fab classes={{ root: "fab-button" }} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );

  const getTimelineElements = () =>
    elements.map((element) => (
      <VerticalTimelineElement {...element.props}>
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subtitle}
        </h4>
        <p>{element.content}</p>
      </VerticalTimelineElement>
    ));

  return (
    <section id="timeline" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Timeline</h3>
              <p className="subtitle-a">
                Incididunt nostrud id aute culpa excepteur pariatur consequat
                elit culpa nulla enim anim incididunt.
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <VerticalTimeline>
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

const dataExamples = [
  {
    props: {
      date: "2011 - present",
      className: "vertical-timeline-element--work",
      contentStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(33, 150, 243)" },
      iconStyle: { background: "rgb(33, 150, 243)", color: "#fff" },
      icon: <WorkIcon />,
    },
    title: "Creative Director",
    subtitle: "Miami, FL",
    content:
      "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  },
  {
    props: {
      date: "2010 - 2011",
      className: "vertical-timeline-element--education",
      contentStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      contentArrowStyle: { borderRight: "7px solid  rgb(233, 30, 99)" },
      iconStyle: { background: "rgb(233, 30, 99)", color: "#fff" },
      icon: <SchoolIcon />,
    },
    title: "Content Marketing for Web, Mobile and Social Media",
    subtitle: "Online Course",
    content: "Strategy, Social Media",
  },
];
