import { Key, useState } from 'react';
import { Card, CardBody, Button, Avatar, Tooltip, Tabs, Tab } from '@heroui/react';


export const Calendar = () => {
  const [view, setView] = useState<string>("day");
  const [currentDate, setCurrentDate] = useState<Date>(new Date(2025, 9, 12)); // Oct 12, 2025
  
  // Sample data for events
  const [events, setEvents] = useState([
    {
      id: 1, 
      title: 'Chairman meeting',
      startTime: '8:00',
      duration: '2h 45m',
      color: 'bg-red-100',
      borderColor: 'border-red-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    {
      id: 1, 
      title: 'Chairman meeting',
      startTime: '8:00',
      duration: '2h 45m',
      color: 'bg-red-100',
      borderColor: 'border-red-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    {
      id: 2, 
      title: 'Academic FA',
      startTime: '10:30',
      duration: '1h 00m',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    {
      id: 3, 
      title: 'BOS meeting',
      startTime: '13:30',
      duration: '1h 00m',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    {
      id: 4, 
      title: 'FCE Exam',
      startTime: '15:30',
      duration: '0h 30m',
      color: 'bg-amber-100',
      borderColor: 'border-amber-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    {
      id: 5, 
      title: 'Mentoring',
      startTime: '16:30',
      duration: '1h 00m',
      color: 'bg-green-100',
      borderColor: 'border-green-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
    // Sample events for other days
    {
      id: 6, 
      title: 'Team meeting',
      startTime: '9:00',
      duration: '1h 00m',
      color: 'bg-blue-100',
      borderColor: 'border-blue-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 13)
    },
    {
      id: 7, 
      title: 'Client call',
      startTime: '14:00',
      duration: '0h 45m',
      color: 'bg-purple-100',
      borderColor: 'border-purple-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 14)
    },
    {
      id: 8, 
      title: 'Chairman meeting',
      startTime: '8:00',
      duration: '2h 45m',
      color: 'bg-red-100',
      borderColor: 'border-red-400',
      person: "https://th.bing.com/th/id/OIP.Wo-4WgoCuXB5TsQ6ZgV78AHaLF?rs=1&pid=ImgDetMain",
      date: new Date(2025, 9, 12)
    },
  ]);

  // Navigation functions
  const goToPrevious = () => {
    const newDate = new Date(currentDate);
    switch(view) {
      case "day":
        newDate.setDate(newDate.getDate() - 1);
        break;
      case "week":
        newDate.setDate(newDate.getDate() - 7);
        break;
      case "month":
        newDate.setMonth(newDate.getMonth() - 1);
        break;
      case "year":
        newDate.setFullYear(newDate.getFullYear() - 1);
        break;
    }
    setCurrentDate(newDate);
  };

  const goToNext = () => {
    const newDate = new Date(currentDate);
    switch(view) {
      case "day":
        newDate.setDate(newDate.getDate() + 1);
        break;
      case "week":
        newDate.setDate(newDate.getDate() + 7);
        break;
      case "month":
        newDate.setMonth(newDate.getMonth() + 1);
        break;
      case "year":
        newDate.setFullYear(newDate.getFullYear() + 1);
        break;
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Format date based on current view
  const formatDateHeader = () => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    
    switch(view) {
      case "day":
        return currentDate.toLocaleDateString('en-US', options);
      case "week":
        const weekStart = new Date(currentDate);
        weekStart.setDate(currentDate.getDate() - currentDate.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        return `${weekStart.toLocaleDateString('en-US', {day: 'numeric', month: 'short'})} - ${weekEnd.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}`;
      case "month":
        return currentDate.toLocaleDateString('en-US', {month: 'long', year: 'numeric'});
      case "year":
        return currentDate.getFullYear().toString();
      default:
        return currentDate.toLocaleDateString('en-US', options);
    }
  };

  // Generate time slots from 8:00 to 17:00
  const timeSlots: string[] = [];
  for (let hour = 8; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
  }

  // Position event based on start time
  const calculateEventPosition = (startTime: string): number => {
    const [hours, minutes] = startTime.split(':').map(Number);
    // Calculate position as percentage of day (8:00 - 17:00)
    return ((hours - 8) + (minutes / 60)) * (100 / 9);
  };

  // Calculate event width based on duration
  const calculateEventWidth = (duration: string): number => {
    const match = duration.match(/(\d+)h\s*(\d+)m/);
    if (!match) return 0;
    
    const hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const totalHours = hours + (minutes / 60);
    
    // Width as percentage of day
    return (totalHours / 9) * 100;
  };

  // Get days of the week for week view
  const getDaysOfWeek = (): Date[] => {
    const days: Date[] = [];
    const day = new Date(currentDate);
    day.setDate(day.getDate() - day.getDay()); // Start with Sunday
    
    for (let i = 0; i < 7; i++) {
      days.push(new Date(day));
      day.setDate(day.getDate() + 1);
    }
    return days;
  };

  // Get days of the month for month view
  const getDaysOfMonth = () => {
    const days: { date: Date; currentMonth: boolean }[] = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Get first day of month
    const firstDay = new Date(year, month, 1);
    // Get last day of month
    const lastDay = new Date(year, month + 1, 0);
    
    // Fill in days from previous month to start from Sunday
    const startPadding = firstDay.getDay();
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    
    for (let i = startPadding - 1; i >= 0; i--) {
      const day = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({ date: day, currentMonth: false });
    }
    
    // Fill in days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(year, month, i);
      days.push({ date: day, currentMonth: true });
    }
    
    // Fill in days from next month to complete the grid (6 rows x 7 days)
    const endPadding = 42 - days.length;
    for (let i = 1; i <= endPadding; i++) {
      const day = new Date(year, month + 1, i);
      days.push({ date: day, currentMonth: false });
    }
    
    return days;
  };

  // Get months for year view
  const getMonthsOfYear = (): Date[] => {
    const months: Date[] = [];
    const year = currentDate.getFullYear();
    
    for (let i = 0; i < 12; i++) {
      months.push(new Date(year, i, 1));
    }
    return months;
  };

  // Filter events for the current date (day view)
  const filterEventsForDay = (date: Date) => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    );
  };

  // Count events for a specific date (for month/year views)
  const countEventsForDate = (date: Date): number => {
    return events.filter(event => 
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear()
    ).length;
  };

  // Count events for a specific month (for year view)
  const countEventsForMonth = (month: Date): number => {
    return events.filter(event => 
      event.date.getMonth() === month.getMonth() &&
      event.date.getFullYear() === month.getFullYear()
    ).length;
  };

  // Handle view change with proper type conversion
  const handleViewChange = (key: Key) => {
    setView(key.toString());
  };

  // Render day view
  const renderDayView = () => {
    const filteredEvents = filterEventsForDay(currentDate);
    
    return (
      <div className="relative max-w-[90%] h-[500px]">
        {/* Time labels */}
        <div className="flex border-t border-gray-200">
          {timeSlots.map((time, index) => (
            <div key={index} className="flex-1 text-center text-xs text-gray-500 py-1">
              {time}
            </div>
          ))}
        </div>
        
        {/* Grid */}
        <div className="relative h-full border-t border-gray-200">
          {/* Vertical time lines */}
          <div className="absolute inset-0 flex">
            {timeSlots.map((_, index) => (
              <div key={index} className="flex-1 border-r border-gray-200"></div>
            ))}
          </div>
          
          {/* Events */}
          {filteredEvents.map((event, idx) => {
            const leftPosition = calculateEventPosition(event.startTime);
            const width = calculateEventWidth(event.duration);
            
            return (
              <Tooltip key={event.id} content={`${event.title} (${event.duration})`}>
                <div 
                  className={`absolute rounded-md px-2 py-1 border border-l-4 ${event.color} ${event.borderColor}`}
                  style={{
                    left: `${leftPosition}%`,
                    width: `${width}%`,
                    top: `${idx * 60}px`,
                    maxWidth: '200px'
                  }}
                >
                  <div className="flex justify-between items-center gap-1">
                    <div className='flex flex-col truncate'>
                      <div className="font-medium text-[16px] truncate">{event.title}</div>
                      <div className="text-[14px] text-gray-600">{event.duration}</div>
                    </div>
                    <div className='w-[30px]'>
                    <Avatar 
                      className='w-[30px] h-[30px] outline outline-1 outline-white'
                      src={event.person} 
                    />
                    </div>
                    
                  </div>
                </div>
              </Tooltip>
            );
          })}
        </div>
      </div>
    );
  };

  // Render week view
  const renderWeekView = () => {
    const days = getDaysOfWeek();
    
    return (
      <div className="w-full">
        {/* Days header */}
        <div className="grid grid-cols-7 border-b border-gray-200">
          {days.map((day, index) => (
            <div key={index} className="text-center py-2">
              <div className="text-xs text-gray-500">{day.toLocaleDateString('en-US', {weekday: 'short'})}</div>
              <div className={`text-sm font-medium ${day.getDate() === new Date().getDate() && day.getMonth() === new Date().getMonth() ? 'text-blue-600' : ''}`}>
                {day.getDate()}
              </div>
            </div>
          ))}
        </div>
        
        {/* Time grid */}
        <div className="grid grid-cols-7 h-80 relative">
          {days.map((day, dayIndex) => {
            const dayEvents = filterEventsForDay(day);
            
            return (
              <div key={dayIndex} className="border-r border-gray-200 relative">
                {dayEvents.map((event, eventIndex) => (
                  <Tooltip key={event.id} content={`${event.title} (${event.duration})`}>
                    <div 
                      className={`absolute rounded-md px-2 py-0 border border-l-2 ${event.color} ${event.borderColor} left-1 right-1`}
                      style={{
                        top: `${calculateEventPosition(event.startTime) * 0.94}%`,
                        height: `${Math.max(calculateEventWidth(event.duration) * 0.8, 8)}%`
                      }}
                    >
                      <div className="flex justify-between items-center gap-1">
                        <div className="flex flex-col truncate">
                          <div className="font-medium text-[9px] truncate">{event.title}</div>
                          <div className="text-[8px] text-gray-600">{event.startTime}</div>
                        </div>
                        <div className='w-[16px]'>
                        <Avatar 
                          className='w-[16px] h-[16px] outline outline-1 outline-white'
                          src={event.person} 
                          size="sm"
                        />
                        </div>
                      </div>
                    </div>
                  </Tooltip>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render month view
  const renderMonthView = () => {
    const days = getDaysOfMonth();
    
    return (
      <div className="w-full">
        {/* Days of week header */}
        <div className="grid grid-cols-7 text-center py-2 border-b border-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="grid grid-cols-7 grid-rows-6 h-80">
          {days.map((day, index) => {
            const eventCount = countEventsForDate(day.date);
            const isToday = day.date.getDate() === new Date().getDate() && 
                           day.date.getMonth() === new Date().getMonth() && 
                           day.date.getFullYear() === new Date().getFullYear();
            
            return (
              <div 
                key={index} 
                className={`border border-gray-200 p-1 ${day.currentMonth ? '' : 'bg-gray-50'}`}
              >
                <div className={`text-xs ${isToday ? 'bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center' : ''}`}>
                  {day.date.getDate()}
                </div>
                
                {eventCount > 0 && (
                  <div className="mt-1">
                    {eventCount === 1 && (
                      <div className="text-xs truncate bg-blue-100 rounded px-1 py-0.5 text-blue-800">
                        {events.find(e => 
                          e.date.getDate() === day.date.getDate() && 
                          e.date.getMonth() === day.date.getMonth() && 
                          e.date.getFullYear() === day.date.getFullYear()
                        )?.title}
                      </div>
                    )}
                    {eventCount > 1 && (
                      <div className="text-xs bg-blue-100 rounded px-1 py-0.5 text-blue-800">
                        {eventCount} events
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render year view
  const renderYearView = () => {
    const months = getMonthsOfYear();
    
    return (
      <div className="grid grid-cols-4 gap-4 h-80">
        {months.map((month, index) => {
          const eventCount = countEventsForMonth(month);
          
          return (
            <Card key={index} className="h-full">
              <CardBody className="p-2">
                <div className="text-center font-medium">
                  {month.toLocaleDateString('en-US', {month: 'long'})}
                </div>
                <div className="text-xs text-center mt-2">
                  {eventCount > 0 ? `${eventCount} events` : 'No events'}
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="">
      <CardBody className="p-0">
        {/* Calendar header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Button isIconOnly variant="light" size="sm" onClick={goToPrevious}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            <h2 className="text-lg font-medium">{formatDateHeader()}</h2>
            <Button isIconOnly variant="light" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">8:00 - 17:00</span>
            <Button size="sm" variant="flat" onClick={goToToday}>Now</Button>
            <Button isIconOnly variant="light" size="sm" onClick={goToNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
        
        {/* View selector */}
        <div className="mb-4">
          <Tabs 
            selectedKey={view} 
            onSelectionChange={handleViewChange}
            variant="underlined"
            classNames={{
              tab: "px-4 py-2"
            }}
          >
            <Tab key="day" title="Day" />
            <Tab key="week" title="Week" />
            <Tab key="month" title="Month" />
            <Tab key="year" title="Year" />
          </Tabs>
        </div>
        
        {/* Calendar body based on view */}
        {view === "day" && renderDayView()}
        {view === "week" && renderWeekView()}
        {view === "month" && renderMonthView()}
        {view === "year" && renderYearView()}
      </CardBody>
    </Card>
  );
};

export default Calendar;