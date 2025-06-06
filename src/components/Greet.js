

export const Greet=(props)=>{
    return (
    <div> 
        <h1>hello {props.name} {props.location}</h1>
        {props.children}
        <hr></hr>
        </div>
    )
}

//export default Greet