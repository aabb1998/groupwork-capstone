import React from 'react';

const JoinTeam = () => {
  const handleSubmit = () => {};
  return (
    <div className="mt-20 bg-neutral-400">
      <form action="submit" onSubmit={handleSubmit}>
        <span>Enter team name</span>
      </form>
    </div>
  );
};

export default JoinTeam;
