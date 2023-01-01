import React from 'react';

const NoBudget = ({behaviorId}) => {
  return <>
    <div className="center" style={{ color: 'red' }}>
      Thanks for you answer, your behaviorId is {behaviorId}
    </div>
    <div className="right"/>
  </>
}

export default NoBudget;