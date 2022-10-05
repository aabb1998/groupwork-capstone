import React from 'react';

const CalendarEvent = () => {
  return (
    <div
      className="event"
      style={{
        background: '#D09FE8',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '12px',
        width: '200px',
        marginRight: '20px',
      }}
    >
      <div className="icon"></div>
      <div className="event-details">
        <div className="font-bold">Marketing Course</div>
        <div className="text-sm">Software Project</div>
        <div className="font-bold">10:30pm - 11:00pm</div>
      </div>
    </div>
  );
};

export default CalendarEvent;
