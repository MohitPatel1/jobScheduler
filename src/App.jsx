// import { useEffect } from 'react'
// import { useState } from 'react'
// import chaiyya_chaiyaa from '../audios/chalChaiyaChaiya.mp3'

// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }

import React from 'react';
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

export default function App() {
  const [TAT, setTAT] = useState([]);
  const [WT, setWT] = useState([]);
  const [aTAT, setaTAT] = useState([]);
  const [aWT, setaWT] = useState([]);
  const [FT, setFT] = useState([]);
  const { register, handleSubmit, watch ,formState: { errors } } = useForm();
  const onSubmit = (data) => {S
    setTAT()
    console.log(data);     
  }
  console.log(watch(register));

  const add = () => {

  }
  // console.log(errors);
  
  return (

    <div className="h-screen bg-blue-300">	    	
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full h-full justify-center items-center gap-1">
                <h1>OS Job Scheduler</h1>		
                <input type="number" placeholder="BT" {...register("BT", {required: true, min: 1, maxLength: 80})} />
                <input type="number" placeholder="AT" {...register("AT", {required: true, min: 0, maxLength: 100})} />
                <input type="number" placeholder="Over Head" {...register("OverHead", {required: true})} />                
                <input type="submit"></input>
                {/* <button onClick={calculate}> Calculate </button> */}
              </form>				
                <h3>Average Waiting Time = {aWT}</h3>       
                <h3>Average Turn Around Time = {aTAT}</h3>         
		</div>
  );
}
