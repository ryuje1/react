import logo from './logo.svg';
import './App.css';

function App() {

  // let btn1 = () => {
  //   alert('경고창')
  // }

  // 화살표 함수
  const btn1 = function() {
    alert('안녕하세요');
  }

  return (
    <div className="App">
        <h2>안녕하세요</h2>
        <button onClick={btn1}>버튼</button>
    </div>
  );
}

export default App;
