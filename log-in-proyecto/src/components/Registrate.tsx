
import { useState } from 'react';
import Select from 'react-select';
import './css/styles2.css';

const enterprises=[
    {
        label:'empresa-1',value:'empresa-1'
    },
    {
        label:'empresa-2',value:'empresa-2'
    },
    {
        label:'empresa-3',value:'empresa-3'
    }
]
export const Registrate = () => {
    const [opciones, setOpciones]= useState()
    console.log(opciones);
    
    const handleSubmit = (e: any) => {
        const data = JSON.parse(localStorage.getItem('user') || '[]')
        let datas= [...data, 
            {
                name: e.target.user.value,
                pass: e.target.pass.value,
                rol: e.target.rol.value,
                enterprises:opciones
            }]
                        
        localStorage.setItem('user', JSON.stringify(datas));  
    }
    const handleSelect=(e: any)=>{
    const arr = e.map((empre:any)=>{
    return empre.value;
    })
    setOpciones(arr)
    }
return (
    <div className='contenido-1'>
        <div className="header-1">
        </div>
        <div className="formu-1">
            <div className="logo-1">
            <h2>Registration</h2>
        </div>
        <form className="formulario-1" onSubmit={handleSubmit}>

            <div className='input-1'>
                <input type="text" name='user' className='input-field-1' placeholder="Usuario" />
            </div>

            <div className='input-1'>
                <input type="text" name='rol' className='input-field-1' placeholder="Rol" />
            </div>
            <div className='input-1'>
                <input type="password" name='pass' className='input-field-1' placeholder="password" />
            </div>
            <div className="input-check-1">
            <Select isMulti options={enterprises}
            onChange={handleSelect}
            />
            </div>
            <div className="botones-1">
                <button className="btn-a-1" type="submit">Acceder</button>
            </div>
        </form>
    </div>
    </div>
)
}

