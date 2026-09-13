function Labib({number, name, description, address}) {
    return(
        <> 
        <h1 style={{ color: 'blue' }}>Hello My Name is {name}</h1>
        <h2>{number}</h2>
        <p style={{ color: 'green' }}>{description}</p>
        <p>{address}</p>
        
         </>
    )
}
export default Labib