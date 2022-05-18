import React, { Component } from 'react';

class RefClass extends Component {
    constructor(props) {
        super(props);
        this.textInput = null; // input element가 들어갈 공간(변수)
        // ref 콜백 함수를 통해 DOM에 접근
        this.setTextInputRef = (element)=>{
            this.textInput = element; 
        };
        // ref 콜백 함수로 가져온 엘레멘트(textInput)에 접근해서 값 수정 
        this.focusTextInput = ()=>{
            // textInput의 focus() 사용
            if(this.textInput) this.textInput.focus();
            console.log(this.textInput);
            console.dir(this.textInput);
        };

        // React.createRef를 통해 DOM에 접근하기
        this.myRef = React.createRef();
        this.myRefFocus = ()=>{
            if(this.myRef) this.myRef.current.focus();
            console.log(this.myRef);
            console.dir(this.myRef);
        };
    }
    render() {
        return (
            <div>
                <input
                type="text"
                ref={this.setTextInputRef} // ref를 통해서 input엘레멘트 전달
                >
                </input>
                <button
                onClick={this.focusTextInput} // 버튼을 누르면 input엘레멘트에 포커스
                >
                    포커스
                </button>

                <input
                type="text"
                ref={this.myRef} // createRef를 통해서 input element 전달
                >
                </input>
                <button
                onClick={this.myRefFocus} // myRef로 받아온 input에 포커스
                >
                    포커스2
                </button>
            </div>
        );
    }
}

export default RefClass;