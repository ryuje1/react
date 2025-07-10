import logo from './logo.svg';
import './App.css';
import Counter from './comp/Counter';
import React, {useState} from 'react';

function App() {

  const [nameStr, setNameStr] = useState('변경');
  const [chgName, setChgName] = useState('');
  const [titleName, setTitleName] = useState('');

  const nameBtn = () =>{
    setTitleName(chgName);
    setChgName('');
  }

  const keyUp = (e) =>{
    if(e.keyCode == 13){
      nameBtn();
      stuNameBtn();
    }
  }

  const [chgStuName, setChgStuName] = useState('');
  const [stuName, setStuName] = useState('');

  const stuNameBtn = () =>{
    setStuName(chgStuName);
  }

  return (
    <div className="App">
      <h2>메인페이지</h2>
      <label>이름 : {stuName}</label>
      <br/>
      <input type="text" value={chgStuName} onKeyUp={keyUp} onChange={(e)=>setChgStuName(e.target.value)}/>
      <br/>
      <button onClick={stuNameBtn}>학생이름변경</button>

      <hr/>
      <input type="text" value={chgName} onKeyUp={keyUp} onChange={(e)=>setChgName(e.target.value)} />
      <br/>
      <button onClick={nameBtn}>버튼네임변경</button>
      <br/>
      <br/>
      <Counter btnName="클릭" num='1' id='aaa' />
      <Counter btnName={nameStr} />
      <Counter btnName={titleName} />
    </div>
  );
}

export default App;
