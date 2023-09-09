import './App.css';
import TimerManager from './TimerManager';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import Fingerprint from '@mui/icons-material/Fingerprint';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const teacher_timers_14 = [
  {title: "Get Ready", length: 1},
  {title: "Station One", length: 14},
  {title: "Transition", length: 1},
  {title: "Station Two", length: 14},
  {title: "Transition", length: 1},
  {title: "Station Three", length: 14},
  {title: "Transition", length: 1},
  {title: "Station Four", length: 14},
  {title: "Clean Up", length: 2},
]

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
  const [show14Timer, setShow14Timer] = useState(false);


  const displayOptions = () => {
    setShowButtonOptions(true);
    setShow12Timer(false);
    setShow13Timer(false);
    setShow14Timer(false);
  }

  const display12MinuteTimer = () => {
    setShowButtonOptions(false);
    setShow12Timer(true);
    setShow13Timer(false);
    setShow14Timer(false);
  }

  const display13MinuteTimer = () => {
    setShowButtonOptions(false);
    setShow12Timer(false);
    setShow13Timer(true);
    setShow14Timer(false);
  }

  const display14MinuteTimer = () => {
    setShowButtonOptions(false);
    setShow12Timer(false);
    setShow13Timer(false);
    setShow14Timer(true);
  }


  return (
    <div className="App">

      {/* Clock Options */}
      {showButtonOptions && <div>
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={display12MinuteTimer}>12 Minute</Button>
          <Button variant="contained" onClick={display13MinuteTimer}>13 Minute</Button>
          <Button variant="contained" onClick={display14MinuteTimer}>14 Minute</Button>
        </Stack>
      </div>}

      {/* Back Button */}
      {(show12Timer || show13Timer) && <div id="back-button">
        <IconButton size="large" onClick={displayOptions}>Back
          {/* <ArrowBackIcon color="primary" fontSize="large" /> */}
        </IconButton>
      </div>}

      {/* Timers */}
      {show12Timer && <TimerManager timers={teacher_timers_12}/>}
      {show13Timer && <TimerManager timers={teacher_timers_13}/>}
      {show14Timer && <TimerManager timers={teacher_timers_14}/>}
    </div>
  );
}

export default App;
