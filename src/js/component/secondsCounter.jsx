import React, { useState } from "react";
// import starsImage from "../../img/stars.png";
// import twinklingImage from "../../img/twinkling.png";

const Secondscounter = () => {
	const [counter, setCounter] = useState(0);
	setTimeout(() => setCounter(counter + 1), 1000);
	let unit = counter;
	let ten = 0;
	let hundred = 0;
	let thousand = 0;
	let tenThousand = 0;
	let hunThousand = 0;

	if (unit > 9) {
		ten = Math.trunc(unit / 10);
		unit = unit % 10;
		if (ten > 9) {
			hundred = Math.trunc(ten / 10);
			ten = ten % 10;
			if (hundred > 9) {
				thousand = Math.trunc(hundred / 10);
				hundred = hundred % 10;
				if (thousand > 9) {
					tenThousand = Math.trunc(thousand / 10);
					thousand = thousand % 10;
					if (tenThousand > 9) {
						hunThousand = Math.trunc(tenThousand / 10);
						tenThousand = tenThousand % 10;
					}
				}
			}
		}
	}

	return (
		<div className="container mt-5">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="row d-flex flex-row justify-content-center">
				<div className="col-sm-2 mx-2 text-center">
					<i className="far fa-clock"></i>
				</div>
				<div className="col-sm-1 mx-2 text-center">{hunThousand}</div>
				<div className="col-sm-1 mx-2 text-center">{tenThousand}</div>
				<div className="col-sm-1 mx-2 text-center">{thousand}</div>
				<div className="col-sm-1 mx-2 text-center">{hundred}</div>
				<div className="col-sm-1 mx-2 text-center">{ten}</div>
				<div className="col-sm-1 mx-2 text-center">{unit}</div>
			</div>
		</div>
	);
};
export default Secondscounter;
