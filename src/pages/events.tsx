import EventsNavbar from "../components/events/events-navbar";
import EventsCard from "../components/events/events-card";
import "./events.css"

const EventsPage: React.FC = () => {
  return (
    <div>
      <EventsNavbar />
      <div className="content">
        <EventsCard imageSrc="./assets/placeholder1.jpg" imageAlt = "placeholder1.jpg" description="TEXT"/>
        <EventsCard imageSrc="./assets/placeholder2.jpg" imageAlt = "placeholder2.jpg" description="DESCRIPTION"/>
      </div>
    </div>
  );
};

export default EventsPage;