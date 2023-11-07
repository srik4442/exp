import React, { useState } from 'react';
import './LostForm.css'; // Import the CSS file

const LostForm = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleButtonClick = () => {
    setShowOverlay(true);
    // Add any additional functionality when the button is clicked
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Report a Lost Pet</h2>
        <button className="button" onClick={handleButtonClick}>Report</button>
        {/* Lost pet form fields */}
      </div>
      <div className={`overlay ${showOverlay ? 'visible' : ''}`} onClick={closeOverlay}>
        {/* Content for the full-page overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2 className="t">Showing content for lost pet</h2>
          {/* Add more content for the overlay */}
        </div>
      </div>
    </div>
  );
};

export default LostForm;
