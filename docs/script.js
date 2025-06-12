const questions = [
  {
    question: "現在の主な支払い方法は？",
    options: ["現金", "クレジットカード", "QRコード決済"]
  },
  {
    question: "利用している携帯会社は？",
    options: ["docomo", "au", "SoftBank", "格安SIM"]
  },
  {
    question: "メルカリなどフリマアプリを使ってる？",
    options: ["よく使う", "たまに使う", "使わない"]
  }
];

const results = {
  default: "あなたにおすすめの決済は <strong>PayPay</strong> です！<br><a href='https://paypay.ne.jp/guide/' target='_blank'>使い方を見る</a>"
};

let currentQuestion = 0;
const answers = [];

document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("start-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(answer) {
  answers.push(answer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question-container").style.display = "none";
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = results.default;
  resultDiv.style.display = "block";
}
