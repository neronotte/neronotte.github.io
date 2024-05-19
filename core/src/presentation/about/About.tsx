import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

function AboutContent() {
	return (
		<>
			<h1>Welcome to _neronotte digital log!</h1>
		</>
	);
}

export default function About() {
	return <Layout content={<AboutContent />} />;
}
