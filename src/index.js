//import bootstrap
import "bootstrap/dist/js/bootstrap";

//download items from page
const testjs = document.querySelector("#firstMainHeader");
const sideMenuList = [...document.querySelectorAll(".list-group a")];
const pagination = [...document.querySelectorAll(".pagination li")];

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

//caling functions
changeActiveElement(sideMenuList);
changeActiveElement(pagination);
