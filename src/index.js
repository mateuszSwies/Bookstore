//import bootstrap
import "bootstrap/dist/js/bootstrap";

//download items from page
const testjs = document.querySelector("#firstMainHeader");
const sideMenuList = [...document.querySelectorAll(".list-group a")];
const pagination = [...document.querySelectorAll(".pagination li")];
const mainBtn = document.querySelector("#jumbotron button");
const main = document.body.querySelector("main.row");
const linksList = [...document.body.querySelectorAll(`a[href="#"]`)];
//functions

const changeActiveElement = (selector) => {
	selector.forEach((item) =>
		item.addEventListener("click", () => {
			selector.forEach((item) => {
				item.classList.remove("active");
			});
			item.classList.add("active");
		})
	);
};

const showMore = () => {
	main.scrollIntoView({ behavior: "smooth" });
};

console.log(linksList);
//caling functions
changeActiveElement(sideMenuList);
changeActiveElement(pagination);
mainBtn.addEventListener("click", showMore);
