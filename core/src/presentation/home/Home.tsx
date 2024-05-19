import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../Layout";

function HomeContent() {
	return (
		<>
			<h1>Hello, world!</h1>
			<Link to="/about">About</Link>
		</>
	);
}

export default function Home() {
	return <Layout content={<HomeContent />} />;
}
