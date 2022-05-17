// 클래스형 컴포넌트
import {Component} from 'react'; // 리액트에서 component 받아옴

// 리액트에서 component를 상속받아 사용
class EventClass extends Component { // 받아온 component를 상속받은 클래스 생성
    // props 값은 부모컴포넌트에서 받아오는 값이므로 component에서 미리 받아오고있다
    constructor(props) {
        // 받아온 값을 super로 전달, 사용할때는 this로 사용
        super(props); // props의 값은 super로 부모에게서 받아옴
        // 클래스형 컴포넌트에서 사용하기위해 constructor에 저장
        // state = {} 형식으로 constructor 바깥에 작성도 가능하다.
        this.state = {
            message : '메시지입니다'
        };
        // onClick={this.onClickEvent} 로서 바로 쓰기위해 바인딩해줌
        // 밑에 만든 onClickEvent메소드의 경로를 정해주는것
        // this.는 자기 함수안에 있는 함수라는것이고 정해줌
        // bind(this)는 자기 클래스 안의 함수를 콜백시에 this위치를 찾이못할수있기에
        // this는 지금 현재 클래스를 참조한다는 것을 정의해주는것 
        // (js에서는 클래스메소드는 기본적으로 바인딩 되어있지 않음)
        // 바인딩 하지않고 onClick에 전달하면 함수 호출시 undefined가 뜸
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    // 사용할 함수내용 : 어떠한 함수 모습이든 상관없음
    onClickEvent() { 
        this.setState(()=>{
            return {message : '메시지가 바뀌었습니다'
        }});
        console.log(this.state.message);
    }
    // onChangeMessage() {} : message : "메시지입니다"로 값을 수정하는 함수를 만들고
    // onClick={} 을 이용하여 연결하세요
    onChangeMessage() { 
        this.setState(()=>({
            message : '메시지입니다'
        }));
    }

    render() {
        const {name} = this.props;
        const {message} = this.state;

        return (
            <div>
                <h1>{name}</h1>
                <h3>{message}</h3>
                <button // 이벤트를 사용할때 케멜형식으로 작성
                // 안에 실행할 내용은 함수로 감싸서 실행
                onClick={()=>{
                    this.setState(()=>({ // setState 시에 ()=>({}) 형식으로 보내야함
                                         // () return이란 의미 return으로 객체를 보내야함
                        message : '메시지가 바뀌었습니다'
                    }));
                    console.log(message);
                }}>
                    클릭하면 메시지가 바뀝니다
                </button>
                <button
                onClick={this.onClickEvent}>  
                {/* 
                onClick={this.onClickEvent.bind(this)}>로 쓰고 위의 바인드문 지워도됨
                this를 통해서 메소드를 들고온다
                 */}
                    클릭하면 메시지가 바뀝니다
                </button>
                
                <button
                onClick={this.onChangeMessage.bind(this)}>
                    클릭하면 메시지가 바뀝니다
                </button>
            </div>
        );
    }
}

export default EventClass;