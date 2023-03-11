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

			<NavItem name="Github" location={"/git"}>
				<NavSubItem name="Krysset.IT" location={"/git/kryssetit"} />
				<NavSubItem name="Notes" location={"/git/notes"} />
			</NavItem>
		</nav>
	);
}

export default nav;
