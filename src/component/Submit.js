import React from 'react'

export const Submit = ({formData}) => {
    const {
        firstName,
        lastName,
        nickName,
        address,
        city,
        state,
        zip,
        phone,
        email
    } = formData;
    return (
        <div className=" w-4/5 sm:w-1/3  m-auto flex flex-col justify-start">
            <h1 className=" text-lg text-black font-bold mb-4">Full Details of your information</h1>
            <h4 className="text-lg text-slate-500 pb-1">Name</h4>
            <hr className="mb-2"></hr>
            <span className="mb-2">First Name : {firstName}</span>
            <span className="mb-2">Last Name : {lastName}</span>
            <span className="mb-2">Nick Name : {nickName}</span>
            <br/>
            <h4 className="text-lg text-slate-500 pb-1">Address</h4>
            <hr className="mb-2"></hr>
            <span className="mb-2">Address : {address}</span>
            <span className="mb-2">City : {city}</span>
            <span className="mb-2">State : {state}</span>
            <br/>
            <h4 className="text-lg text-slate-500 pb-1">Contact</h4>
            <hr className="mb-2"></hr>
            <span className="mb-2">Phone : {phone}</span>
            <span className="mb-2">Email : {email}</span>
        </div>
    )
}
