import React from 'react';
import './App.css';
// import TimerFunc from './TimerFunc'; 
import TimerClass from './TimerClass';
import play from './images/play.png';
import pause from './images/Stop.png';

function App() {
  const [isStatus, setStatus] = React.useState(false);
  const onClickHandle = () => {
    setStatus(!isStatus)
  }

  return (
    <div className='Main'>
      <div className='content'>
        <img src={ isStatus ? pause : play } className='button' alt={ isStatus ? 'pause' : 'play' } onClick={onClickHandle} />
        {/* { isStatus && <TimerFunc /> } */}
        { isStatus && <TimerClass /> }
      </div>
    </div>
  )
}

export default App;