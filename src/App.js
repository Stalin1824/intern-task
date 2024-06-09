import React, { useState } from 'react'
import air from "./image/brushair.jpg"
import hairing from "./image/hairing.jpg"
import hd from "./image/hd1.jpg"
import saree from "./image/makeup.jpg"
import "./App.css"
const App = () => {

  const [a, seta] = useState(0)
  const [b, setb] = useState(0)
  const [c, setc] = useState(0)
  const [d, setd] = useState(0)
  const [f,setf]=useState("")
  function handelecheck1(e) {
    if (e.target.checked) {
      seta(parseInt(e.target.value))
    }
    else if (e.target.checked == false) {
      seta(0)
    }
  }

  function handelecheck2(e) {
    if (e.target.checked) {
      setb(parseInt(e.target.value))
    } else if (e.target.checked == false) {
      setb(0)

    }
  }
  function handelecheck3(e) {
    if (e.target.checked) {
      setc(parseInt(e.target.value))
    } else if (e.target.checked == false) {
      setc(0)

    }
  }
  function handelecheck4(e) {
    if (e.target.checked) {
      setd(parseInt(e.target.value))
      console.log(d)
    } else if (e.target.checked == false) {
      setd(0)
    }
  }
  let ans=(a+b+c+d)
  function handeladd(e){
      if(ans===0){
         setf("")
      }else{
        setf(ans)
      }
  }
  console.log(f)
  return (
    <div>
      <header>
        <div className='container'>
          <div className='header-wrapper'>
            <h1>Packages</h1>
          </div>
        </div>
      </header>
      <section>
         <div className='container-1'>
          <div className='section-wrapper'>
            <h1>Makeup Packages</h1>
            <div className='firstrow'>
              <div className='hair'>
               <h1 className='head' style={{color:'gray'}}>High DefintionBridal Makeup</h1>
                <img src={hd} htmlFor='1' width='100%'></img>  <br></br>
                <div className='price'>
                  <input className='input1' type='checkbox' value={1000} onChange={handelecheck1} id='1'></input>
                  <div>
                    <h4 className='h1'>High  DefintionBridal Makeup</h4>
                    <h2 className='h2'>Price-Rs.1000</h2>
                  </div>
                </div>
              </div>
              <div className='hair'>
                <h1 className='head' style={{color:'gray'}}>AirBrush Bridal Makeup</h1>
                <img src={air} htmlFor='2' width='100%' className='i1'></img><br></br>
                <div className='price'>
                  <input type='checkbox' value={50000} className='input1' onChange={handelecheck2} id='2'></input>
                  <div>
                    <h4 className='h1'>AirBrush Bridal Makeup</h4>
                    <h2 className='h2'>Price-Rs.50000</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
<section>
        <div className='container-1'>
          <div className='section-wrapper'>
            
            <div className='firstrow'>
              <div className='hair'>
              <h1 className='head' style={{color:'gray'}}>Hairstyle</h1>

                <img src={hairing} htmlFor='1' width='100%'></img>  <br></br>
                <div className='price'>
           <input type='checkbox' value={5000}  onChange={handelecheck3} id='3'></input>
                  <div>
                  <h4 className='h1'>Hair Makeup</h4> 
                  <h2 className='h2'>Price-Rs.5000</h2>
                  </div>
                </div>
              </div>
              <div className='hair'>
              <h1 className='head' style={{color:'gray'}}>Sareedrapping</h1>
                
                <img src={saree} htmlFor='2' width='100%' className='i1'></img><br></br>
                <div className='price'>
                <input type='checkbox' value={500}  onChange={handelecheck4} id='4'></input>
                  <div>
                  <h4 className='h1'>Sareedrapping Makeup</h4> 
                  <h2 className='h2'>Price-Rs.500</h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className='align'>
      <button className='btn' onClick={handeladd}>calcuate</button>
      </div> 
      <h1 className='pri'>Packages Price:{f}</h1>  

   

    </div>
  )
}
export default App