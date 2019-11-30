import React from 'react';

export default function TimerFunc () {
    
    const [time, setTime] = React.useState('00:00:00');

    React.useEffect( () => {
        console.log('Таймер добавлен на страницу');
        
        let timeout = setTimeout( () => {
            let h = Number(time.split(':')[0]);
            let m = Number(time.split(':')[1]);
            let s = Number(time.split(':')[2]);
            s += 1

            if ( s === 60 ) {
                s = 0;
                m += 1
            }

            if ( m === 60 ) {
                m = 0;
                h += 1
            }
            setTime(`${ h < 10 ? '0' + h : h }:${ m < 10 ? '0' + m : m }:${ s < 10 ? '0' + s : s }`)
            
        }, 1000 )

        return () => {
            clearTimeout(timeout);
            console.log('Меняются значения таймера/таймер удалён со страницы');
        }
    }, [time] );

    return (
        <div className='timer'>
            {time}
        </div>
    )
}
