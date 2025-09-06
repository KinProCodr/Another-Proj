const quizData =[ {
    Question: "This is question 1",
    options: ["option A","OptB", "optc", "optd"],
    correct : 0,
},
{
    Question: "This is question 2",
    options: ["option A","OptB", "optc", "optd"],
    correct : 0,
},
{
    Question: "This is question 3",
    options: ["option A","OptB", "optc", "optd"],
    correct : 0,
},
{
    Question: "This is question 4",
    options: ["option A","OptB", "optc", "optd"],
    correct : 0,
},
{
    Question: "This is question 5",
    options: ["option A","OptB", "optc", "optd"],
    correct : 0,
},
];
const answerElm = document.querySelectorAll(".answer");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
const questionElm = document.querySelector("#question");
const submitbtn = document.querySelector("#submit");
let currentQuiz= 0;
let score = 0;

function loadQuiz(){
    const{Question,options}= quizData[currentQuiz];
    questionElm.innerText= Question;
   // options.forEach((curOption, index)=>(option1.innerText=curOption) )
   options.forEach(
    (curOption, index) => {
  window[`option${index + 1}`].innerText = curOption;
}

);
};
loadQuiz();


function getSelectedOption(){
    let ans_index;
    answerElm.forEach((curOption, index)=> {
        if(curOption.checked){
             ans_index= index;
        }
    });
    return ans_index;
};

submitbtn.addEventListener("click",()=> {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if(currentQuiz<quizData.length){
        loadQuiz();
        currentQuiz++;
    }
});