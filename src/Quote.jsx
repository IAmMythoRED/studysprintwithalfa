import { useSpeechSynthesis } from "react-speech-kit"

export function Quote({randomQuoteNumb,onQuoteButtonClick}){
    var Quotes  = [
        "Learning is the key to unlocking the world, a passport to freedom.", 
        "The more you learn, the more places you'll go!", 
        "Knowledge is your superpower, use it to achieve greatness!", 
        "Every expert was once a beginner. Keep going!", 
        "Mistakes are proof that you're trying and learning.", 
        "Study now, and shine later!", "Success is the sum of small efforts repeated every day.", 
        "The beautiful thing about learning is that no one can take it away from you.", 
        "Dream big, study hard, and make those dreams a reality!", 
        "Education is not the filling of a pot but the lighting of a fire.", 
        "Study like you're going to live forever. Live like you're going to die tomorrow.", 
        "The roots of education are bitter, but the fruit is sweet.", "One hour of study today equals success tomorrow!", 
        "You don't have to be perfect to be amazing. Just do your best!", 
        "Set your goals high, and don't stop until you get there!", 
        "The more you practice, the better you'll get!", 
        "Believe in yourself! You are capable of amazing things.", 
        "Learning is a treasure that will follow its owner everywhere.", 
        "Today's studying plants the seeds for tomorrow's success.", 
        "Work hard in silence, let your success be your noise.", 
        "Don't watch the clock; do what it does – keep going!", 
        "Your future self will thank you for the hard work you're doing now.", 
        "Success doesn’t come to you. You go to it by studying and working hard.", 
        "It always seems impossible until it’s done.", 
        "Education is your ticket to a world full of opportunities.", 
        "Success is no accident. It is hard work, learning, studying, and persistence.", 
        "The secret to getting ahead is getting started.", 
        "Small steps lead to big results. Keep moving forward!",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Your only limit is your mind. Believe in your ability to learn.", 
        "Every day is a chance to become better than you were yesterday.", 
        "Learning is like building blocks – the more you learn, the taller you stand!", 
        "Never stop learning, because life never stops teaching.", 
        "Don’t give up! Great things take time.", 
        "Keep your focus on the finish line, and don’t worry about the hurdles.", 
        "Believe you can, and you’re halfway there.", 
        "When you learn something new, you grow a little more each day.", 
        "The more that you read, the more things you will know!", 
        "Hard work beats talent when talent doesn't work hard.", 
        "Think big, start small, and act now!", 
        "The best preparation for tomorrow is doing your best today.", 
        "Education is the most powerful weapon you can use to change the world.", 
        "Success is a ladder you can’t climb with your hands in your pockets.", 
        "Your brain is a muscle, and learning is its exercise.", 
        "You are braver than you believe, stronger than you seem, and smarter than you think.", 
        "Great things never come from comfort zones.", 
        "A little progress each day adds up to big results.", 
        "Learning is a journey, not a destination.", 
        "Study hard, stay humble, and success will follow.", 
        "Your future is created by what you do today, not tomorrow.",
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
        "The expert in anything was once a beginner.",
        "Don’t wait for opportunity, create it.",
        "Learning never exhausts the mind.",
        "Push yourself because no one else is going to do it for you.",
        "Study hard, because knowledge is power.",
        "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        "The only place success comes before work is in the dictionary.",
        "Strive for progress, not perfection.",
        "Hard work today will pay off tomorrow.",
        "Don't stop until you're proud.",
        "The difference between ordinary and extraordinary is that little extra.",
        "Success is not for the lazy.",
        "Be a student as long as you still have something to learn.",
        "Education is the foundation upon which we build our future.",
        "Learn from yesterday, live for today, hope for tomorrow.",
        "Your future is as bright as your faith and hard work.",
        "Don’t let what you cannot do interfere with what you can do.",
        "Effort is the key to unlocking success.",
        "Dream big, work hard, stay focused, and surround yourself with good people.",
        "Study while others are sleeping; work while others are loafing; prepare while others are playing.",
        "Great things come from hard work and perseverance.",
        "Success is a journey, not a destination.",
        "Believe in the magic of hard work.",
        "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
        "If you can imagine it, you can achieve it. If you can dream it, you can become it.",
        "Your education is a dress rehearsal for a life that is yours to lead.",
        "Motivation is what gets you started. Habit is what keeps you going.",
        "Nothing worth having comes easy.",
        "Success is the result of preparation, hard work, and learning from failure.",
        "Small disciplines repeated with consistency every day lead to great achievements over time.",
        "Don't be afraid to give up the good to go for the great.",
        "Efforts and courage are not enough without purpose and direction.",
        "Your education is the key to unlocking your full potential.",
        "Study with passion and purpose.",
        "Success is not about being the best, but about doing your best.",
        "The more you learn, the more you earn.",
        "Good things come to those who work for them.",
        "You are never too old to set another goal or to dream a new dream.",
        "Believe in the power of learning.",
        "Do something today that your future self will thank you for.",
        "Don’t wait for the right moment; take the moment and make it right.",
        "The best way to predict your future is to create it.",
        "Success usually comes to those who are too busy to be looking for it.",
        "Start where you are. Use what you have. Do what you can.",
        "Do what you have to do until you can do what you want to do.",
        "Stay focused and never give up on your dreams.",
        "Your time is limited, so don’t waste it living someone else’s life.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Be so good they can’t ignore you."
    ]
    const quote = Quotes[randomQuoteNumb-1]
    const {speak,cancel,voices} = useSpeechSynthesis()
    function PlayQuote()
    {
        cancel()
        speak({text: quote,voice: voices[4]})
    }

    function NextQuote()
    {
        cancel()
        onQuoteButtonClick()
    }

    return(
        <>
            <h1 className="text-white text-center mt-6 font-playfairDisplayBold text-balance text-[13px]">
                {`"${quote}"`}
            </h1>
            <div className="flex justify-center space-x-5">
                <button className="btn bg-[#526024] hover:bg-[#45511d] active:bg-[#303913] text-white font-bold rounded-[7px] h-[33px] w-24 mt-8 mb-4 text-[12px] font-playBold shadow-xl" onClick={PlayQuote}>
                    Play Quote
                </button>
                <button className="btn bg-[#526024] hover:bg-[#45511d] active:bg-[#303913] text-white font-bold rounded-[7px] h-[33px] w-24 mt-8 mb-4 text-[12px] font-playBold shadow-xl" onClick={NextQuote}>
                    Next Quote
                </button>
            </div>       
        </>
    )
}