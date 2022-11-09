
export const Main = () => {
return (
<div className='contenido'>
<div className='input'>
		<label className='input-label'>Full name</label>
	<input type="text" className='input-field' value="Alexander Parkinson" required/>
</div>
	<div className='input'>
		<label className='input-label'>Email</label>
		<input type="text" className='input-field 'value="vlockn@gmail.com" required/>
</div>
<div className='input'>
	<label className='input-label'>Password</label>
	<input type="password" className='input-field' required/>
</div>
<div>
<label>Selecciona tu usuario:</label>
    <select name="favoriteOnly" id="favoriteOnly">
    <option>Administrador</option>
    <option>Empleado</option>
    </select>
</div>
<button>Crear</button>
<button>Acceder</button>
</div>
)
}
