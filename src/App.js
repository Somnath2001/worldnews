import React,{useState,useEffect} from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row,
     Col
} from "reactstrap";

import "./App.css"
import {BrowserRouter, Switch,} from "react-router-dom";
import Cards from "./Components/Cards";
import Headernews from "./Components/Headernew";
import Footer from "./Components/footer";

import Inputform from "./Components/Inputform";
import axios from "axios";
// require('dotenv').config()

function App() {

  const [details1,setDetails1] = useState("");
  const [details2,setDetails2] = useState("");
  const [details3,setDetails3] = useState("");
  const [string, setString] = useState("");
  
  
  useEffect(() => {
    

     const apikey = process.env.REACT_APP_API_KEY;
    const option ={
     method: 'GET',
     url: 'https://free-news.p.rapidapi.com/v1/search',
     params: {q:`${string}`, lang: 'en'},
     headers: {
       'x-rapidapi-key': `${apikey}`,
       'x-rapidapi-host': 'free-news.p.rapidapi.com'
     }
   };
   
   axios.request(option).then((response) =>  {
   setDetails1(response.data.articles[1])
   setDetails2(response.data.articles[2])
   setDetails3(response.data.articles[5])
     console.log(response.data);
   
   })
   .catch(function (error) {
     console.error(error);
   });

   
   },[string])

return(
<div>
<body className="body">

<Headernews  />

<Inputform search={(text) => setString(text)}  />

<BrowserRouter>
        <Switch>
          {/* <Route
            path="/Cards"
            exact
            render={(props) => <Cards{...props} details={details} />}
          /> */}
          <Cards details={details1}/>
</Switch>
</BrowserRouter>          
        

<h1 className="text-center">{details1.topic}</h1>

<div>{details1.summary}</div> 
              <p></p>
              <p>{details1.author}</p>
              <Row >
                <Col >
                <img className="image1" src={details1.media} style={{ height:"300px", Width:"200px",
  position:"relative",          
            }} />
<p>{details2.title}</p>
<img className="image1" src={details3.media} style={{ height:"300px", Width:"200px",
  position:"relative",          
            }} />
               
                </Col>
              </Row>
              
              <div>{details3.title}</div>

{/* <h1 className="text-center">{details2.topic}</h1> */}

<div>{details2.summary}</div> 
              <p></p>
              <p>{details2.author}</p>
              <img className="image1" src={details2.media} style={{ height:"300px", Width:"200px",
  position:"relative",          
            }} />





<Footer />

</body>

</div>

) }
 export default App;   

