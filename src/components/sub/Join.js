import { useEffect, useRef, useState } from "react";

function Join() {
  //state로 관리할 초기 value값들
  const initVal = {
    userid: "",
    pwd1: "",
    pwd2: "",
    email: "",
    comments: "",
    gender: "",
    interests: "",
    edu: ""
  }
  //usestate로 초기 value값을 state에 답아서 관리 시작
  const [val, setVal] = useState(initVal);
  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);


  //input에 변화점이 생길때마다 실행될 함수
  const handleChange = e => {
    const { name, value } = e.target;
    //const name = e.target.name
    //const value = e.target.value
    // console.log(`name:${name}, value:${value}`);
    //현재 비어있는 초기 객체값을 내가 현재 입력하고 있는 새로운 value값으로 계속 덮어쓰기
    setVal({ ...val, [name]: value });
  }

  const handleCheck = e => {
    //해당 함수가 실행된 대상의 name값 변수에 저장
    const { name } = e.target;
    //이벤트 대상의 체크 유무를 boolean값으로 저장
    const isCheck = e.target.checked;
    //val state에 해당 네임을 키, boolean값을 value로 저장
    setVal({ ...val, [name]: isCheck });
  }

  const handleSelect = e =>{
    const {name} = e.target;
    const isSelected = e.target.options[e.target.selectedIndex].value;
    setVal({...val, [name]: isSelected});
  }

  //submit 이벤트 발생하면 실행되는 함수
  const handleSubmit = e => {
    //일단 기본 전송을 막음
    e.preventDefault();
    setIsSubmit(true);
    //setErr로 기존의 err값을 변경
    //변경할 err객체내용을 반환해주는 check함수 호출
    setErr(check(val));
    console.log(val);
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

    if (!val.comments || val.comments.length < 10) {
      errs.comments = '남기는말을 10글자 이상 입력';
    }
    if (!val.gender) {
      errs.gender = '성별을 선택하세요'
    }

    if (!val.interests) {
      errs.interests = '관심사를 하나 이상 선택하세요'
    }

    if(!val.edu){
      errs.edu = '학력을 선택해 주세요'
    }
    return errs;
  }



  //전송 버튼을 눌러서 err state값이 바뀔때에만 호출
  useEffect(() => {
    //해당 코드 블록안에서 err스테이트에 담겨있는 객체값이 비어있으면 모든 인증을 통과한 상태라서 회원가입 완료처리
    console.log(err);
    const len = Object.keys(err).length;
    if (len === 0 && isSubmit) {
      console.log('인증성공')
      setSuccess(true);

    } else {
      console.log('인증실패');
      setSuccess(false);
    }
  }, [err]);

  return (
    <main className="join">
      <div className="inner">
        <h1><a href="#">Join</a></h1>

        {success ? <div>회원가입을 축하합니다.</div> : null}

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
                      // value={val.userid}
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
                      // value={val.pwd1}
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
                      // value={val.pwd2}
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
                      // value={val.email}
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
                      // value={val.comments}
                      onChange={handleChange}
                    ></textarea>
                    <span className="err">{err.comments}</span>
                  </td>
                </tr>
                {/*gender*/}
                <tr>
                  <th scope="row">
                    GENDER
                  </th>
                  <td>
                    <label htmlFor="male">MALE</label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      onChange={handleCheck}
                    />

                    <label htmlFor="female">FEMALE</label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={handleCheck}
                    />
                    <span className="err">{err.gender}</span>
                  </td>
                </tr>

                {/*interests*/}
                <tr>
                  <th scope="row">
                    INTERESTS
                  </th>
                  <td>
                    <label htmlFor="male">SPORTS</label>
                    <input
                      type="checkbox"
                      id="sports"
                      name="interests"
                      onChange={handleCheck}
                    />

                    <label htmlFor="female">MUSIC</label>
                    <input
                      type="checkbox"
                      id="music"
                      name="interests"
                      onChange={handleCheck}
                    />


                    <label htmlFor="female">GAME</label>
                    <input
                      type="checkbox"
                      id="game"
                      name="interests"
                      onChange={handleCheck}
                    />

                    <span className="err">{err.interests}</span>
                  </td>
                </tr>

                {/*education*/}
                <tr>
                  <th scope="row">
                    <label htmlFor="edu">EDUCATION</label>
                  </th>
                  <td>
                    <select name="edu" id="edu" onChange={handleSelect}>
                      <option value="">학력을 선택하세요</option>
                      <option value="elementqary school">초등학교 졸업</option>
                      <option value="middle school">중학교 졸업</option>
                      <option value="high school">고등학교 졸업</option>
                      <option value="college">대학교 졸업</option>
                    </select>
                    <span className="err">{err.edu}</span>
                  </td>
                </tr>

                {/*btn set*/}
                <tr>
                  <th colSpan='2' className="btnSet">
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