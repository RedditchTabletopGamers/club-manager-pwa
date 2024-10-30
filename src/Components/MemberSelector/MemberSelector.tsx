import React, { useState } from 'react';
import { memberList } from '../../Data/members';


const MemberSelect: React.FC = () => {
  const [selectedName, setSelectedName] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedName(event.target.value);
  };

  return (
      <div>
          <select id="member-select" value={selectedName} onChange={handleChange}>
              <option value="">--Select a Member--</option>
              {memberList.map((member, index) => (
                  <option key={index} value={member.Name}>
                      {member.Name}
                  </option>
              ))}
          </select>
          {selectedName && <p>You selected: {selectedName}</p>}
      </div>
  );
};

export default MemberSelect;