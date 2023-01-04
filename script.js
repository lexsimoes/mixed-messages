const generateButton = document.getElementById("generate-message");
const quoteEl = document.getElementById("quote-text");

const quotes = {
  funQuotes: [
    "Clothes make the man. Naked people have little or no influence in society —Mark Twain",
    "Before you marry a person, you should first make them use a computer with slow Internet to see who they really are. —Will Ferrell",
    "I love being married. It's so great to find that one special person you want to annoy for the rest of your life. —Rita Rudner",
    "Ned, I would love to stand here and talk with you—but I’m not going to. —Phil Connors (Bill Murray)",
    "I’m not superstitious, but I am a little stitious. — Michael Scott (Steve Carrell), The Office"
  ],

    codeQuotes: [
      "Software is like sex: its better when its free. – Linus Torvalds",
      "If we want users to like our software, we should design it to behave like a likable person.  – Alan Cooper",
      "Quality is a product of a conflict between programmers and testers. ― Yegor Bugayenk",
      "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs",
      "Im not a great programmer; Im just a good programmer with great habits. ― Kent Beck"
    ],

    famousQuotes: [
      "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
      "The way to get started is to quit talking and begin doing. -Walt Disney",
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
      "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
      "Whoever is happy will make others happy too. -Anne Frank"
    ],

    lifeQuotes: [
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
      "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
      "Life is what happens when you're busy making other plans. -John Lennon",
      "It is during our darkest moments that we must focus to see the light. -Aristotle",
      "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson"
    ]

};

let previousRanNum = 0;
let newRanNum = 0;

const randomNum = () => {
  while(previousRanNum === newRanNum) {
    newRanNum = Math.floor(Math.random()* 5);
  }
    previousRanNum = newRanNum
    return newRanNum
};

generateButton.addEventListener("click", function(){
    const quoteType = document.querySelector('input[name="Messages"]:checked');
    switch (quoteType.value){
      case "Code":
          quoteEl.innerHTML = quotes.codeQuotes[randomNum()];
        break;
      case "Funny":
          quoteEl.innerHTML = quotes.funQuotes[randomNum()];
          break;
      case "Famous":
          quoteEl.innerHTML = quotes.famousQuotes[randomNum()];
          break;
      case "Life":
          quoteEl.innerHTML = quotes.lifeQuotes[randomNum()];
          break;
    }
})
