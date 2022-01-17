import React from 'react'

export const Names = ({formData, setForm, navigation}) => {
    const {firstName, lastName, nickName} = formData;
    return (
        <div className=" w-4/5 sm:w-1/3  m-auto flex flex-col justify-start">
            <h1 className=" text-lg text-black font-bold mb-4">Names</h1>
            <div className="w-full mb-4">
                <input type="text"
                className="w-full border-2 py-2 px-4"
                placeholder="First Name"
                name="firstName"
                value={firstName} 
                onChange={setForm}/>
            </div>
            <div className="w-full mb-4">
                <input type="text"
                className="w-full border-2 py-2 px-4"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={setForm}/>
            </div>
            <div className="w-full mb-4">
                <input type="text"
                className="w-full border-2 py-2 px-4"
                placeholder="Nick Name"
                name="nickName"
                value={nickName}
                onChange={setForm} />
            </div>
            <button 
            className="w-full mt-1 bg-blue-500 py-2 px-4 uppercase font-lg text-white border-2 border-blue-500"
            onClick={() => navigation.next()}>Next</button>
        </div>
    )
}
