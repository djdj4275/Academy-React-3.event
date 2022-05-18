// testRefClass 컴포넌트를 들고와서 현재 컴포넌트에서 제어

import { Component } from 'react';
import TestRefClass from './TestRefClass.js'

class RefComponent extends Component {
    constructor(props) {
        super(props);
        this.componentRef = null;
        this.changeAll = ()=>{
            this.componentRef.myredchange();
        }
    }
    render() {
        return (
            <div>
                <TestRefClass
                // ref를 사용해서 엘레멘트 확인 
                // 콜백함수를 ref안에 작성
                ref={(element)=>{this.componentRef = element}}
                />
                <button
                onClick={this.changeAll}
                >
                가져와 바꾸기
                </button>
            </div>
        );
    }
}

export default RefComponent;