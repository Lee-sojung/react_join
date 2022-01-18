import axios from "axios";
import {useEffect, useRef, useState} from "react";

function Community(){
  const frame = useRef(null);

  let [posts, setPosts] = useState([]);
  const path= process.env.PUBLIC_URL;
  const url = `${path}/db/community.json`;
  useEffect(()=>{
    axios
      .get(url)
      .then(json=>{
        console.log(json.data.data);
        setPosts(json.data.data);
      })

      frame.current.classList.add('on');
  },[]);

  return (
    <main ref={frame}>
      <div className="inner">
        <h1><a href="#">Community2</a></h1>
        {
          posts.map((data, index)=>{
            return (
              <article key={index}>
                <h1>{data.title}</h1>
                <span>{data.writer}</span>
                <em>{data.date}</em>
              </article>
            )
          })
        }          
      </div>
    </main>
  )
}
// export default Community;