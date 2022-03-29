import * as React from "react";
import  {useState , useEffect} from "react";
import * as ReactDOM from "react-dom";
import "../assets/css/style.scss";
import Header from "../components/header";
import axios from "axios";
import NewsSlider from "../components/newsSlider";
import Footer from "../components/footer";
import Home from "../components/home";
import { BrowserRouter,
  Route,
  Routes,
  Link } from 'react-router-dom';
import Article from "../components/article";

const apiUrl = "http://localhost:5000/api";

let activeSection: string = "nyheter";

function App(): React.ReactElement {
//  const [sport, setSport] = useState<any>([]);


//  React.useEffect(() => {
//     axios
//     .get('sport.json')
//     .then((res: { data: React.SetStateAction<any[]>; })=> setSport(res.data))
//     .catch((err: any)=>console.log(err))
//  },[]);
//  let json:any = JSON.parse(sport);
// console.log(json);
    return (
        <BrowserRouter>
        <Header />
        <Routes>
       <Route  path="/" element={<Home />} />
       <Route  path="/section/:sec_id/:id" element={<Article />} />
       <Route  path="/section/:id" element={<NewsSlider />} /> 
      </Routes>     
      
        <Footer />
        </BrowserRouter>

  )


}
ReactDOM.render(<App />, document.getElementById("root"));
