import { useState } from "react";

function Join() {
  //state로 관리할 초기 value값들
  const initVal = {
    userid : ""
  }
  //usestate로 초기 value값을 state에 답아서 관리 시작
  const[val, setVal] = useState(initVal);
  const[err,setErr] = useState({});
  const[isSubmit,setIsSubmit] = useState(false);

  //input에 변화점이 생길때마다 실행될 함수
  const handleChange = e =>{
    const {name, value} = e.target;
    //const name = e.target.name
    //const value = e.target.value
    // console.log(`name:${name}, value:${value}`);
    //현재 비어있는 초기 객체값을 내가 현재 입력하고 있는 새로운 value값으로 계속 덮어쓰기
    setVal({...val, [name]: value})
    //{userid:""}+{userid: 문자}
    console.log(val);
  }

  //submit 이벤트 발생하면 실행되는 함수
  const handleSubmit = e =>{
    //일단 기본 전송을 막음
    e.preventDefault();
    //setErr로 기존의 err값을 변경
    //변경할 err객체내용을 반환해주는 check함수 호출
    setErr(check(val));
  }

  //에러객체를 반환하는 함수
  const check = val=>{
    const errs = {};
    const eng = /[a-zA-Z]/;
    const num = /[0-9]/;
    const spc = /[!@#$%^&*]/;

    //현재 스테이트 val의 userid값이 비어있거나 5글자 미만일때만 
    if( !val.userid || val.userid.length < 5){
      //비어있는 err객체에 userid키값을 만들어서 에러구문을 담음
      errs.userid = '아이디를 5글자 이상 입력하세요'
    }
    console.log(errs);
    return errs;
  }

  return (
    <main className="join">
      <div className="inner">
        <h1><a href="#">Join</a></h1>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="h">회원가입 입력 폼 양식</legend>

            <table>
              <caption className="h">회원가입 입력</caption>
              <tbody>
                <tr>
                  <th scope="row">
                    <label htmlFor="userid">USER ID</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="userid"
                      name="userid"
                      placeholder="id를 입력하세요"
                      value={val.userid}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan='2'>
                    <input type="reset" value='CANCEL' />
                    <input type="submit" value='SEND'/>
                  </th>
                </tr>
              </tbody>
            </table>

          </fieldset>
        </form>
      </div>
    </main>
  )
}

export default Join;