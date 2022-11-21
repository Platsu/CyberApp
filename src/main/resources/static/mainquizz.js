const questions = [
	{
		question: "Що робити, коли ти все ж таки заразив свій пристрій вірусом?",
		answers: [
			"Почекати поки вірус сам піде",
			"Негайно увімкнути антивірусну програму, яка знищить його!",
			"Буду спостерігати, що буде відбуватися з моїм пристроєм",
			"Залишите це питання на завтра"],
		correct: 2,
	},
	{
		question: "Антивірусна програма - це...",
		answers: [
			"... курс лікування проти вірусів",
			"... програма або розширення, яке блокує рекламу на сайтах",
			"... спеціалізована програма для знаходження та ліквідації комп'ютерних вірусів",
			"... амулет, який відлякує віруси ",
		],
		correct: 3,
	},
	{
		question: "Чи безпечно використовувати відкриті точки WIFI?",
		answers: [
			"Ні!",
			"Залежить від назви точки WIFI",
			"Так, цілком",
			"Якщо на халяву, то чому б не скористатися",
		],
		correct: 1,
	},
	{
		question: "Виберіть пароль, який буде найнадійнішим:",
		answers: ["Львів12345", "&pzA2E4s5@", "qwerty228", "всі відповіді неправильні"],
		correct: 2,
	},
	{
		question: "Кібербезпека - це...",
		answers: [
			"... таємний шифр СБУ",
			"... назва відеогри",
			"... це сукупність методів захисту у галузі телекомунікацій та інформатики",
			"... хакерське слово, яке означає обхід системи",
		],
		correct: 3,
	},
	{
		question: "Хто такий хакер?",
		answers: [
			"Насправді, мало бути хацкер",
			"Фронтенд розробник",
			"Ти після другого енергетика за вечір",
			"Людина, яка займається поганими справами, такими як викрадення даних",
		],
		correct: 4,
	},
	{
		question: "Що таке фішинг?",
		answers: [
			"Риболовля у відкритому океані",
			"Назва благодійного проєкту",
			"Це шкідливе програмне забезпечення",
			"Один із видів кібер злочинів",
		],
		correct: 4,
	},
	{
		question: "Чи варто відкривати листи або повідомлення, від незнайомих людей, без попередньої його перевірки",
		answers: [
			"Ні!",
			"Якщо від симпатичної дівчини, то й думати непотрібно",
			"Так, цілком",
			"Спочатку відкрию, а потім перевірю",
		],
		correct: 1,
	},
	{
		question: "Виберіть приклад шахрайського смс:",
		answers: [
			"Ваш рахунок поповнено на 100 гривень, дякую за користування нашими послугами",
			"Прогноз погоди на завтра: в місті очікуються опади",
			"Мама: я дзвонила вам 27 разів",
			"Вашу карту було заблоковано, будь ласка, відправте на цей номер pin та CVV2 вашої банківської карти, щоб розблокувати її",
		],
		correct: 4,
	},
	{
		question: "Клікджекінг або викрадення кліків - це...",
		answers: [
			"... тицяння в Джека",
			"... це вид маніпуляції, коли хакер розміщує на сайті невидиме вікно",
			"... користування безплатним VPN",
			"... принцип дії антивірусної програми",
		],
		correct: 2,
	},
];


const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAnswer;

function clearPage() {
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
}

function showQuestion() {
	console.log('showQuestion');


	// питання
	const headerTemplate = `<h2 class="title">%title%</h2>`;
	const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
	headerContainer.innerHTML = title;

	// варіанти відповідей
	let answerNumber = 1;
	for (answerText of questions[questionIndex]['answers']) {
		const questionTemplate =
			`<li>
                <label>
                    <input value="%number%" type="radio" class="answer" name="answer" />
                    <span>%answer%</span>
                </label>
             </li>`;

		const answerHTML = questionTemplate
			                    .replace('%answer%', answerText)
			                    .replace('%number%', answerNumber)

		listContainer.innerHTML += answerHTML;
		answerNumber++;
	}

}

function checkAnswer() {
	console.log('checkAnswer started!')

	const checkedRadio = listContainer.querySelector('input:checked')

	if (!checkedRadio) {
		submitBtn.blur();
		return;
	}

	const userAnswer = parseInt(checkedRadio.value)

	if (userAnswer === questions[questionIndex]['correct']) {
		score++;
	}
		console.log('score = ', score);

		if (questionIndex !== questions.length - 1) {
			console.log('Це не останнє запитання');
			questionIndex = questionIndex + 1;
			clearPage();
			showQuestion();
			return;
		} else {
			console.log('Це останнє запитання');
			clearPage();
			showResults();
		}
}

	function showResults() {
		console.log('showResults started!');
		console.log(score);

		const resultsTemplate = `
             <h2 class="title">%title%</h2>
             <h3 class="summary">%message%</h3>
             <p class="result">%result%</p>
`;

		let title, massage;

		if(score === questions.length) {
			title = 'Вітаємо!';
			massage = 'Ви відповіли на всі питання правильно';
		} else if ((score * 100) / questions.length >= 50) {
			title = 'Непогано!';
			massage = 'Ви відповіли на більшість питань правильно';
		} else {
			title = 'Не вітаємо';
			massage = 'Ви взагалі не переглядали матеріал???';
		}
        // результат
		let result = `${score} з ${questions.length}`;


		const finalMessage = resultsTemplate
			                   .replace('%title%', title)
			                   .replace('%message%', massage)
			                   .replace('%result%', result)

        headerContainer.innerHTML = finalMessage;

		submitBtn.blur();
		submitBtn.innerText = 'Почати спочатку';
		submitBtn.onclick = () => history.go();
}