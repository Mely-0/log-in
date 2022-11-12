import { useState } from "react";
import { useEffect } from "react";
import { FaExpeditedssl } from "react-icons/fa";
import './css/styles.css';

export const Main = () => {
    const handleSubmit = (e: any) => {
        let save: boolean= false;
        

        const data = JSON.parse(localStorage.getItem('user') || '{}')
        e.preventDefault()

        const name:string = e.target.user.value;
        console.log(name);

        const password:string = e.target.pass.value;
        console.log(password)

        for(let i = 0; i < data.length; i++){
            if(data[i].name == name && data[i].pass == password){
            save= true;
            

                if(save && data[i].rol=== "empleado"){
                    window.location.href = "/Enterprises";
                    
                } else{

                    if(save && data[i].rol=== "Admin"){
                        window.location.href = "/Registrate";
                    }
                    
                }
            }
        }
}

    return (
        <div className='contenido'>
            <div className="header">
                < FaExpeditedssl className="icono" />
            </div>
            <form className="formulario" onSubmit={handleSubmit}>
                <div className='input'>
                    <label className='input-label'>Name</label>
                    <input type="text" name='user' className='input-field' placeholder="Alexander Parkinson" />
                </div>

                <div className='input'>
                    <label className='input-label'>Password</label>
                    <input type="password" name='pass' className='input-field' />
                </div>
                <div className="botones">
                    <button className="btn-a" type="submit">Acceder</button>
                </div>
            </form>
        </div>

    )
}
