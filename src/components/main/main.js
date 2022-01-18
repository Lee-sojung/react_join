import Header from '../common/Header.js';
import Visual from './Visual.js';
import News from './News.js';
import Intro from './Intro.js';
import Info from './Info.js';
import Btns from './Btns.js';
import Anime from '../../class/anime.js';
import { useEffect, useState, useRef } from 'react';


function Main() {

    const main = useRef(null);
    //useRef에 변수값 참조하는 이유
    //useRef에 값을 담아서 참조되어 있는 값은 언제든 변경가능
    //단지 useRef에 참조되어 있는 값이 바뀌더라도
    //컴포넌트가 재 랜더링되지는 않음 (중요)

    //재랜더링을 피하기 위해서 특정 정보값을 일반 변수에 담지 않는 이유
    //일반 변수에 값을 담으면 다른 스테이트값의 변경으로 컴포넌트가 재랜더링이 일어날 때 해당 컴포넌트에 등록되어있는 변수값도 초기화 되므로 값의 유지가 안됨

    //결국 useRef로 참조한 값은 값도 변경하고 컴포넌트가 재 랜더링 되더라도 값은 유지가능하면서 해당 useRef값이 변경되었다고 해도 컴포넌트가 재랜더링 되지 않음
    let pos = useRef([]);
    const [index, setIndex] = useState(0);

    const getIndex = index => {
        setIndex(index);
    }

    const handleResize = () => {
        const secs = main.current.querySelectorAll('.myScroll');
        let arr = [];
        for (let sec of secs) arr.push(sec.offsetTop);
        pos.current = arr;
    }

    const handleScroll = () => {
        let scroll = window.scrollY;
        const btns = main.current.querySelectorAll('#btns li');

        pos.current.map((pos, index) => {
            if (scroll >= pos) {
                for (const btn of btns) btn.classList.remove('on');
                btns[index].classList.add('on');
            }
        })

    }

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        new Anime(window, {
            prop: 'scroll',
            value: pos.current[index],
            duration: 500
        })

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [index]);

    return (
        <div id='mainWrap' ref={main}>
            <Header type={'main'} />
            <Visual />
            <News />
            <Intro />
            <Info />
            <Btns getIndex={getIndex} />
        </div>
    )
}

export default Main;