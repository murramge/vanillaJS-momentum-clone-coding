const quotes = [
    {
        quotes: "가장 큰 정보는 무심코 주고받는 대화 속에 있다.",
        author : "앤디 그로브",
    },
    {
        quotes: "노력하는 데 있어서 이득을 바라지 마라.",
        author : "도교",
    },
    {
        quotes: "배우려고 하는 학생은 부끄러워해서는 안된다.",
        author : "히레르",
    },
    {
        quotes: "실패를 걱정하지 말고 부지런히 목표를 향해 노력하라. 노력한 만큼 보상받는다.",
        author : "노만 V. 필",
    },
    {
        quotes: "자기 힘으로 달성할 수 있는 목표를 세워라. 타인에게 의지하지 말라.",
        author : "맨터니 로빈스",
    },
    {
        quotes: "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
        author: "이드리스 샤흐",
    },
    {
        quotes: "옥은 갈지 않으면 그릇을 만들 수 없고 사람은 배우지 않으면 도를 모른다. ",
        author: "이이",
    },
    {
        quotes: "천재란 노력을 계속할 수 있는 재능이다.",
        author: "토머스 에디슨",
    },
    {
        quotes: "한때는 불가능하다고 생각한 것이 결국에는 가능한 것이 된다.",
        author: "K. 오브라이언",
    },
    {
        quotes: "현재 위치가 소중한 것이 아니라 가고자 하는 방향이 소중하다",
        author: "올리버 웬델 홈즈",
    },

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes [Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quotes;
author.innerText =todayQuotes.author;