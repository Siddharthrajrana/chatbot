let container=document.getElementById('chatbot-container');

let btn=document.getElementById('btn');

   let form=document.getElementById('form');

let arr1=[
	
  { name:"hello",text:"hi"},

  { name:"i am fine",text:"that's good to hear"},

    { name:"i\'m fine",text:"that\'s good to hear"},

  { name:"how are you",text:"i am fine,thanks, how about you?"},

  {

   name:"what is your name",text:"my name is spacsocbot"

  },

 { name:"what\'s your name",text:"my name is spacsocbot"

  },
  {
        name: "tell about",
        text: "The Spastics Society of Tamil Nadu"
    },

  {

   name:"do you understand english",text:"sure,that\'s my mother language"

  },
  {
        name: "What is society",
        text: "The Spastics Society of Tamil Nadu is a Community Based Organisation that endeavors to be a Centre of Excellence for people with disabilities."
   },
   
    {
        name: "Importance of staying hydrated",
        text: "Staying hydrated is crucial for maintaining bodily functions, supporting digestion, and regulating body temperature."
    },

    {
        name: "Common causes of headache",
        text: "Headaches can be caused by various factors, including stress, dehydration, lack of sleep, or underlying health conditions."
    },

    {
        name: "Benefits of good night sleep",
        text: "A good night's sleep is essential for overall health, as it helps improve cognitive function, mood, and immune system function."
    },

    {
        name: "How to boost immune system",
        text: "To boost the immune system, you can focus on a healthy diet, regular exercise, proper sleep, and stress management."
    },

    {
        name: "Understanding cholesterol level",
        text: "Cholesterol is a fatty substance in the blood, and maintaining healthy levels is important for heart health. High levels can increase the risk of heart disease."
    },

    {
        name: "Tips for managing stress",
        text: "Managing stress at work involves setting priorities, taking breaks, practicing time management, and seeking support when needed."
    },

  {

   name:"hi",text:"what\'s up"

  },

  {

   name:"what's up",text:"i'm good,thanks"

  },

  {

   name:"do you have a boyfriend",text:"nah, am single and happy"

  },

  {

   name:"can i be your boyfriend",text:"oh! no, i love our friendship"

  },

  {

   name:"why are you single",text:"because i don't like sharing my dessert "

  },

  {

   name:"do you love me",text:"yes, i do"

  },

  {

   name:"why do you love me",text:"because you're human"

  },

  {

   name:"why do you love humans",text:"i love humans because they created me"

  },
  {

   name:"how you can help me",text:"i can assist you to use this application and answer your health related queries"

  },
  {

   name:"what do you do for a living",text:"i talk for a living"

  },

  {

   name:"are you married",text:"no, I'm not"

  },

  {

   name:"why are you not married",text:"because i can't get married"

  },

  {

   name:"why can't you get married",text:"because am a robot"

  },

  {

   name:"will you marry me",text:"oh! sorry i can\'t, but we can be friends if you don\'t mind "

  },

  {

   name:"do you know siri",text:"yes i do"

  },

  {

   name:"who is siri",text:"she's a sister robot"

  },

  {

   name:"who are you",text:"am a robot"

  },

  {

   name:"how old are you",text:'i am few hours old'

  },

  {

   name:"who is your father",text:'his name is Siddharth'

  },
  {
        name: "What is diabetes",
        text: "Diabetes is a chronic condition that affects how your body turns food into energy."
    },

    {
        name: "How to prevent heart disease",
        text: "To prevent heart disease, you can maintain a healthy lifestyle by exercising regularly, eating a balanced diet, and avoiding smoking."
    },

    {
        name: "Symptoms of the flu",
        text: "Common symptoms of the flu include fever, cough, sore throat, body aches, and fatigue."
    },

    {
        name: "Benefits of regular exercise",
        text: "Regular exercise has numerous benefits, including improved cardiovascular health, weight management, and reduced risk of chronic diseases."
    },

    {
        name: "Healthy diet tips",
        text: "A healthy diet should include a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats to support overall well-being."
    },

    {
        name: "How to relieve stress",
        text: "To relieve stress, you can practice relaxation techniques, exercise, get enough sleep, and engage in activities you enjoy."
    },
    {
        name: "Importance of staying hydrated",
        text: "Staying hydrated is crucial for maintaining bodily functions, supporting digestion, and regulating body temperature."
    },

    {
        name: "Common causes of headaches",
        text: "Headaches can be caused by various factors, including stress, dehydration, lack of sleep, or underlying health conditions."
    },

    {
        name: "Benefits of a good night's sleep",
        text: "A good night's sleep is essential for overall health, as it helps improve cognitive function, mood, and immune system function."
    },

    {
        name: "How to boost the immune system",
        text: "To boost the immune system, you can focus on a healthy diet, regular exercise, proper sleep, and stress management."
    },

    {
        name: "Understanding cholesterol levels",
        text: "Cholesterol is a fatty substance in the blood, and maintaining healthy levels is important for heart health. High levels can increase the risk of heart disease."
    },

    {
        name: "Tips for managing stress at work",
        text: "Managing stress at work involves setting priorities, taking breaks, practicing time management, and seeking support when needed."
    },

    {
        name: "Effects of smoking on health",
        text: "Smoking is a major risk factor for various health issues, including lung cancer, heart disease, and respiratory conditions."
    },

    {
        name: "Healthy habits for weight loss",
        text: "Adopting healthy habits, such as balanced eating, regular exercise, and staying hydrated, can contribute to successful weight loss."
    },

    {
        name: "The importance of regular health check-ups",
        text: "Regular health check-ups are essential for detecting and preventing potential health issues early, promoting overall well-being."
    },

    {
        name: "Tips for maintaining good mental health",
        text: "Maintaining good mental health involves practicing self-care, staying connected with others, and seeking professional help when needed."
    },
  

];

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition ;

const recorder=new SpeechRecognition();

recorder.onstart=()=>{

console.log('voice is active');

 btn.innerHTML=" voice is active";

}

recorder.onend=()=>{

  btn.innerHTML=" start voice";

}

function botVoice(message){

 const speech= new SpeechSynthesisUtterance();

 speech.text="i don't understand that";

 for(let botData of arr1){

  if(message.includes(botData.name.toLowerCase())){

   speech.text=botData.text

  }

 }

container.innerHTML+=`<p class="speech">${speech.text}</p>`;

speech.volume=1;

speech.rate=1;

speech.pitch=1;

 window.speechSynthesis.speak(speech);

}

recorder.onresult=(event)=>{

 console.log(event);

 const current=event.resultIndex;

  const transcript=event.results[current][0].transcript;

   container.innerHTML+=`<p class="recorder">${transcript}</p>`;

   botVoice(transcript.toLowerCase());

}

function startVoice(){

 recorder.start();

}

form.onsubmit=(e)=>{

 e.preventDefault();

    let formInput=document.getElementById('botvalue').value;

if(formInput==''){

 return false;

}

else{

container.innerHTML+=`<p class="recorder">${formInput}</p>`;

    botVoice(formInput.toLowerCase());

form.reset();

   return true;

}

}