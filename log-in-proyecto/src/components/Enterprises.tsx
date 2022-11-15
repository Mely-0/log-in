import { useParams } from "react-router-dom"
import Select from 'react-select';
export const Enterprises = () => {
    const {name} = useParams()
    console.log(name);
    
    const data = JSON.parse(localStorage.getItem('user') || '{}')
    const result:any = data.find((dato:any)=>dato.name === name)

    console.log(result);
    // const handleSelect = ()=>{
    //     result.enterprises.map((emp:any)=>(
            
    //         ))
    // }
    
return (
<div className='selectdiv' >
    <h1>hola {name}</h1> 
    
    <Select
    
    options={
        result.enterprises.map((emp:any)=>(
            {
                label: emp,value:emp
            }
        ))
    }
    />
</div>
)
}

