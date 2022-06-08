import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";
import {timelineEvents} from "../data/timeline";

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
  timelineEvents.map((element, index) => {
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
