/* eslint-disable default-case */
import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import { Names } from './Names';
import {Address} from './Address';
import {Contact} from './Contact';
import {Review} from './Review';
import {Submit} from './Submit';


const defaultData = {
    firstName:'',
    lastName:'',
    nickName: '',
    address:'',
    city:'',
    state:'',
    zip:'',
    phone:'',
    email:''
}

const steps = [
    {id:'name'},
    {id:'address'},
    {id:'contact'},
    {id:'review'},
    {id:'submit'},
]
export const MutliStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step, navigation} = useStep({
        steps,
        initialStep: 0
    })

    const props = {formData, setForm, navigation};

    switch(step.id){
        case 'name':
            return <Names {...props}/>
        case 'address':
            return <Address {...props}/>
        case 'contact':
            return <Contact {...props}/>
        case 'review':
            return <Review {...props}/>
        case 'submit':
            return <Submit {...props}/>
    }

    return (
        <div>
            Hello world;
        </div>
    )
}
