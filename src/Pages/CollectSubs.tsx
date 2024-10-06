import React from 'react';
import { Link } from 'react-router-dom';
import MeetingSelector from '../Components/MeetingSelector/MeetingSelector'
import MemberSelector from '../Components/MemberSelector/MemberSelector';

const CollectSubs = () => {
  return (
    <>
    <Link to="/Home">Main Menu &gt;</Link> <h1>Collect Subs</h1>
    <div>
      Meeting week: <MeetingSelector />
      <MemberSelector />
    </div>
    </>
  );
};

export default CollectSubs;