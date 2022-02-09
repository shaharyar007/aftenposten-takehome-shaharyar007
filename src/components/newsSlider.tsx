import * as React from 'react';
import * as ReactDom from "react-dom";
import  {useState , useEffect} from "react";
import axios from "axios";



const NewsSlider = () =>{
    // const [sections, setSection] = useState([]);
    const [HeroNews, setHeroNews] = useState<any>([]);

    var id:string = 'nyheter';
   React.useEffect(() => {
       axios
       .get(`http://localhost:5000/api/section/${id}`)
       .then((res: { data: React.SetStateAction<any[]>; })=> setHeroNews(res.data))
       .catch((err: any)=>console.log(err))
    },[]);

  var data = HeroNews.teasers;
    return(
<React.Fragment>
 {/* Section one Start  */}
    <section className="section-three-col">
     <div className="container section-three-col__container">
      <h2 className="section-three-col__title">All News</h2>
      <p className="section-three-col__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* Row start  */}
        <div  className="section-three-col__row">
        { 
      
      data && data?.map((item: any , i:any) =>{
           console.log(item);
           return(
            <a href={item.target.expandedUri} key={i} target="_blank" className="section-three-col__column">
                 {/* <img src='https://www.aftenposten.no/seksjon/img/newfront/ap_fallback_image.png' alt="img-col" width="117" height="117" /> */}
                 <b className="section-three-col__content">{item.label.value}</b>
                 <p className="section-three-col__content">{item.title.value}</p>
                 <small className="section-three-col__content"><b>Date:</b>{item.changes.firstPublished}</small>
                 <p><b>Language:</b> {item.clientProperties.language}</p>
                 <img src='' />
               </a> 
           )
       })
            }
     

      </div>
       {/* Row End  */}
      <div className="section-three-col__content">
          <p className="f-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      {/* <Cta Start  */}
      <div className="cta">
        <a href="javascript:void(0)" className="cta__btn cta__btn--primary">Open real account</a>
        <a href="javascript:void(0)" className="cta__btn cta__btn--secondary">Open practice account</a>
    </div>
       {/* Cta End  */}
    <div className="section-three-col__privacy--content">
        <p className="f-15">Forex trading involves risk. Losses can exceed deposits. <a href="javascript:void(0)" className="text-black">*Terms apply.</a></p>
    </div>
     </div>
  
 
   
      
    </section>
    {/* Section one End */}
</React.Fragment>
    
    )
};
export default NewsSlider;
