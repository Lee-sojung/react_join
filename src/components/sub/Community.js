import React, { useEffect, useRef, useState } from 'react'
function Community() {
  const frame = useRef(null);
  const input = useRef(null);
  const [post, setPost] = useState('');
  const [postList, setPostlist] = useState([]);

  //기존 포소트목록에서 새로운 포스트를 추가하는 함수
  const insertPost = () => {
    setPostlist([post, ...postList])
  }

  const deletePost = delIndex =>{
    setPostlist(
      postList.filter((post, index)=>(index !== delIndex))
    )
  }

  //글 입력해서 컴포넌트 재 랜더링시
  useEffect(() => {
    frame.current.classList.add('on');
    //기존 input요소 비우고
    setPost('');
    //추가된 리스트 목록 콘솔 출력
    console.log(postList);
  }, [postList])

  return (
    <main ref={frame} className='community content'>
      <div className="inner">
        <h1>Community</h1>
        <section className="inputBox">
          <input
            ref={input}
            type="text"
            value={post}
            //changeEvent가 발생할때마다 post값  변경
            onChange={e => setPost(e.target.value)}
          />
          {/* 저장버튼 클릭시 insertPost함수 호출해서 글저장 */}
          <button
            onClick={insertPost}
          >save
          </button>
        </section>

        <section className="showList">
          {
            //기존 배열값을 역순으로 화면에 출력
            postList.map((post, index)=>{
        return(
          <article
            key={index}
          >
            <p>{post}</p>
            <span onClick={()=> deletePost(index)}>del</span>
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