import React, {useState} from 'react';

const Counter = () =>{
    // useState 변수
    const [count, setCount] = useState(0);

    // 함수 선언
    const nBtn = () =>{
        //alert("버튼 클릭");
        setCount(count+2);
        console.log("숫자 : ", count);
    }

    return (
        <button onClick={nBtn}>
            버튼 {count}
        </button>
    );
}

export default Counter;