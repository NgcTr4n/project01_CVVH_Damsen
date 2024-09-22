import React from 'react';
import './control.css'
const Control = () => {
    return (
        <div className='control'>
              <div className="icon_minus">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6 12L18 12" stroke="#EC008C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
              <div className="icon_line">

              </div>
              <div className="icon_plus">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 12H20M12 4V20" stroke="#EC008C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
            </div>
    );
};

export default Control;