
import { FaExpeditedssl } from "react-icons/fa";
import { useEffect , useState } from 'react';
import './css/styles.css';
import { Enterprises } from "./Enterprises";
export const Registrate = () => {
    
    const[marcadouno, setMarcadouno]= useState<boolean>(false);
    const[marcadodos, setMarcadodos]= useState<boolean>(false);
    const[marcadotres, setMarcadotres]= useState<boolean>(false);
    const[input, setInput]= useState<string>("");

    
    const checkbox = document.getElementById('vehicle1',) as HTMLInputElement | null;
    const checkbox1 = document.getElementById('vehicle2',) as HTMLInputElement | null;
    const checkbox2 = document.getElementById('vehicle3',) as HTMLInputElement | null;
    
    const empresauno =( e:any)=>{
        
        if (checkbox != null) {
            // ✅ Set checkbox checked
            checkbox.checked = false;
        }
        
        
        if (marcadouno) {
            // ✅ Set checkbox checked
            setMarcadouno(false)
            setInput("")
        }else{
            setMarcadouno(true)
            if(marcadouno){
            
            const setInput: string= (e.target.vehicle1.value)
            console.log(setInput)
            }
        }
    }
    
    const empresados =( e:any)=>{
        
        if (checkbox1 != null) {
            // ✅ Set checkbox checked
            checkbox1.checked = false;
        }
        
        
        if (marcadodos) {
            // ✅ Set checkbox checked
            setMarcadodos(false)
        }else{
            setMarcadodos(true)
        }
    }
    const empresatres =( e:any)=>{

        if (checkbox2 != null) {
            // ✅ Set checkbox checked
            checkbox2.checked = false;
        }


        if (marcadotres) {
            // ✅ Set checkbox checked
            setMarcadotres(false)
        }else{
            setMarcadotres(true)
        }
    }
    
    console.log(marcadouno, marcadodos, marcadotres);


    const handleSubmit = (e: any) => {
        const data = JSON.parse(localStorage.getItem('user') || '[]')

        let datas= [...data, 
            {
                name: e.target.user.value,
                pass: e.target.pass.value,
                rol: e.target.rol.value,
                enterprises: {"Empresa-1": marcadouno,
                            "Empresa-2":marcadodos,
                            "Empresa-3":marcadotres}
                        }]
                        console.log(data)
                        
                        localStorage.setItem('user', JSON.stringify(datas));
                        
                        e.preventDefault()
    }

/*     useEffect(() => {
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
    }, [data])
    
 */
    
    
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
                    <label className='input-label-1'>Rol</label>
                    <input type="text" name='rol' className='input-field-1' />
                </div>
                    <div className="opcion">
                        <input checked={marcadouno} type="checkbox" name="vehicle1" value="Empresa-1" onChange={empresauno}/>
                        <label className="vehicle1"> Empresa-1</label>
                    </div>
                    <div className="opcion">
                        <input checked={marcadodos} type="checkbox" id="vehicle2" name="vehicle2"  value="Empresa-2" onChange={empresados}/>
                        <label className="vehicle2"> Empresa-2</label>
                    </div>
                    <div className="opcion">
                        <input checked={marcadotres}  type="checkbox" id="vehicle3" name="vehicle3"   value="Empresa-3" onChange={empresatres}/>
                        <label className="vehicle3"> Empresa-3</label>
                    </div>
                <div className="botones-1">
                    <button  className="btn-a-1" type="submit">Registrarse</button>
                </div>
            </form>
        </div>
)
}

{/* </div>
                        <div className="opcion">
                        <input  type="checkbox" id="vehicle2" name="vehicle2"  value="Empresa-2"/>
                        <label className="vehicle2"> Empresa-2</label>
                        </div>
                        <div className="opcion">
                        <input   type="checkbox" id="vehicle3" name="vehicle3"   value="Empresa-3"/>
                        <label className="vehicle3"> Empresa-3</label>
                        </div>
*/}