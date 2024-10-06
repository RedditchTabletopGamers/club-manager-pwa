import React, { useEffect, useState } from 'react';

const MeetingSelector: React.FC = () => {
  const [tuesdayDates, setTuesdayDates] = useState<string[]>([]); // State to hold the Tuesday dates

  function getOrdinalSuffix(day: number): string {
    // Handle special cases for 11, 12, and 13
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  
  // Function to format the date with day and month
  function formatDateWithSuffix(date: Date): string {
    const day: number = date.getDate(); // Get the day of the month
    const month: string = date.toLocaleString('default', { month: 'long' }); // Get the full month name
    const suffix: string = getOrdinalSuffix(day); // Get the suffix for the day
    
    return `${day}${suffix} ${month}`; // Combine day with suffix and month
  }

  // Function to calculate last Tuesdays
  const getLastTuesdays = (): string[] => {
    const dates: string[] = [];
    const today = new Date();
    
    // Get the date of last Tuesday
    const lastTuesday = new Date(today);
    lastTuesday.setDate(today.getDate() - (today.getDay() + 5) % 7 + 1); // Adjust to last Tuesday

    // Loop to get Tuesdays for the last two months
    for (let i = 0; i < 9; i++) {
      const tuesday = new Date(lastTuesday);
      tuesday.setDate(lastTuesday.getDate() - i * 7); // Get every Tuesday back

      const formattedDate = formatDateWithSuffix(tuesday);

      dates.push(formattedDate); // Add to dates in a readable format
    }

    return dates;
  };

  // useEffect to populate dates when component mounts
  useEffect(() => {
    const dates = getLastTuesdays();
    setTuesdayDates(dates);
  }, []);

  return (
    <div>
      <select id="meeting-dropdown">
        {tuesdayDates.map((date, index) => (
          <option key={index} value={date}>{date}</option>
        ))}
      </select>
    </div>
  );
};

export default MeetingSelector;