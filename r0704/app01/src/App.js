import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  // javascript 변수선언 : var - 변수(예전. 똑같은 이름의 변수 사용가능), let - 변수(현재. 똑같은 이름 변수 사용불가), const - 상수 (값 변경X)
  // app.js에서 css 적용 문법
  const style= {
    color:"#000",
    fontSize:"40px",
    // backgroundColor:"green",
    // textAlign : "center",
  }

  let count = 10;

  const btn = function(){
    alert("경고창 열기");
  }

  return (
    // html 소스 부분 - 빈공백 태그 <></>
    <>
      <div className="App">
        <h2 style={style}>메인페이지</h2>
        <div className="d01">숫자 : {count}</div>
        <br/>
        <button id="btn" onClick={btn}>확인</button>
      </div>
    </>
  );
}

export default App;
