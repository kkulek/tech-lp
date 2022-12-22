import React, { useState, useEffect } from "react";

const fields = [
	{
		name: "UX Design",
		squareMobile: "squareDarkBlue",
		squareDesktop: "squareDarkBlue",
	},
	{
		name: "QA Testing",
		squareMobile: "squareYellow",
		squareDesktop: "squareDarkBlue",
	},
	{
		name: "Project Management",
		squareMobile: "squareBlue",
		squareDesktop: "squareDarkBlue",
	},
	{
		name: "Big Data",
		squareMobile: "squareDarkBlue",
		squareDesktop: "squareYellow",
	},
	{
		name: "Business Development",
		squareMobile: "squareYellow",
		squareDesktop: "squareYellow",
	},
	{
		name: "Azure Cloud",
		squareMobile: "squareBlue",
		squareDesktop: "squareYellow",
	},
	{
		name: "Cybersecurity",
		squareMobile: "squareDarkBlue",
		squareDesktop: "squareBlue",
	},
	{
		name: "Machine Learning",
		squareMobile: "squareYellow",
		squareDesktop: "squareBlue",
	},
	{
		name: "And much more!",
		squareMobile: "squareBlue",
		squareDesktop: "squareBlue",
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
			<div className="md:grid xl:grid-cols-3">
				{/* <h3 className="before:content-squareBlue before:content-squareYellow before:content-squareDarkBlue xl:before:content-squareBlue xl:before:content-squareYellow xl:before:content-squareDarkBlue"></h3> */}
				{fields.map((item, index) =>
					index >= fieldsToShow ? null : (
							<h3
								key={index}
								className={`relative ml-10 mt-10 text-2xl before:absolute before:content-${item.squareMobile} xl:before:content-${item.squareDesktop} before:-left-14 leading-loose `}
							>
								{item.name}
							</h3>
					)
				)}
			</div>
			<button onClick={handleShowMoreLess}>
				{buttonShowMore ? "Load more" : "Show less"}
			</button>
		</section>
	);
}
