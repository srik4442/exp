import React, { useState } from 'react';
const LostForm = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const overlayStyle = {
    display: showOverlay ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
    zIndex: 9999,
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleButtonClick = () => {
    setShowOverlay(true);
    // Add any additional functionality when the button is clicked
  };

  return (
    <div className="card bg-primary text-white">
      <div className="card-body">
        <h2 className="card-title">Report a Lost Pet</h2>
        <button style={buttonStyle} onClick={handleButtonClick}>Report</button>
        {/* Lost pet form fields */}
      </div>
      <div style={overlayStyle} onClick={closeOverlay}>
        {/* Content for the full-page overlay */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <h2>Showing content lost pet</h2>
          {/* Add more content for the overlay */}
        </div>
      </div>
    </div>
  );
};

export default LostForm;
