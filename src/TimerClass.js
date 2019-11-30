import React from 'react';
let startTime;

export default class TimerClass extends React.Component {
    state = {
        time: '00:00:00'
    }

    componentDidMount() {
        console.log('componentDidMount - добавление таймера на страницу')
        startTime = setInterval( () => {
            let h = Number(this.state.time.split(':')[0]);
            let m = Number(this.state.time.split(':')[1]);
            let s = Number(this.state.time.split(':')[2]);
            s += 1

            if ( s === 60 ) {
                s = 0;
                m += 1
            }

            if ( m === 60 ) {
                m = 0;
                h += 1
            }
            this.setState( { time: `${ h < 10 ? '0' + h : h }:${ m < 10 ? '0' + m : m }:${ s < 10 ? '0' + s : s }` } )
            console.log('Изменение значений таймера')
        }, 1000 )
        
    }

    componentWillUnmount() {
        clearInterval(startTime);
        console.log('componentWillUnmount - удаление таймера со страницы')
    }

    render() {
        let {time} = this.state
        return (
            <div className='timer'>
                {time}
            </div>
        )
    }

}