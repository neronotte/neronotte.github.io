import React from "react";
import "./Layout.scss";

import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export interface LayoutProps {
	content: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
	const navigate = useNavigate();

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="/" className="header-logo">
						<span>_neronotte</span> <em>d</em>
						<small>igital</small>
						<em>log</em>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#" onClick={(o) => navigate("/")}>
								Home
							</Nav.Link>
							<Nav.Link href="#" onClick={(o) => navigate("/about")}>
								Who is _neronotte?
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container className="mt-4">{props.content}</Container>
		</>
	);
}
