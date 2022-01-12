import axios from "axios";
import {useEffect, useState} from "react";

function Community(){
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
  },[]);

  return (
    <main>
      <div className="inner">
        <h1><a href="#">Community</a></h1>
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

export default Community;