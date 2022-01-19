import React, { useEffect, useRef, useState } from 'react'


function Community() {
  const frame = useRef(null);
  const input = useRef(null);
  const textarea = useRef(null);
  const showBox = useRef(null);

  const [posts, setPosts] = useState([
    {title: 'Hello', content: 'Here comes description in detail.'}
  ]);

  const createPost=()=>{
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value
      }
      ,...posts
    ]);

    input.current.value='';
    textarea.current.value='';
  }

  useEffect(() => {
    frame.current.classList.add('on');
  }, []);

  return (
    <main ref={frame} className='community content'>
      <div className="inner">
        <h1>Community</h1>

        <section className="inputBox">
          <input type="text" placeholder='제목을 입력하세요' ref={input}/> <br/>
          <textarea cols="30" rows="10" placeholder='본문을 입력하세요' ref={textarea}></textarea> <br/>
          <button onClick={()=>{
            input.current.value = '';
            textarea.current.value = '';
          }}>cancle</button>
          <button onClick={createPost}>create</button>
        </section>

        <section className="showBox" ref={showBox}>
          {
            posts.map((posts, index)=>{
              return(
                <article key={index}>
                  <h2>{posts.title}</h2>
                  <p>{posts.content}</p>
                </article>
              )
            })
          }
        </section>

      </div>
    </main>
  )
}
export default Community;