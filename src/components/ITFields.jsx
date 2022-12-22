import React, { useState } from "react";

const fields = [
	{
		name: "UX Design",
		square: "squareDarkBlue",
	},
	{
		name: "QA Testing",
		square: "squareYellow",
	},
	{
		name: "Project Management",
		square: "squareBlue",
	},
	{
		name: "Big Data",
		square: "squareDarkBlue",
	},
	{
		name: "Business Development",
		square: "squareYellow",
	},
	{
		name: "Azure Cloud",
		square: "squareBlue",
	},
	{
		name: "Cybersecurity",
		square: "squareDarkBlue",
	},
	{
		name: "Machine Learning",
		square: "squareYellow",
	},
	{
		name: "And much more!",
		square: "squareBlue",
	},
];

const step = 4;

export default function ITFields() {
	const [fieldsToShow, setFieldsToShow] = useState(step);
	const [buttonShowMore, setButtonShowMore] = useState(true);

	const handleShowMoreLess = () => {
		buttonShowMore ? setFieldsToShow(fields.length) : setFieldsToShow(step);
		setButtonShowMore(!buttonShowMore);
	};

	return (
		<section className="container">
			<h2 className="text-center">
				Our mentors are experts from many IT fields!
			</h2>
			<div className="md:grid md:grid-cols-2 xl:grid-cols-3">
				{fields.map((item, index) =>
					index >= fieldsToShow ? null : (
						<>
							{/* <h3 className="before:content-squareBlue before:content-squareYellow before:content-squareDarkBlue"></h3> */}
							<h3
								key={index}
								className={`relative ml-10 mt-10 text-2xl before:absolute before:content-${item.square} before:-left-14 leading-loose `}
							>
								{item.name}
							</h3>
						</>
					)
				)}
			</div>
			<button onClick={handleShowMoreLess}>
				{buttonShowMore ? "Load more" : "Show less"}
			</button>
		</section>
	);
}
