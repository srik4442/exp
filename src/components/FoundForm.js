import React, { useState } from 'react';
import './FoundForm.css'; // Import the CSS file

const FoundForm = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleButtonClick = () => {
    setShowOverlay(true);
    // Add any additional functionality when the button is clicked
  };

  return (
    <div className="card bg-success text-white">
      <div className="card-body">
        <h2 className="card-title">Report a Found Pet</h2>
        <button className="buttonStyle" onClick={handleButtonClick}>Report</button>
        {/* Found pet form fields */}
      </div>
      <div className={`overlay ${showOverlay ? 'visible' : ''}`} onClick={closeOverlay}>
        {/* Content for the full-page overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2 className="t1">Showing content for found pet</h2>
          {/* Add more content for the overlay */}
        </div>
      </div>
    </div>
  );
};

export default FoundForm;
