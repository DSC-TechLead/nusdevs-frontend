import React, { useState } from 'react';

interface DateFieldProps {
  label: string;
  description: string;
  type: 'single' | 'multi'; // 'single' for selecting a single date, 'multi' for multiple dates
  onChange: (dates: Date | [Date, Date] | null) => void; // Callback for when the date(s) change
  startDate?: Date | null; // Start date for range (optional)
  endDate?: Date | null; // End date for range (optional)
  placeholder?: string;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  description,
  type,
  onChange,
  startDate,
  endDate,
  placeholder = 'Select Date',
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(startDate || null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(endDate || null);
  
  // Separate focus states for start and end date
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  // Handle date change for single date or range
  const handleDateChange = (date: Date | [Date, Date] | null) => {
    onChange(date);
    if (Array.isArray(date)) {
      setSelectedStartDate(date[0]);
      setSelectedEndDate(date[1]);
    } else {
      setSelectedStartDate(date);
    }
  };

  // Track focus for start and end date inputs separately
  const handleStartFocus = () => {
    setIsStartDateOpen(true); // Set to true when start date input is focused
  };

  const handleStartBlur = () => {
    setIsStartDateOpen(false); // Set to false when start date input loses focus
  };

  const handleEndFocus = () => {
    setIsEndDateOpen(true); // Set to true when end date input is focused
  };

  const handleEndBlur = () => {
    setIsEndDateOpen(false); // Set to false when end date input loses focus
  };

  return (
    <div className="date-field w-[600px] p-6">
      <h2 className="text-left font-bold">{label}</h2>
      <p className="text-left text-gray-500 mb-2.5">{description}</p>
      <div>
        {type === 'single' ? (
          <div className="flex flex-col space-y-2">
            <input
              type="date"
              value={selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : ''}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
              placeholder={placeholder}
              onFocus={handleStartFocus} // Focus handler for single date input
              onBlur={handleStartBlur}   // Blur handler for single date input
              className={`w-full text-left border p-2 rounded-md ${
                isStartDateOpen ? 'border-orange-600' : 'border-gray-300'
              } focus:outline-none focus:border-orange-600 hover:border-orange-600`}
            />
          </div>
        ) : (
          // Multi date range
          <div className="flex space-x-2">
            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="date"
                value={selectedStartDate ? selectedStartDate.toISOString().split('T')[0] : ''}
                onChange={(e) => handleDateChange([new Date(e.target.value), selectedEndDate!])}
                placeholder="Start Date"
                onFocus={handleStartFocus} // Focus handler for start date input
                onBlur={handleStartBlur}   // Blur handler for start date input
                className={`w-full text-left border p-2 rounded-md ${
                  isStartDateOpen ? 'border-orange-600' : 'border-gray-300'
                } focus:outline-none focus:border-orange-600 hover:border-orange-600`}
              />
            </div>
            <p className="flex"> - </p>
            <div className="flex flex-col space-y-2 w-1/2">
              <input
                type="date"
                value={selectedEndDate ? selectedEndDate.toISOString().split('T')[0] : ''}
                onChange={(e) => handleDateChange([selectedStartDate!, new Date(e.target.value)])}
                placeholder="End Date"
                onFocus={handleEndFocus} // Focus handler for end date input
                onBlur={handleEndBlur}   // Blur handler for end date input
                className={`w-full text-left border p-2 rounded-md ${
                  isEndDateOpen ? 'border-orange-600' : 'border-gray-300'
                } focus:outline-none focus:border-orange-600 hover:border-orange-600`}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateField;
