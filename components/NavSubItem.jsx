import React from "react";
import Link from "next/link";

function NavSubItem({ name, location, children }) {
	return (
		<li class="navsubitem">
			<a href={location}>{name}</a>
		</li>
	);
}

export default NavSubItem;
