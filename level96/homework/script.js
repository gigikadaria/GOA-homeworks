const list = document.getElementById("list");

for (let itemNumber = 1; itemNumber <= 3; itemNumber += 1) {
	const item = document.createElement("li");
	item.textContent = `Item ${itemNumber}`;
	list.appendChild(item);
}

const box = document.getElementById("box");
const boxParagraph = box.querySelector("p");
boxParagraph.textContent = "New Updated Text";

const mainBox = document.getElementById("main-box");
const oldParagraph = mainBox.querySelector("p");
const newSpan = document.createElement("span");
newSpan.textContent = "ახალი სპანი";
mainBox.appendChild(newSpan);
mainBox.removeChild(oldParagraph);

const articleContainer = document.getElementById("article-container");
const articleTitle = document.createElement("h2");
articleTitle.textContent = "სტატიის სათაური";
const articleDescription = document.createElement("p");
articleDescription.textContent = "სტატიის მოკლე აღწერა";
articleContainer.appendChild(articleTitle);
articleContainer.appendChild(articleDescription);
