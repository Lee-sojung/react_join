import React, { useEffect, useRef, useState } from 'react'


function Community() {
  const frame = useRef(null);
  const input = useRef(null);
  const textarea = useRef(null);
  const updateInput = useRef(null);
  const updateTextarea= useRef(null);
  const showBox = useRef(null);

  const getLocalItems = ()=>{
    let data = localStorage.getItem('posts');
    if(data){
      return JSON.parse(data);
    }else{
      return [];
    }
  }
  const [posts, setPosts] = useState(getLocalItems);

/*
  const [posts, setPosts] = useState([
    { title: 'Hello0', content: 'Here comes description in detail.' },
    { title: 'Hello1', content: 'Here comes description in detail1.' },
    { title: 'Hello2', content: 'Here comes description in detail2.' },
    { title: 'Hello3', content: 'Here comes description in detail3.' }
  ]);
  */

  //기존 posts 배열에 새로운 post추가 함수
  const createPost = () => {
    if(!input.current.value || !textarea.current.value){
      alert('제목과 본문을 입력하세요');
      return;
    }
    setPosts([
      {
        title: input.current.value,
        content: textarea.current.value
      }
      , ...posts
    ]);

    input.current.value = '';
    textarea.current.value = '';
  }

  //인수로 받은 순번의 포스트만 삭제하는 함수
  const deletePost = index => {
    setPosts(
      // filter는 기본 배열을 받아서 조건식을 추가해 특정 조건이 성립하는 데이터만 다시 새롭게 반환하는 함수
      posts.filter((post, postIndex) => postIndex !== index)
    )
    console.log(posts);
  }

  //출력모드에서 수정모드로 변경하는 함수
  const enableUpdate = index => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = true;
        return post;
      })
    )
  }

  //수정모드에서 다시 출력모드로 변경하는 함수
  const disableUpdate = index => {
    setPosts(
      posts.map((post, postIndex) => {
        if (postIndex === index) post.enableUpdate = false;
        return post;
      })
    )
  }

  //실제 포스트를 수정해서 업데이트하는 함수
  const updatePost = index => {
    if(!updateInput.current.value || !updateTextarea.current.value){
      alert('수정할 제목과 본문을 모두 입력하세요');
      return;
    }
    setPosts(
      posts.map((post, postIndex)=>{
        if(postIndex === index){
          //const article = showBox.current.children[index];
          //const input = article.querySelector('input');
          //const textarea = article.querySelector('textarea');
          post.title = updateInput.current.value;
          post.content = updateTextarea.current.value;
          post.enableUpdate = false;
        }
        return post;
      })
    )
  }

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
    frame.current.classList.add('on');
  }, [posts]);

  return (
    <main ref={frame} className='community content'>
      <div className="inner">
        <h1>Community</h1>

        <section className="inputBox">
          <input type="text" placeholder='제목을 입력하세요' ref={input} /> <br />
          <textarea cols="30" rows="5" placeholder='본문을 입력하세요' ref={textarea}></textarea> <br />
          <button onClick={() => {
            input.current.value = '';
            textarea.current.value = '';
          }}>cancle</button>
          <button onClick={createPost}>create</button>
        </section>

        <section className="showBox" ref={showBox}>
          {
            posts.map((post, index) => {
              return (
                <article key={index}>
                  {
                    post.enableUpdate
                      ?
                      //수정모드
                      <>
                        <div className="post">
                          <input type="text" defaultValue={post.title} ref={updateInput}/><br/>
                          <textarea defaultValue={post.content} ref={updateTextarea}></textarea>
                        </div>

                        <ul className="btns">
                          <li onClick={() => updatePost(index)}>입력</li>
                          <li onClick={() => disableUpdate(index)}>취소</li>
                        </ul>
                      </>
                      :
                      //출력모드
                      <>
                        <div className="post">
                          <h2>{post.title}</h2>
                          <p>{post.content}</p>
                        </div>

                        <ul className="btns">
                          <li onClick={() => enableUpdate(index)}>수정</li>
                          <li onClick={() => deletePost(index)}>삭제</li>
                        </ul>
                      </>
                  }
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