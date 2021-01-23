import  React  from 'react';
import style from './News.module.css';

const News = () => {

let textNewsEl = React.createRef();

let addNews = ()=> {
    let textNews = textNewsEl.current.value;
    alert (textNews)
};


    return (
        <div className={style.news}> My first news in REACT
        <div> 
            <textarea name="sad" id="d" cols="30" rows="10" ref={textNewsEl} ></textarea>
            <button onClick={addNews} >add news</button>
        </div>
        </div>
    )
};

export default News;
