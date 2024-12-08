import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown';
import DateField from './components/datefield';

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedRange, setSelectedRange] = useState<[Date, Date] | null>(null);

  return (
    <div className="App">
      <Dropdown
        label='Dropdown'
        description='Description'
        placeholder='PlaceHolder'
      />
      <div className="space-y-4">
      <DateField
        label="Single Date"
        type="single"
        onChange={(date) => setSelectedDate(date as Date)}
        description="description"
        placeholder="Pick a date"
      />
      <DateField
        label="Multi Date"
        type="multi"
        onChange={(dates) => setSelectedRange(dates as [Date, Date])}
        description="description"
        placeholder="Pick a range"
      />
    </div>
    </div>
  );
}

export default App;
