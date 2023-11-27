import React, { useState, useEffect } from 'react';
import CalendarSelectWindow from "./CalendarSelectWindow"
import { useLocation } from 'react-router-dom';

function CalendarSelect({ userEmail, setUserEmail }) {

  return (
    <div className="CalendarSelect">
      <CalendarSelectWindow></CalendarSelectWindow>
    </div>
  );
}

export default CalendarSelect;
