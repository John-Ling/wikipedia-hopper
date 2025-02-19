import "../styles/results_page.scss";
import { ResultsData } from "../types";

export const ResultsPage: React.FC<{ data: ResultsData }> = ({ data }) => {
	return (
		<>
			{
				data.visible 
					?
						<div id="results-page">
							<h2>{data.won ? "You Win" : "You Lose"}</h2>
							<p>{data.won ? `You went from ${data.startTitle} to ${data.endTitle} in ${data.hopsTaken} ${data.hopsTaken == 1 ? "hop" : "hops"}.` : ""}</p>
							<h3>Pages Visited</h3>
							{data.hops.map((title: string) => <p>{title}</p>)}
						</div>
					: 
						<></>
			}
		</>
	);
}