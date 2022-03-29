import * as React from 'react';
import * as ReactDom from "react-dom";
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import  {useState , useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';




const NewsSlider = () =>{
    // const [sections, setSection] = useState([]);
    const [HeroNews, setHeroNews] = useState<any>([]);
  const { id } = useParams();
   React.useEffect(() => {
       axios
       .get(`http://localhost:5000/api/section/${id}`)
       .then((res: { data: React.SetStateAction<any[]>; })=> setHeroNews(res.data))
       .catch((err: any)=>console.log(err))
    },[id]);

  var data = HeroNews.teasers;
  // console.log(data);
  var sec_id = HeroNews.section;
  console.log(sec_id);
    return(
<React.Fragment>
 {/* Section one Start  */}
    <section className="section-three-col">
     <div className="container section-three-col__container">
      <h2 className="section-three-col__title">News</h2>
        {/* Row start  */}
        <div  className="section-three-col__row">
        { 
      
      data && data?.map((item: any , i:any) =>{

           return(
            <a href='' key={i} target="_blank" className="section-three-col__column">
                <Link to={`/section/${sec_id.title}/${item.customProperties.id}`}> 
                 <img src={`https://premium.vgc.no/v2/images/${item.image.imageAsset.id}?fit=crop&h=300&tight=true&w=300`} alt="img-col" />
                 <b className="section-three-col__content">{item.label.value}</b>
                 <p className="section-three-col__content">{item.title.value}</p>
                 <small className="section-three-col__content"><b>Date:</b>{item.changes.firstPublished}</small>
                 <p><b>Language:</b> {item.clientProperties.language}</p>
                  {
                 item.authors.map((item: any)=>(
                     <p className='author'><b>Authors:</b> {item.title}</p>
                    ))
                    }
                 <img src='' />
                 </Link>
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
