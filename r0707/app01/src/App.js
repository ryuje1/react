import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import './css/style.css';

function App() {
  // let count = 100;  //일반변수선언 - var, let, const
  const [count, setCount] = useState(200); // useState변수 선언 => react 핵심 (html 값을 마음대로 변경할 수 있는 장점)
  const [num, setNum] = useState(0);
  
  // 화살표 함수
  const upBtn = () => {
    setCount(count+1);
    console.log("숫자 확인 : ", count);
    //document.getElementById('id01').innerHTML="숫자 : "+count;
  }
  // const btn2 = function(){}
  // function btn3(){}
  // const btn3 = function btn3(){}

  const downBtn = () => {
    setCount(count-1);
    console.log("숫자 확인 : ", count);
  }

  const confirmBtn = () => {
    alert('확인버튼');
    setCount(num);  // useState값을 변경하려면 set을 사용
  }


  return (
    <div className="App">
      <h2>메인페이지</h2>
      <div className="d01" id='id01'>count숫자 : {count}</div>
      {/* <button onClick={()=>{alert("확인버튼 클릭")}}>확인</button> */}
      <div>
      <div className="d01"> num:{num}</div>
        <label>숫자입력</label>
        <input type="text" className="num" value={num} onChange={(event)=>{setNum(event.target.value)}}/>
        <br/>
        <br/>
        <button onClick={confirmBtn}>확인</button>
      </div>
      <button onClick={upBtn}>숫자증가</button>
      <button onClick={downBtn}>숫자감소</button>
    </div>
  );
}

export default App;
