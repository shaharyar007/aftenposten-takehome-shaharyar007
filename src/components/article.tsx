import * as React from 'react';
import  {useState , useEffect} from "react";
import axios from "axios";
import * as ReactDom from "react-dom";
import { useParams } from 'react-router-dom';



const Article = () =>{
    const {sec_id,id} = useParams();

    // const [sections, setSection] = useState([]);
    // const [HeroNews, setHeroNews] = useState<any>([]);

    React.useEffect(() => {
       axios
       .get('http://localhost:5000/api/sections')
       .then((res: { data: React.SetStateAction<any[]>; })=> setSection(res.data))
       .catch((err: any)=>console.log(err))
    },[]);
    //  var ids = ['nyheter'];
    //  console.log(ids);
    // React.useEffect(() => {
    //     axios
    //     .get(`http://localhost:5000/api/section/${ids}`)
    //     .then((res: { data: React.SetStateAction<any[]>; })=> setHeroNews(res.data))
    //     .catch((err: any)=>console.log(err))
    //  },[]);
    // console.log(HeroNews);
    return(
           
    <section className="hero">
    <div className="container hero__container">
        {/* {
            HeroNews?.teasers?.filter((item: { id: React.Key; title: boolean  }) => (
               console.log(item.title)
            ))
        } */}
       
     
        <div className="hero__content">
        <h1 className='text-white f-40'>Article Name</h1> 
   <h1 className="hero__title text-white"></h1>
 
</div>
     
      
    
   
    </div>
    </section> 
    
    )
};
export default Article;
