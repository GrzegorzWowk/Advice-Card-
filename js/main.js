const adviceNumber = document.querySelector(".card__title-number");
const cardAdvice = document.querySelector(".card__advice");
const adviceBtn = document.querySelector(".card__show-quote");

const URL = "https://api.adviceslip.com/advice";

async function logAdvice() {
	try {
		const res = await fetch(URL);
		const data = await res.json();
		const { id, advice } = data.slip;
		adviceNumber.textContent = id;
		cardAdvice.textContent = advice;
	} catch {
		console.error("We have technical difficulties");
	}
}

adviceBtn.addEventListener("click", logAdvice);
