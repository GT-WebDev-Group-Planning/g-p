import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import GroupComponent from '../../components/GroupComponent/GroupComponent';
import './group.css'

function Group() {
  const location = useLocation();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const eventsParam = searchParams.get("events");

    if (eventsParam) {
      try {
        const decodedEventsParam = decodeURIComponent(eventsParam);
        const parsedEvents = JSON.parse(decodedEventsParam);
        setEvents(parsedEvents);
      } catch (error) {
        console.error("Error parsing events data:", error);
      }
    }
  }, [location.search]);

  return (
    <div className="Group">
      <Navbar />
      <div className="top">
        <input type="text" placeholder="Search Groups"></input>
        <div>
        <button className="group-buttons">Join</button>
        <button className="group-buttons">Create</button>
        </div>
      </div>
      <div className="gridContainer">
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
        <GroupComponent name="Study Buddies" description="Study group made for 2200"/>
      </div>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.start && event.start.dateTime} - {event.summary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Group;
