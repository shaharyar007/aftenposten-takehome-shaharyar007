// import * as React from 'react';
// import  {useState , useEffect} from "react";
// import axios from "axios";
// import * as ReactDom from "react-dom";
// import "../styles/index.scss";



// const HeroComp = () =>{

//     // const [sections, setSection] = useState([]);
//     // const [HeroNews, setHeroNews] = useState<any>([]);

//     // React.useEffect(() => {
//     //    axios
//     //    .get('http://localhost:5000/api/sections')
//     //    .then((res: { data: React.SetStateAction<any[]>; })=> setSection(res.data))
//     //    .catch((err: any)=>console.log(err))
//     // },[]);
//     //  var ids = ['nyheter'];
//     //  console.log(ids);
//     // React.useEffect(() => {
//     //     axios
//     //     .get(`http://localhost:5000/api/section/${ids}`)
//     //     .then((res: { data: React.SetStateAction<any[]>; })=> setHeroNews(res.data))
//     //     .catch((err: any)=>console.log(err))
//     //  },[]);
//     // console.log(HeroNews);
//     return(
           
//     <section className="hero">
//     <div className="container hero__container">
//         {
//             HeroNews?.teasers?.filter((item: { id: React.Key; title: boolean  }) => (
//                console.log(item.title)
//             ))
//         }
//      {    
//       sections.filter((name: string | string[]) => name.includes('oslo')).map((filtereditem: any) => (
//         <div className="hero__content">
//         <h1 className='text-white f-40'>{sections[3]}</h1> 
//    <h1 className="hero__title text-white"></h1>
  
//    <p className="hero__description text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
//    <div className="cta">
//        <a href="javascript:void(0)" className="cta__btn cta__btn--primary">Open real account</a>
//        <a href="javascript:void(0)" className="cta__btn cta__btn--secondary">Open practice account</a>
//    </div>
//    <div className="hero__privacy-content-wrapper">
//        <p className="hero__privacy-text text-white">Forex trading involves risk. Losses can exceed deposits. <a href="javascript:void(0)">*Terms apply.</a></p>
//    </div>
// </div>
//       ))
//         }
      
    
//      <div className="hero__image">
//         <img src="assets/images/hero_image.png" className="header__logo" alt="Italian Trulli" width="300" height="300" />
//      </div>
//     </div>
//     </section> 
    
//     )
// };
// export default HeroComp;
