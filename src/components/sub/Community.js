import React, { useEffect, useRef, useState } from 'react'


function Community() {
  const frame = useRef(null);
  useEffect(() => {
    frame.current.classList.add('on');
  }, []);

  return (
    <main ref={frame} className='community content'>
      <div className="inner">
        <h1>Community</h1>
      </div>
    </main>
  )
}
export default Community;