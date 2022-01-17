import React from 'react'
import { Accordian } from './Accordian'

export const Review = ({formData, navigation}) => {
    const {go} = navigation;
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
        <div className=" w-4/5 sm:w-1/3 m-auto flex flex-col justify-start">
            <h1 className=" text-lg text-black font-bold mb-4">Review</h1>
            <Accordian summary="Name"
            details={[
                {'First Name': firstName},
                {'Last Name': lastName},
                {'Nick Name': nickName}
            ]}
            id="one"
            collapse="collapseOne"
            go= {go}
            />

            <Accordian summary="Address"
            details={[
                {'Address': address},
                {'City': city},
                {'State': state},
                {'Zip': zip}
            ]}
            id="two"
            collapse="collapseTwo"
            go= {go}/>

            <Accordian summary="Contact"
              details={[
                {'Phone': phone},
                {'Email': email}
            ]}
            id="three"
            collapse="collapsethree"
            go= {go}/>
            <button
            className="w-full mt-3 uppercase bg-green-500 border-green-500 border-2 py-3 px-4 text-white"
            onClick={()=> navigation.next()}>
                Submit
            </button>
        </div>
     
    )
}
