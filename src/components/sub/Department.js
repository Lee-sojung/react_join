import { useEffect } from "react";
import { useRef } from "react";

function Department(){
  const frame = useRef(null);

  useEffect(()=>{
    frame.current.classList.add('on');
  },[])
  return (
    <main ref={frame}>
      <div className="inner">
        <h1><a href="#">Department</a></h1>

      </div>
    </main>
  )
}

export default Department;