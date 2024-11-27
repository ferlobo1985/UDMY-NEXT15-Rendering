'use server'
import axios from "axios";

export async function counterTrigger() {
    console.log('COUNTER TRIGGER');
}

export async function addEmployee(prevState,formData){
    // await new Promise((resolve)=>setTimeout(resolve,2000))
    console.log(prevState)

    try{
        if(formData.get('fullname')=== ''){
            throw new Error('The name is required')
        }

        await axios.post('http://localhost:3004/employees',{
            fullname: formData.get('fullname'),
            position: formData.get('position'),
            age: formData.get('age'),
        });

        return { success:true, message:'Name added'}
    } catch(e){
        return { success:false, message:e.message}
    }
}