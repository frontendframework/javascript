import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropsTest1 extends Component {
    //es6 로 component를 선언하면 proptype 선언은 클래스내의 static 변수로
    //선언하던가.. 외부에서 propTypes={} 로 선언하던가..
    static propTypes={
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        data: PropTypes.shape({
            img: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number
        })
    }
    render(){
        //JSX 에서 동적인 데이터는 {}
        //JSX 밖에서의 동적인 데이터는 ${}
        var urlImg=`images/${this.props.data.img}`;
        return (
            <div>
                <a href={this.props.url}>{this.props.name}</a>
                <span>
                    <img src={urlImg} width={this.props.data.width} 
                        height={this.props.data.height}/>
                </span>
            </div>
        )
    }
}

class PropsTest2 extends Component {
    //prop default 값 선언..
    static defaultProps = {
        email:'a@a.com'
    }
    render(){
        return (
            <p>
                {this.props.name} - {this.props.email} - {this.props.address}
            </p>
        )
    }
}

//클래스 외부에서 proptype 선언가능..
PropsTest2.propTypes={
    name: PropTypes.string.isRequired
}
//클래스 외부에서도 prop 의 default 값 선언가능..
//클래스 내부에서 선언한게 있다면.. 외부와 중복된다면.. 외부게 우선...
PropsTest2.defaultProps={
    email:'b@b.com',
    address:'seoul'
}
var ImageData = {
    img:'google.png',
    width: 100,
    height: 30
}

export class PropsTestMain extends Component {
    render(){
        return (
            <div>
                <PropsTest1 data={ImageData} url="http://www.google.com"
                    name="google"/>
                <PropsTest2 name="kkang"/>
            </div>
        )
    }
}