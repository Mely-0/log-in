
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
                window.location.href = `/Enterprises/${data[i].name}`;
                
            }else if (save && data[i].rol=== "Administrador")
            {
                window.location.href = "/Registrate";
            }
            else{

                alert("Estre usuario no esta registrado")

            }
        }
        }
}

    return (
        <div className='contenido'>
        <div className="header">
        </div>
        <div className="formu">
            <div className="logo">
            <h3>Login</h3>
            <p className="parrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. At, numquam.</p>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>

            <div className='input'>
                <input type="text" name='user' className='input-field' placeholder="Usuario" />
            </div>

            <div className='input'>
                <input type="password" name='pass' className='input-field' placeholder="password" />
            </div>
            <div className="botones">
                <button className="btn-a" type="submit">Acceder</button>
            </div>
        </form>
    </div>
    </div>

    )
}
