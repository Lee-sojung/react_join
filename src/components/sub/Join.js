import { useState } from "react";

function Join() {
  //state로 관리할 초기 value값들
  const initVal = {
    userid : ""
  }
  //usestate로 초기 value값을 state에 답아서 관리 시작
  const[val, setVal] = useState(initVal);

  //input에 변화점이 생길때마다 실행될 함수
  const handleChange = e =>{
    const {name, value} = e.target;
    //const name = e.target.name
    //const value = e.target.value
    // console.log(`name:${name}, value:${value}`);
    setVal({...val, [name]: value})
    console.log(val);
  }

  return (
    <main className="join">
      <div className="inner">
        <h1><a href="#">Join</a></h1>

        <form>
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
                    <input type="submit" value='SENE'/>
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