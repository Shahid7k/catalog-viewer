import React,{useState,useEffect} from 'react';
import './App.css';
import { initPage, startShow, stopShow, navigate } from './handler';
import { catContent } from './catalogContents/content';

const  App = () => {
  const [slideFlag, setSlideFlag] = useState(true);
  useEffect(()=>{
    initPage();
  },[])

  const toggleSlideShow = () => {
     if(slideFlag) startShow();
     else stopShow();
     setSlideFlag(!slideFlag)
  }

  

  return (
    <div className="App">
      <div className="catalog-container">
        <div className="display-3 text-center border border-info mb-1">Catalog Viewer</div>
        
        <div className="container" id="catalog">
          {
            catContent.map((urlLink,i)=>{
             return <div className="" key={i}>
                <img src={urlLink} className="catalog-img w-100" alt="..."/>
              </div>
            })
          }
         <a className="nav-buttons rounded-circle p-2 ml-2" id="nav-prev" onClick={()=>navigate(-1)} > {"<"} </a>
         <a className="nav-buttons rounded-circle p-2 mr-3" id="nav-next" onClick={()=>navigate(1)} >{">"}</a>
          <div  className='btn-slide'>
            <input className='p-5' style={{width:"30px",height:"30px"}} type="checkbox" onClick={toggleSlideShow}/> 
            <span className='px-2'>Slide</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
