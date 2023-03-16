// import {useState , useEffect} from 'react';
import './App.css';
import Counmtriez from './components/Countries/Counmtriez';
import Header from './components/Header/Header';
import Post from './components/Post/Post';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Post></Post>
     <Counmtriez></Counmtriez>
    </div>
  );
}
// function LoadCountries(){
//   const [countries, setCountries]= useState([])
//   useEffect( () => {
//  fetch('https://restcountries.com/v3.1/all')
//  .then (res => res.json())
//  .then (data =>setCountries(data))
//   }
//    ,[])

//   return (
//     <div>
//       <h1> Visiting Every Country of the world</h1>
//        <h3>Available Countries : {countries.length}</h3>
//        <div className='dddv'>
//           {
//         countries.map(country =><Country population={country.population} name={country.name.common}></Country>)
//        }
//        </div>
     
//       </div>
//   )
// }



// function Country (props){

//   return(
//     <div className='compo'>
//        <h2>Name:{props.name}</h2>
//        <h3>Population:{props.population}</h3>
//     </div>
//   )

// }
export default App;
