import React, { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
import axios from "axios";
import Example, { Example2, Example3 } from "./Example";
// Comment below 3 variables while testing.
// const UsersData = new Request("/data.json");
// const TodoData = new Request("/todo.txt");
// const ContactData = new Request("/contact.md");

export default function YoutubeUsers() {
	const [ users, setUsers ] = useState([
		{ id: 1, name: "Venkatesh", website: "github.com" },
		{ id: 2, name: "Chinni", website: "github.com" },
		{ id: 3, name: "Vivek", website: "github.com" },
	]);
	const [ todo, setTodo ] = useState("");
	const [ contact, setContact ] = useState("");
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(({ data }) => {
				console.log(data);
				setUsers(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	const addUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		axios
			.post("https://jsonplaceholder.typicode.com/users", {
				data: JSON.stringify(newUser),
			})
			.then(({ data }) => {
				console.log(data);
			});
	};
	const updateUser = () => {
		let newUser = { name: "Venkatesh", website: "github.com" };
		axios
			.put("https://jsonplaceholder.typicode.com/users/10", {
				body: JSON.stringify(newUser),
			})
			.then(({ data }) => {
				console.log(data);
			});
	};
	const deleteUser = () => {
		axios.delete("https://jsonplaceholder.typicode.com/users/10").then(({ data }) => {
			console.log(data);
		});
	};
	return (
		<div>
			<h1>Youtube Users</h1>
			<Example />
			<Example2 />
			<Example3 />
			<button className="btn btn-primary" onClick={addUser}>
				Add User
			</button>
			<button className="btn btn-primary" onClick={updateUser}>
				Update User
			</button>

			<button className="btn btn-primary" onClick={deleteUser}>
				Delete User
			</button>
			<div className="d-flex justify-content-center flex-wrap">
				{users.map((user) => (
					<div className="m-3 p-3" key={user.id}>
						<img src="/logo192.png" alt="profile" />
						<h2>{user.name}</h2>
						<a href={`https://${user.website}`} target="_blank">
							Website Link
						</a>
					</div>
				))}
			</div>
		</div>
	);
}
