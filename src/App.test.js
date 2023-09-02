import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "./App.css";
import renderer from "react-test-renderer";
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./components/Header";
import AppClass from "./App-Class";
configure({ adapter: new Adapter() });

describe("App Component Testing", () => {
	// #0. Snapshot Testing.
	test("Snapshot testing for APP component", () => {
		const AppComponent = renderer
			.create(
				<Router>
					<App />
				</Router>,
			)
			.toJSON();
		expect(AppComponent).toMatchSnapshot();
	});
	// #1.1.Render Whole Application
	test("Render App Component", () => {
		const AppComponent = mount(
			<Router>
				<App />
			</Router>,
		);
	});
	// #1.2. Render Isolated component
	test("Render App Component", () => {
		shallow(<App />);
	});
	// #2.1. Testing the elements
	test("Render h1 element", () => {
		let app = shallow(<App />);
		let hello = <h1>Hello</h1>;
		expect(app.contains(hello)).toEqual(true);
	});
	// #2.2.Test elements
	test("Render p element", () => {
		let app = shallow(<App />);
		expect(app.find("p").text()).toBe("Venkatesh");
	});
	// #2.3.Test sub components
	test("Render Header Component", () => {
		shallow(<Header />);
	});
	// #3.1 Testing state in class components
	test("testing state in class Component", () => {
		let app = shallow(<AppClass />);
		expect(app.state("username")).toBe("Venkatesh");
	});
	// #3.2 Testing state in functional components
	test("testing state in class Component", () => {
		let app = shallow(<App />);
		expect(app.find("p").text()).toBe("Venkatesh");
	});
	// #4.1 Testing state after updating in class components
	test("testing state in class Component", () => {
		let app = shallow(<AppClass />);
		let button = app.find("button");
		button.simulate("click");
		expect(app.find("p").text()).toBe("Vivek");
	});
	// #4.2 Testing state after updating in functional components
	test("testing state in class Component", () => {
		let app = shallow(<App />);
		let button = app.find("button");
		button.simulate("click");
		expect(app.find("p").text()).toBe("Vivek");
	});
	// #5. Debugging and Testing
	test("Debugging", () => {
		let app = shallow(<App />);
		// console.log(app.debug());
		app.find("h1").forEach((heading, index) => {
			if (index === 1) {
				expect(heading.text()).toBe("404 Not Found!");
			}
		});
		expect(app.find("h1").first().text()).toBe("Hello");
	});
});
