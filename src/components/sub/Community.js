import React, { useEffect, useRef, useState } from 'react'


function Community() {
  const frame = useRef(null);
  const input = useRef(null);
  const textarea = useRef(null);
  const showBox = useRef(null);

  const [posts, setPosts] = useState([
    {title: 'Hello', content: 'Here comes description in detail.'}
  ]);

  //기존 posts 배열에 새로운 post추가 함수
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

  //인수로 받은 순번의 포스트만 삭제하는 함수
  const deletePost=index=>{
    setPosts(
      // filter는 기본 배열을 받아서 조건식을 추가해 특정 조건이 성립하는 데이터만 다시 새롭게 반환하는 함수
      posts.filter((post, postIndex)=> postIndex !== index)
    )
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
                  <div className='post'>
                    <h2>{posts.title}</h2>
                    <p>{posts.content}</p>
                  </div >
                  <ul className="btns">
                    <li>수정</li>
                    <li onClick={()=>deletePost(index)}>삭제</li>
                  </ul>
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