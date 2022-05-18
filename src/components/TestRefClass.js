// TestRefClass 에서 ref 콜백과 create.ref를 사용해서 
// 클릭했을때
// input의 style의 backgroundColor값을 red로 바꾸세요
import React, { Component } from 'react';

class TestRefClass extends Component {
    constructor(props) {
        super(props);
        this.myred = React.createRef();
        this.myredchange = ()=>{
            if(this.myred) this.myred.current.style.background = "red";
        }
    }
    render() {
        return (
            <div>
                <input
                type="text"
                ref={this.myred}
                >
                </input>
                <button
                onClick={this.myredchange}
                >
                    컬러변경
                </button>
            </div>
        )
    }
}

export default TestRefClass;