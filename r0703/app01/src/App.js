import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {

  // const login = function(){
  //   alert("로그인");
  // }

  // 화살표 함수
  const login = () => {
    alert("로그인");
  }

  return (
    <div className="App">
        <h2>로그인</h2>
        <form>
          <label>아이디</label> <input type="text" />
          <br/>
          <label>비밀번호</label> <input type="password" />
          <br/>
          <button className="btn" onClick={login}>로그인</button>
        </form>
    </div>
  );
}

export default App;
