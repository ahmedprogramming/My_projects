function quote(){
    let text = document.querySelector(".text");
    let quoteList = [
        "Nothing is impossible. The word itself says ‘I’m possible!’ – Audrey Hepburn",
        "Spread love everywhere you go. – Mother Teresa",
        "Belief creates the actual fact. – William James",
        "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
        "Keep your face always toward the sunshine, and shadows will fall behind you. – Walt Whitman",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
        "You don't have to be great to start, but you have to start to be great. – Zig Ziglar",
        "At the end of the day, whether or not those people are comfortable with how you’re living your life doesn’t matter. What matters is whether you’re comfortable with it. – Dr. Phil",
        "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life. – Carrie Ann Moss",    "Keep moving forward.",
        "you are died",
        "Fear less.",
        "Love more.",
        "Work hard.",
        "Stay humble.",
        "Enjoy the little things.",
        "The best is yet to come.",
        "Collect moments – not things.",
        "When anger rises, think of the consequences. – Confucius",
        "Only a life lived for others is a life worthwhile. – Albert Einstein",
        "Be so good they can’t ignore you. – Steve Martin",
        "Dream as if you’ll live forever, live as if you’ll die today."
        // Add more quotes here...
    ];
    let button = document.getElementById("button");
    let timer = document.querySelector(".timer")
    text.textContent = quoteList[(Math.round((Math.random() * 21)))]
    if(text.textContent == quoteList[10]){
        text.style.backgroundColor = "red";
        text.style.color = "black";
        document.body.style.backgroundColor = "red";
        button.classList.add("stop");
        button.textContent = "You made a mistake"
        timer.style.display = "block"
        button.disabled = true;
        setInterval(() => {
            timer.textContent -= 1
            if(timer.textContent == 0){
                window.close()
            }
        }, 1000);
    }
}
