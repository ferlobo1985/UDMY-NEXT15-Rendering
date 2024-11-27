'use server'
import axios from "axios";

export async function counterTrigger() {
    console.log('COUNTER TRIGGER');
}

export async function addEmployee(formdata){
    await axios.post('http://localhost:3004/employees',{
      fullname: formdata.get('fullname'),
      position: formdata.get('position'),
      age: formdata.get('age'),
    })
}