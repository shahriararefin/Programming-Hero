import { useState } from "react"

function Team(){

    const[team, setTeam]= useState(11);
    
    const handleAdd = () =>{
        const newTeam = team+1;
        setTeam(newTeam);
    }
    const handleRemove = () =>{
        const newTeam = team-1;
        setTeam(newTeam);
    }

    const teamStyle = {
        border: '2px solid white',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team} </h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}

export default Team