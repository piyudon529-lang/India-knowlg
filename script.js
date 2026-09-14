const questions = [
  {
    q: "भारत की राजधानी क्या है?",
    a: ["दिल्ली", "मुंबई", "भोपाल", "जयपुर"],
    correct: 0
  },
  {
    q: "भारत का राष्ट्रीय पशु कौन है?",
    a: ["शेर", "बाघ", "हाथी", "हिरण"],
    correct: 1
  },
  {
    q: "भारत का राष्ट्रीय पक्षी कौन है?",
    a: ["तोता", "मोर", "कबूतर", "हंस"],
    correct: 1
  },
  {
    q: "मध्य प्रदेश की राजधानी क्या है?",
    a: ["इंदौर", "भोपाल", "जबलपुर", "ग्वालियर"],
    correct: 1
  },
  {
    q: "ताजमहल कहाँ है?",
    a: ["आगरा", "दिल्ली", "जयपुर", "लखनऊ"],
    correct: 0
  },
  {
    q: "भारत का राष्ट्रीय फूल कौन सा है?",
    a: ["गुलाब", "कमल", "गेंदा", "चमेली"],
    correct: 1
  },
  {
    q: "पृथ्वी का प्राकृतिक उपग्रह कौन है?",
    a: ["सूर्य", "मंगल", "चंद्रमा", "शुक्र"],
    correct: 2
  },
  {
    q: "जल का रासायनिक सूत्र क्या है?",
    a: ["CO2", "H2O", "O2", "N2"],
    correct: 1
  },
  {
    q: "भारत का राष्ट्रीय फल कौन सा है?",
    a: ["सेब", "आम", "केला", "संतरा"],
    correct: 1
  },
  {
    q: "भारत में कितने राज्य हैं?",
    a: ["26", "28", "29", "30"],
    correct: 1
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const question = questions[current];

  document.getElementById("question").textContent =
    (current + 1) + ". " + question.q;

  const optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";

  question.a.forEach(function(option, index) {

    const button = document.createElement("button");

    button.textContent = option;

    button.onclick = function() {

      if (index === question.correct) {
        score++;

        document.getElementById("result").textContent =
          "✅ सही जवाब!";
      } else {
        document.getElementById("result").textContent =
          "❌ गलत जवाब!";
      }

      document
        .querySelectorAll("#options button")
        .forEach(function(btn) {
          btn.disabled = true;
        });
    };

    optionsBox.appendChild(button);
  });
}

function nextQuestion() {

  current++;

  if (current < questions.length) {

    document.getElementById("result").textContent = "";

    loadQuestion();

  } else {

    document.getElementById("question").textContent =
      "🎉 Quiz Complete!";

    document.getElementById("options").innerHTML = "";

    document.getElementById("nextBtn").style.display = "none";

    document.getElementById("result").textContent =
      "🏆 आपका Score: " + score + " / 10";
  }
}

window.nextQuestion = nextQuestion;

loadQuestion();
