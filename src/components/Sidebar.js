import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Projects from "./Projects";
import Project from "./Project";
import Topics from "./Topics";
import GithubUsers from "./GithubUsers";
import YoutubeUsers from "./YoutubeUsers";

const routes = [
	{
		path: "/projects/:id",
		component: () => <Project />,
	},
	{
		path: "/projects",
		component: () => <Projects />,
	},
	{
		path: "/topics",
		component: () => <Topics />,
	},
	{
		path: "/github-users",
		component: () => <GithubUsers />,
	},
	{
		path: "/youtube-users",
		component: () => <YoutubeUsers />,
	},
];

export default function SidebarExample() {
	return (
		<Router>
			<div style={{ display: "flex" }} className="fixed-left">
				<div
					style={{
						padding: "10px",
						width: "20%",
						height: "100vmin",
						background: "#f0f0f0",
					}}>
					<ul style={{ listStyleType: "none", padding: 0 }}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<NavLink to="/projects" activeStyle={{ color: "maroon" }}>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink to="/topics" activeClassName="text-danger">
								Topics
							</NavLink>
						</li>
						<li>
							<NavLink to="/github-users" activeClassName="text-danger">
								Github Users
							</NavLink>
						</li>
						<li>
							<NavLink to="/youtube-users" activeClassName="text-danger">
								Youtube Users
							</NavLink>
						</li>
					</ul>
				</div>

				<div style={{ flex: 1, padding: "10px" }}>
					<Suspense fallback={<h4>Loading...</h4>}>
						<Switch>
							{routes.map((route, index) => (
								<Route key={index} path={route.path} exact={route.exact} component={route.component} />
							))}
						</Switch>
					</Suspense>
				</div>
			</div>
		</Router>
	);
}
