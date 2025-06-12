// 質問のデータを定義（後で追加していける）
const questions = [{
        question: "現在の主な支払い方法は？",
        options: ["現金", "クレジットカード", "QRコード決済"]
    },
    {
        question: "スマホの携帯会社は？",
        options: ["au", "docomo", "SoftBank", "楽天", "その他"]
    },
    {
        question: "メルカリをよく使いますか？",
        options: ["よく使う", "たまに使う", "使わない"]
    }
];

// 回答を記録する配列
let answers = [];

// 今どの質問かを示す番号
let currentQuestionIndex = 0;

// 質問を表示する関数
function showQuestion() {
    const box = document.getElementById("question-box");
    box.innerHTML = ""; // 前の質問を消す

    const q = questions[currentQuestionIndex];

    const questionText = document.createElement("h2");
    questionText.textContent = q.question;
    box.appendChild(questionText);

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => {
            answers.push(option);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(); // 次の質問へ
            } else {
                showResult(); // 終了したら結果を表示
            }
        };
        box.appendChild(btn);
    });
}

// 診断結果を表示する関数
function showResult() {
    const box = document.getElementById("question-box");
    box.innerHTML = "<h2>診断結果</h2>";

    // シンプルな診断ロジック（あとで強化可能）
    const payment = answers[0];
    const carrier = answers[1];
    const mercari = answers[2];

    let result = "";

    if (payment === "現金" && carrier === "au") {
        result = "あなたには au PAY をおすすめします！";
    } else if (mercari === "よく使う") {
        result = "あなたには メルペイ をおすすめします！";
    } else {
        result = "あなたには PayPay や クレジットカードの利用が便利かも！";
    }

    const resultText = document.createElement("p");
    resultText.textContent = result;
    box.appendChild(resultText);

    // 公式リンク（例：動的にリンクを出してもいい）
    const link = document.createElement("a");
    link.href = "https://wallet.auone.jp/contents/sp/guide/start-guide/";
    link.textContent = "au PAY の導入方法を見る";
    link.target = "_blank";
    box.appendChild(link);
}

// 最初の質問を表示
showQuestion();
