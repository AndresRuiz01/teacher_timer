import './App.css';
import TimerManager from './TimerManager';
import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const teacher_timers_13 = [
  {title: "Get Ready", length: 1},
  {title: "Station One", length: 13},
  {title: "Transition", length: 1},
  {title: "Station Two", length: 13},
  {title: "Transition", length: 1},
  {title: "Station Three", length: 13},
  {title: "Transition", length: 1},
  {title: "Station Four", length: 13},
  {title: "Clean Up", length: 2},
]

const teacher_timers_12 = [
  {title: "Get Ready", length: 1},
  {title: "Station One", length: 12},
  {title: "Transition", length: 1},
  {title: "Station Two", length: 12},
  {title: "Transition", length: 1},
  {title: "Station Three", length: 12},
  {title: "Transition", length: 1},
  {title: "Station Four", length: 12},
  {title: "Clean Up", length: 2},
]

function App() {
  const [showButtonOptions, setShowButtonOptions] = useState(true);
  const [show12Timer, setShow12Timer] = useState(false);
  const [show13Timer, setShow13Timer] = useState(false);

  const display12MinuteTimer = () => {
    setShowButtonOptions(false);
    setShow12Timer(true);
    setShow13Timer(false);
  }

  const display13MinuteTimer = () => {
    setShowButtonOptions(false);
    setShow12Timer(false);
    setShow13Timer(true);
  }

  return (
    <div className="App">
      {showButtonOptions && <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={display12MinuteTimer}>12 Minute</Button>
          <Button variant="contained" onClick={display13MinuteTimer}>13 Minute</Button>
        </Stack>
      </div>}
      {show12Timer && <TimerManager timers={teacher_timers_12}/>}
      {show13Timer && <TimerManager timers={teacher_timers_13}/>}
    </div>
  );
}

export default App;
