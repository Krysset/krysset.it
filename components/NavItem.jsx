import React from "react";
import Link from "next/link";

function NavItem({ name, location, children }) {
	return (
		<div class="navitem hiddensublist">
			<Link href={location}>
				<a>{name}</a>
			</Link>
			<ul class="navsubitemlist">{children}</ul>
		</div>
	);
}

export default NavItem;
