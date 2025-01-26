import React from "react";
import Event from "./components/Event";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <NavigationBar />

      <div className="content">
        <p>
          Changing our city, one tree at a time.
        </p>

        <p>
          Since 1994, Our City Forest has been the leading nonprofit in Silicon Valley for urban forestry and environmental education.
          We believe in the POWER OF TREES to transform homes, communities and cities and the POWER OF PEOPLE to help us achieve this needed transformation.
          Help us continue to grow by donating or by becoming a sustaining member.
        </p>

        <h4>Upcoming events near Berkeley, CA</h4>

        <div className="events-list">
          <Event
            dateTime={"2024-06-23T10:48:07"}
            title={"City Planting Day"}
            description={
              "Join us for a day of planting trees in the city."
            }
          />

          <Event
            dateTime={"2024-07-02T09:12:00"}
            title={"Nursery Tour"}
            description={
              "Take a tour of our nursery and learn about the trees we grow."
            }
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
