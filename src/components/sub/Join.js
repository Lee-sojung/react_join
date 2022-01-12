import { useEffect, useState } from "react";

function Join() {
  //state로 관리할 초기 value값들
  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: ""
  }
  //usestate로 초기 value값을 state에 답아서 관리 시작
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});

  //input에 변화점이 생길때마다 실행될 함수
  const handleChange = e => {
    const { name, value } = e.target;
    //const name = e.target.name
    //const value = e.target.value
    // console.log(`name:${name}, value:${value}`);
    //현재 비어있는 초기 객체값을 내가 현재 입력하고 있는 새로운 value값으로 계속 덮어쓰기
    setVal({ ...val, [name]: value })
    //{userid:""}+{userid: 문자}
    console.log(val);
  }

  //submit 이벤트 발생하면 실행되는 함수
  const handleSubmit = e => {
    //일단 기본 전송을 막음
    e.preventDefault();
    //setErr로 기존의 err값을 변경
    //변경할 err객체내용을 반환해주는 check함수 호출
    setErr(check(val));
  }

  //에러객체를 반환하는 함수
  const check = val => {
    let errs = {};
    let eng = /[a-zA-Z]/;
    let num = /[0-9]/;
    let spc = /[!@#$%^&*]/;

    //현재 스테이트 val의 userid값이 비어있거나 5글자 미만일때만 
    if (!val.userid || val.userid.length < 5) errs.userid = '아이디 5글자 이상 입력';
    //비어있는 err객체에 userid키값을 만들어서 에러구문을 담음
    //{userid: '아이디를 5글자 이상 입력하세요'}
    // console.log(errs);
    if (!val.pwd1 || val.pwd1.length < 5 || !eng.test(val.pwd1) || !num.test(val.pwd1) || !spc.test(val.pwd1)) {
      errs.pwd1 = '비밀번호는 5글자 이상, 문자,숫자,특수문자를 모두 포함';
    }

    if (val.pwd1 !== val.pwd2) {
      errs.pwd2 = '2개의 비밀번호를 동일하게 입력';
    }

    if (!val.email || val.email.length < 8 || !/@/.test(val.email)) {
      errs.email = '이메일주소를 8글자이상 입력';
    }

    if (!val.comments || val.comments.length <10) {
      errs.comments = '남기는말을 10글자 이상 입력';
    }
    return errs;
  }



  //전송 버튼을 눌러서 err state값이 바뀔때에만 호출
  useEffect(() => {
    //해당 코드 블록안에서 err스테이트에 담겨있는 객체값이 비어있으면 모든 인증을 통과한 상태라서 회원가입 완료처리
    console.log(err);
    const len = Object.keys(err).length;
    if (len === 0) {
      console.log('모든 인풋요소 인증통과')
    } else {
      console.log('인증실패');
    }
  }, [err]);

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
                {/*user id*/}
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
                    <span className="err">{err.userid}</span>
                  </td>
                </tr>
                {/*password*/}
                <tr>
                  <th scope="row">
                    <label htmlFor="password">PASSWORD</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      id="pwd1"
                      name="pwd1"
                      placeholder="비밀번호를 입력하세요"
                      value={val.pwd1}
                      onChange={handleChange}
                    />
                    <span className="err">{err.pwd1}</span>
                  </td>
                </tr>
                {/*re password*/}
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd2">RE-PASSWORD</label>
                  </th>
                  <td>
                    <input
                      type="password"
                      id="pwd2"
                      name="pwd2"
                      placeholder="비밀번호를   재입력하세요"
                      value={val.pwd2}
                      onChange={handleChange}
                    />
                    <span className="err">{err.pwd2}</span>
                  </td>
                </tr>
                {/*email*/}
                <tr>
                  <th scope="row">
                    <label htmlFor="email">E-MAIL</label>
                  </th>
                  <td>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email을 입력하세요"
                      value={val.email}
                      onChange={handleChange}
                    />
                    <span className="err">{err.email}</span>
                  </td>
                </tr>
                {/*comments*/}
                <tr>
                  <th scope="row">
                    <label htmlFor="pwd2">COMMENTS</label>
                  </th>
                  <td>
                    <textarea
                      col='30'
                      row='10'
                      type="password"
                      id="comments"
                      name="comments"
                      placeholder="남기는 말을 적어주세요"
                      value={val.comments}
                      onChange={handleChange}
                    ></textarea>
                    <span className="err">{err.comments}</span>
                  </td>
                </tr>
                <tr>
                  <th colSpan='2'>
                    <input type="reset" value='CANCEL' />
                    <input type="submit" value='SEND' />
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