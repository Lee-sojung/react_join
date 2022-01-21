import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {setMembers} from "../../redux/actions";

function Department(){
  const frame = useRef(null);

  const members = useSelector(state=>state.memberReducer.members);
  console.log(members);
  const dispatch = useDispatch();

  //변경할 새로운 멤버 정보
  const newMember =[
    {name: 'tom', position: 'CEO'},
    {name: 'Emma', position: 'Designer'},
    {name: 'Michael', position: 'Developer'}
]


  useEffect(()=>{
    frame.current.classList.add('on');
  },[])
  return (
    <main ref={frame}>
      <div className="inner">
        <h1><a href="#">Department</a></h1>
        {/*버튼 클릭시 action의 setMemeber로 type과 payload가 포함된 action객체를 duspatch를 통해 reducer에 전달*/}
        <button onClick={()=>{
          dispatch(setMembers(newMember))
        }}> 멤버변경</button>
      </div>
    </main>
  )
}

export default Department;