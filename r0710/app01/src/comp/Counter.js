import React, {useState} from 'react';

const Counter = ({btnName, id, num}) =>{

    console.log('prop btnName : ', btnName);
    console.log('prop id : ', id);
    console.log('prop num : ', num);

    let makeName = btnName||'이름없음';
    //let makeName = (props.btnName)?props.btnName:'이름없음';
    // if(props.btnName) {} else {}
    
    const [count, setCount] = useState(0);

    const countUp = () =>{
        //alert("버튼확인");
        setCount(count+1);
    }

    return(
        <>
            <button onClick={countUp}>{makeName} {count}</button>
        </>
    );
}

export default Counter;