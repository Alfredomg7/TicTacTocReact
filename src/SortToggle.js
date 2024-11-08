import React from 'react';

function SortToggle({ ascending, onToggle }) {
  return (
    <div className="sort-toggle">
      <label className="switch">
        <input 
          type="checkbox" 
          checked={ascending} 
          onChange={onToggle} 
        />
        <span className="slider"></span>
      </label>
      <span>{ascending ? 'Sort Desc' : 'Sort Asc'}</span>
    </div>
  );
}

export default SortToggle