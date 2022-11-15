import'./css/styles3.css'

export const Empresa1 = () => {
return (
    <div className='comtenedor-promax'>
        <div className='header'>
            <h2>Conversion de divisas</h2>
        </div>
        <div className='conversion'>
            <div className='importe'>
        <label className='input-label'>Importe</label>
        <input type="text" name='user' className='input-field' placeholder="$" />
    </div>
    
    <div className='opciones'>
            <label className='input-label'>De:</label>
            <select className='select' name="select">
                <option value="value1">USD-Dolar Estadounidense</option>
                <option value="value2" selected> COP-Peso Colombiano</option>
                <option value="value3">EUR-Euro</option>
            </select>
        </div>
        <div className='opciones'>
            <label className='input-label'>A:</label>
            <select className='select' name="select">
                <option value="value1">EUR-Euro</option>
                <option value="value2" selected> USD-Dolar Estadounidense</option>
                <option value="value3">COP-Peso Colombiano</option>
            </select>
        </div>
        
        <div className='resultado'>
            <label className='input-label'>Resultado</label>
            <input type="text" name='user' className='input-field' placeholder="$" />
        </div>
    </div> 
        <div className='botones'>
            <button className='btn-a' type="submit">Acceder</button>
        </div>
</div>
)
}
