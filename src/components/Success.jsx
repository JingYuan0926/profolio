import React from 'react';
import successImage from '../assets/success.png'; // Import the success image

const Success = () => {
  return (
    <div class="mt-2">
      <img src={successImage} alt="Success" /> {/* Render the success image */}
    </div>
  );
};

export default Success;
