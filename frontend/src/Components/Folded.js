import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import arrow icons
import './Folded.css';

const FoldedSection = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h4 className="folded-section-title" onClick={toggleSection}>
        {title}
        {isOpen ? <FaChevronUp className="folded-section-icon" /> : <FaChevronDown className="folded-section-icon" />}
      </h4>
      {isOpen && (
        <div className='folded-section-content'>
          {/* Add the content related to the section here */}
          {content}
        </div>
      )}
    </div>
  );
};

export default FoldedSection;