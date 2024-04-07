// Tabs.js
import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="tabs" style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
      <button style={buttonStyle(activeTab === 'all')} onClick={() => onTabChange('all')}>All Tasks</button>
      <button style={buttonStyle(activeTab === 'active')} onClick={() => onTabChange('active')}>Active Tasks</button>
      <button style={buttonStyle(activeTab === 'closed')} onClick={() => onTabChange('closed')}>Closed Tasks</button>
    </div>
  );
};

const buttonStyle = (isActive) => ({
  padding: '10px 20px',
  backgroundColor: isActive ? '#007bff' : '#fff',
  color: isActive ? '#fff' : '#000',
  border: '1px solid #ccc',
  borderRadius: '5px',
  cursor: 'pointer',
  outline: 'none',
});

export default Tabs;
