// Header.js
import React from 'react';
import Link from 'next/link';

const Header = ({ companyName, userProfile }) => {
  return (
    <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <div>{companyName}</div>
      <div>
        {/* Link to the user profile page */}
        <Link href="/userprofile">
          {userProfile}
        </Link>
      </div>
    </header>
  );
};

export default Header;
