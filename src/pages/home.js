import '../pages/myStyles.css';
import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  // Function to handle addition
  const handleAddition = () => {
    setCount(count + 1);
  };

  // Function to handle subtraction
  const handleSubtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    
    
  };
  //SECOND FUNCTION
  const [count2, setCount2] = useState(0);

  // Function to handle addition
  const handleAddition2 = () => {
    setCount2(count2 + 1);
  };

  // Function to handle subtraction
  const handleSubtraction2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }

   
    
  };
 //THIRD FUNCTION
 const [count3, setCount3] = useState(0);

 // Function to handle addition
 const handleAddition3 = () => {
   setCount3(count3 + 1);
 };

 // Function to handle subtraction
 const handleSubtraction3 = () => {
   if (count3 > 0) {
     setCount3(count3 - 1);
   }

 };
  //FORTH FUNCTION
  const [count4, setCount4] = useState(0);

  // Function to handle addition
  const handleAddition4 = () => {
    setCount4(count4 + 1);
  };
 
  // Function to handle subtraction
  const handleSubtraction4 = () => {
    if (count4 > 0) {
      setCount4(count4 - 1);
    }
 
  };

  //FIFTH FUNCTION
  const [count5, setCount5] = useState(0);

  // Function to handle addition
  const handleAddition5 = () => {
    setCount5(count5 + 1);
  };
 
  // Function to handle subtraction
  const handleSubtraction5 = () => {
    if (count5 > 0) {
      setCount5(count5 - 1);
    }
 
  };

    return  <center className="items-container">
       
       <div className="items">
            <div className='sub-container'>
          <a href="#"  className="link">Peak Filled Milk Powder(400g) x1 -----  Market Price : GHS 70.00 || Save : GHS 2.71<br/><span className='currency'>GHS 67.29</span></a>
         <div className="buttons"> 
             <input type="button" className="button" onClick={handleSubtraction} value="-"/>
            <span> <input type="text" value={count} className="count" /></span>
            <input type="button" className="button"  onClick={handleAddition} value="+"/>
         </div>
         </div> 
          
         
        <hr></hr>
        <div className='sub-container'>
          <a href="#"  className="link">Peak Filled Milk Powder(400g) x1 -----  Market Price : GHS 70.00 || Save : GHS 2.71<br/><span className='currency'>GHS 54.00</span></a>  
          <div className="buttons"> 
             <input type="button" className="button" onClick={handleSubtraction2} value="-"/>
            <span> <input type="text" value={count2} className="count" /></span>
            <input type="button" className="button"  onClick={handleAddition2} value="+"/>
         </div>
        </div>

        <hr></hr>
        <div className='sub-container'>
            <a href="#"  className="link">Dano Filled Milk (400g). x6 ----- Market Price : GHS 348.00 || Save : GHS 18.00<br/><span className='currency'>GHS 330.00</span></a>  
            <div className="buttons"> 
             <input type="button" className="button" onClick={handleSubtraction3} value="-"/>
            <span> <input type="text" value={count3} className="count" /></span>
            <input type="button" className="button"  onClick={handleAddition3} value="+"/>
         </div>
       </div>

   
        <hr></hr>
        <div className='sub-container'>
            <a href="#"  className="link">Dano Filled Evaporated Milk (170Kg) x12 ----- Market Price : GHS 96.00 || Save : GHS 12.00<br/><span className='currency'>GHSGHS 84.00</span></a>  
            <div className="buttons"> 
             <input type="button" className="button" onClick={handleSubtraction4} value="-"/>
            <span> <input type="text" value={count4} className="count" /></span>
            <input type="button" className="button"  onClick={handleAddition4} value="+"/>
         </div>
      </div>
        
        
        <hr></hr>
        <div className='sub-container'>
            <a href="#"  className="link">Carnation milk (160Kg) X 24. ----- Market Price : GHS 192 || Save : GHS 36.09<br/><span className='currency'>GHS 155.91</span></a>  
            <div className="buttons"> 
             <input type="button" className="button" onClick={handleSubtraction5} value="-"/>
            <span> <input type="text" value={count5} className="count" /></span>
            <input type="button" className="button"  onClick={handleAddition5} value="+"/>
         </div>
        </div>

      
            
      
        
        
        
        <div className="form_items">
            <div className='wrapper'>
            <form action="" method="post">

            <div className="name">
               <div className="cont-form">
                <label htmlFor="fname">First Name
</label>
              
                <input type="text" className="Fname"/>
               </div>
               
               <div className="cont-form">
                <label htmlFor="Lname">Last Name
</label>
           
                <input type="text" className="Lname"/>
               </div>
            </div>

            <div className="cont-form">
                <label htmlFor="Gmail">Email Address
</label>
           
                <input type="email" className="email"/>
               </div>
               
               <div className="cont-form">
                <label htmlFor="Address" >Delivery Address
</label>
           
                <input type="text" className="Address"/>
               </div>

               <div className="cont-form">
              
              
                <input type="submit" value="Pay GHS 0.00" className="pay"/>
                
               </div>
            </form>
            </div>
            </div>
            </div>
     
    </center>;
    
    
  };
  
  export default Home ;

//   var total=0;
//   bp=1;
//   bm=1;

 
//   addEventListener('click',(e)={
   
//    total : e.target.length

//   });


 

//   buadd.addEventListener('click',(e)={
   
//   total + pb

//    });
 
//    busub.addEventListener('click',(e)={
   
//     total - bm

//    });
  

