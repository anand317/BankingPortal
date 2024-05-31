// import React from 'react';
// import { useForm } from 'react-hook-form';

// function MyForm() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();

//   const onSubmit = data => {
//     console.log(data);
//   };

//   console.log(watch("example")); // you can watch individual input by passing the name of the input

//   return (
//     //<div style={{background:'red', maxWidth:'500px' }}>

// <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth:'500px'}}>
//       <div style={{ marginBottom: 10 }}>
//       <label>Full Name </label>
//       <input {...register("fname", { required: true })} placeholder="Enter thr fullname" />
//       {errors.example && <p>This field is required</p>}
//       </div>
      
//       <div style={{ marginBottom: 10 }}>
//         <label>Bank Name </label>
//         <input {...register("bname", { required: true })} placeholder="Enter bank number" />
//         {errors.example && <p>This field is required</p>}
//       </div>
      
//       <div style={{ marginBottom: 10 }}>
//           <label>Account Number </label>
//           <input {...register("aname", { required: true })} placeholder="Enter account number" />
//           {errors.example && <p>This field is required</p>}

//       </div>
      
//       <div style={{ marginBottom: 10 }}>
//       <label>Country </label>
//         <select {...register("gender")}>
//           <option value="female">United State</option>
//           <option value="male">India</option>
//           <option value="other">China</option>
//           <option value="male">Japan</option>
//           <option value="other">France</option>
//         </select>
//       {errors.example && <p>This field is required</p>}
//       </div>

//       <div style={{ marginBottom: 10 }}>
//           <label>PinCode </label>
//           <input {...register("pincode", { required: true })} placeholder="PinCode" />
//           {errors.example && <p>This field is required</p>}

//       </div>
      

//       <input type="submit" />
//     </form>
//     //</div>
    
//   );
// }

// export default MyForm;

import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UseDispatch } from "react-redux";
import { addBenificiary } from "../../utils/BenificiarySlice";

import "./styles.css";
import { useDispatch } from "react-redux";

const SignupSchema = yup.object().shape({
  fullName: yup.string().required(),
  bankName:yup.string().required(),
  accNumber: yup.number().required(),
  website: yup.string().url(),
  pinCode:yup.number().required()
});

function MyForm() {

  const dispatch=useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    dispatch(addBenificiary(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Full Name</label>
        <input {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Bank Name</label>
        <input {...register("bankName")} />
        {errors.bankName && <p>{errors.bankName.message}</p>}
      </div>
      <div>
        <label>Account Number</label>
        <input type="number" {...register("accNumber", { valueAsNumber: true })} />
        {errors.accNumber && <p>{errors.accNumber.message}</p>}
      </div>
      <div>
      <label>Country </label>
      <select {...register("country")}>
           <option value="us">United State</option>
                <option value="india">India</option>
          <option value="china">China</option>
          <option value="japan">Japan</option>
          <option value="france">France</option>
        </select>
      {errors.example && <p>This field is required</p>}
      </div>

      <div>
        <label>Pincode</label>
        <input type="number" {...register("pinCode", { valueAsNumber: true })} />
        {errors.pinCode && <p>{errors.pinCode.message}</p>}
      </div>

      <input type="submit" />
    </form>
  );
}

export default MyForm;

