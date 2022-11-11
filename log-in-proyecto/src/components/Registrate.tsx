
import { FaExpeditedssl } from "react-icons/fa";
import { useEffect , useState } from 'react';
import './css/styles.css';
import { Enterprises } from "./Enterprises";
export const Registrate = () => {
    
    const[marcado, setMarcado]= useState<boolean>(false);

    const tareaHecha =( e:any)=>{
    if(marcado){
        setMarcado(false)
    }else{
        setMarcado(true)
    }
    }
    const data = JSON.parse(localStorage.getItem('user') || '{}')
    const handleSubmit = (e: any) => {
        e.preventDefault()
        
        data.push({
            name: e.target.user.value,
            pass: e.target.pass.value,
            rol: e.target.rol.value,
           // empresas: e.tarjet.vehicle1.checked
        })
        console.log(data)
        console.log(111,e.tarjet.vehicle1.checked);
        
        localStorage.setItem('user', JSON.stringify(data));
        
    }

    useEffect(() => {
        const data: any = [{
            name: 'Admi',
            pass: '123456',
            rol: 'admin',
            enterprises: ['empresa-1, empresa-2,empresa-3']

        },
        {
            name: 'Franco',
            pass: '1234567',
            rol: 'empleado',
            enterprises: ['empresa-1, empresa-2']
        }]

        localStorage.setItem('user', JSON.stringify(data));
    }, [])
    

    
    
return (
<div className='contenido-1'>
            <div className="header-1">
                <FaExpeditedssl className="icono-1" />
            </div>
            <form className="formulario-1" onSubmit={handleSubmit}>
                <div className='input-1'>
                    <label className='input-label-1'>Name</label>
                    <input type="text" name='user' className='input-field-1' placeholder="Alexander Parkinson" />
                </div>

                <div className='input-1'>
                    <label className='input-label-1'>Password</label>
                    <input type="password" name='pass' className='input-field-1' />
                </div>

                <div className='input-1'>
                    <label className='input-label-1'>Empresa</label>
                    <input type="text" name='rol' className='input-field-1' />
                </div>
                <div className="seleccionar">
                        <div className="opcion">
                        <input checked={marcado} type="checkbox" id="vehicle1" name="vehicle1" onChange={tareaHecha} value="Empresa-1"/>
                        <label className="vehicle1"> Empresa-1</label>
                        </div>
                        <div className="opcion">
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Empresa-2"/>
                        <label className="vehicle2"> Empresa-2</label>
                        </div>
                        <div className="opcion">
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Empresa-3"/>
                        <label className="vehicle3"> Empresa-3</label>
                        </div>
                </div>
                <div className="botones-1">
                    <button  className="btn-a-1" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
)
}
