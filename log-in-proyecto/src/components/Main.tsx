import { useEffect } from "react";
import { FaExpeditedssl } from "react-icons/fa";


export const Main = () => {
    const handleSubmit = (e: any) => {
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
        e.preventDefault()
    }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user') || '{}')
        console.log(data);
    }, [])

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
