import { MessageViewFeat } from "../features/MessageViewFeat";
import { NavbarFeat } from "../features/NavbarFeat";
import { SearchMailFeat } from "../features/SearchMailFeat";
import { SidebarFeat } from "../features/SidebarFeat";

import './HomePage.css';

export function HomePage() {
	return (
		<div>
			<p>Home page works</p>
			<table>
				<thead>
					<tr>
						<th colSpan={16}>
							<NavbarFeat />
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colSpan={2}>
							<div>
								<SearchMailFeat />
								<br />
								<SidebarFeat />
							</div>
						</td>
						<td colSpan={14}>
							<MessageViewFeat />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}