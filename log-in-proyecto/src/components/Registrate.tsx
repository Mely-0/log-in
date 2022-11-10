
import { FaExpeditedssl } from "react-icons/fa";
import { useEffect } from 'react';
export const Registrate = () => {

    const handleSubmit = (e: any) => {

        const data = JSON.parse(localStorage.getItem('user') || '[]')
        e.preventDefault()
        data.push({
            name: e.target.user.value,
            pass: e.target.pass.value,
            rol: e.target.rol.value

        })
        console.log(data)
        localStorage.setItem('user', JSON.stringify(data));

    }

    useEffect(() => {
        const data: any = [{
            name: 'admin',
            pass: '123456',
            rol: 'admin'

        },
        {
            name: 'empleado',
            pass: '123456',
            rol: 'empleado'

        }]

        localStorage.setItem('user', JSON.stringify(data));
    }, [])
    
    const buscarid =(user: any)=>{
        for (const i in localStorage) {
            if (localStorage[i] == 'user'){
                return  user
            }
        }

    }

    
return (
<div className='contenido-1'>
            <div className="header-1">
                <FaExpeditedssl className="icono-1" />
            </div>
            <form className="formulario" onSubmit={handleSubmit}>
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
                <div className="botones">
                    <button  className="btn-a-1" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
)
}
