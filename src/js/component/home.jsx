import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	//Hook de React
	//const [state, setState] = useState ("Valor predeterminado")
	const [nuevaTarea, setNuevaTarea] = useState("")
	const [tareas, setTareas] = useState(["Limpiar la casa", "Lavar la ropa sucia", "Ir al supermercado"])

	//Declaro mi Funcion
	const handleClick = () => {
		setTareas([...tareas, nuevaTarea]);
	}


	//Funcion que me permita borrar una tarea
	const borrarTarea = (indice) => {
		//Filtra todos los elementos menos el que tenga el indice que recibo.
		const listaNueva = tareas.filter((tarea, i) => i !== indice);
		setTareas(listaNueva);
	}


	// funcion de js que maneja eventos.
	const handleChange = (evento) => {
		//event.target.value
		setNuevaTarea(evento.target.value);
	}

	return (
		<div className="text-center" >
			<div className="text-center mt-5">
				<h1>
					<strong>Lista de Tareas</strong>
				</h1>
			</div>
			<div className="container contenedorDeTarea">
				<div className="d-flex gap-2">
					<input type="text" placeholder="Quieres añadir una Tarea?" className="form-control" onChange={handleChange} />
					<button
						onClick={handleClick} className="btn">
						Agregar<br></br>Tarea
					</button>
				</div>
				<h4> Tareas: {nuevaTarea}</h4>
				<div className="contenedor">
					<ul className="list-group">
						{tareas.map((tarea, indice) => {
							return (
								<li className={
									`list-group-item d-flex justify-content-between align-items-center ${indice % 2 === 0 ? "light-bg-subtle" : "bg-secondary"}`
									}>
									{tarea} 
									< IoMdClose 
									className="IoMdClose" onClick={() => borrarTarea(indice)} />
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div >
	);
};

export default Home;
