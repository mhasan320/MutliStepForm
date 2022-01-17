import React from 'react'

export const Address = ({formData, setForm, navigation}) => {
    const {address, city, state, zip} = formData;
    return (
        <div className=" w-4/5 sm:w-1/3  m-auto flex flex-col justify-start">
        <h1 className=" text-lg text-black font-bold mb-4">Address</h1>
        <div className="w-full mb-4">
            <input type="text"
            className="w-full border-2 py-2 px-4"
            placeholder="Address"
            name="address"
            value={address} 
            onChange={setForm}/>
        </div>
        <div className="w-full mb-4">
            <input type="text"
            className="w-full border-2 py-2 px-4"
            placeholder="City"
            name="city"
            value={city} 
            onChange={setForm}/>
        </div>
        <div className="w-full mb-4">
            <input type="text"
            className="w-full border-2 py-2 px-4"
            placeholder="State"
            name="state"
            value={state} 
            onChange={setForm}/>
        </div>
        <div className="w-full mb-4">
            <input type="number"
            className="w-full border-2 py-2 px-4"
            placeholder="Zip"
            name="zip"
            value={zip} 
            onChange={setForm}/>
        </div>
        <div className="flex  mt-1">
        <button 
        className=" w-2/4 mr-4 bg-green-500 py-2 px-4 uppercase font-lg text-white border-2 border-green-500"
        onClick={() => navigation.previous()}>Previous</button>
        <button 
        className=" w-2/4 bg-blue-500 py-2 px-4 uppercase font-lg text-white border-2 border-blue-500"
        onClick={() => navigation.next()}>Next</button>
        </div>
    </div>
    )
}
