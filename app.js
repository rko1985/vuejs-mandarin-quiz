new Vue({
    el: '#app',
    data: {
        wordList: [
            {
                character: '周',
                pinyin: 'zhōu',
                english: 'week',
                isCorrect: null
            },
            {
                character: '年',
                pinyin: 'nián',
                english: 'year',
                isCorrect: null
            },
            {
                character: '今天',
                pinyin: 'jīntiān',
                english: 'week',
                isCorrect: null
            },
            {
                character: '昨天',
                pinyin: 'míngtiān',
                english: 'tomorrow',
                isCorrect: null
            },
            {
                character: '昨天',
                pinyin: 'zuótiān',
                english: 'yesterday',
                isCorrect: null
            },
            {
                character: '日历',
                pinyin: 'rìlì',
                english: 'calendar',
                isCorrect: null
            },
            {
                character: '秒',
                pinyin: 'miǎo',
                english: 'second',
                isCorrect: null
            },
            {
                character: '小时',
                pinyin: 'xiǎoshí',
                english: 'hour',
                isCorrect: null
            },
            {
                character: '分钟',
                pinyin: 'fēnzhōng',
                english: 'minute',
                isCorrect: null
            },
        ],
    randomArray: [], //randomized order of wordlist
    currentWordChoices: [],
    correctAnswer: {},
    sessionFinished: false
    },
    methods: {
        generateRandomChoices(){           
            this.randomUniqueArray();
            this.randomArray = this.randomArray.slice(0,4); //choosing 4 questions
            console.log(this.randomArray)

            for(i = 0; i < this.randomArray.length; i++){
                word = this.wordList[this.randomArray[i]];
                this.currentWordChoices.push(word);
            }
            //choose random word from word choices for the quiz question
            this.correctAnswer = this.currentWordChoices[(Math.floor(Math.random()*this.currentWordChoices.length))]         
        },
        grade(choice){
            if(choice == this.correctAnswer){
                var indexOfAnswer = this.currentWordChoices.indexOf(choice)
                this.currentWordChoices[indexOfAnswer].isCorrect = true
                this.sessionFinished = true;
            } else {
                var indexOfAnswer = this.currentWordChoices.indexOf(choice)
                this.currentWordChoices[indexOfAnswer].isCorrect = false
            }
        },
        newQuiz(){
            for(i = 0; i < this.wordList.length; i ++){
                this.wordList[i].isCorrect = null;
            }
            this.currentWordChoices = [];
            this.correctAnswer = {};
            this.sessionFinished = false;
            this.randomArray = [];
            this.generateRandomChoices();
        },
        randomUniqueArray(){
            //randomizes the order or the word list
            for (var i = 0, ar = []; i < this.wordList.length; i++) {
                ar[i] = i;
            }            
            // randomize the array
            ar.sort(function () {
                return Math.random() - 0.5;
            });
            this.randomArray = ar;
        }
    },
    created: function(){
        this.generateRandomChoices()
    }
})