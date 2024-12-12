import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown';
import DateField from './components/datefield';
import ScreeningQuestion from './pages/screeningquestion';

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
          description="Description"
          placeholder="Pick a date"
        />
        <DateField
          label="Multi Date"
          type="multi"
          onChange={(dates) => setSelectedRange(dates as [Date, Date])}
          description="Description"
          placeholder="Pick a range"
        />

        <ScreeningQuestion>
          
        </ScreeningQuestion>
      </div>
    </div>
  );
}

export default App;
