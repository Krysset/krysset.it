import React from "react";
import NavHeader from "./NavHeader";
import NavItem from "./NavItem";
import NavSubItem from "./NavSubItem";

function nav() {
	return (
		<nav>
			<NavHeader text="Krysset.IT" />
			<NavItem name="Notes" location="/notes">
				<NavSubItem name="Math" location={"/notes/math"} />
				<NavSubItem name="Test" location={"/notes/test"} />
			</NavItem>
			<NavItem name="Big Test" location={"/bigtest"}>
				<NavSubItem name="I EXIST" location={"/ornot"} />
			</NavItem>
			<NavItem
				name=""
				location=""
				style={{ flexGrow: 3, visibility: "hidden" }}
			></NavItem>
		</nav>
	);
}

export default nav;
