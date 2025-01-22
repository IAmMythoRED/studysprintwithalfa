import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/alfa-logo.png'
import { Quote } from './Quote'
import { RandomImage } from './RandomImage'

function App() {

  const photos = 25
  const quotes = 100

  const [lastRandomImgNumb, setLastRandomImgNumb] = useState(null);
  const [lastRandomQuoteNumb, setLastRandomQuoteNumb] = useState(null);
  const [randomImgNumb, setRandomImgNumb] = useState(null);
  const [randomQuoteNumb, setRandomQuoteNumb] = useState(null);

  function GenerateRandomImgNumb(lastValue) {
    let number;
    do {
      number = Math.floor(Math.random() * lastValue) + 1;
    } while (number === lastRandomImgNumb || number == null);
    setLastRandomImgNumb(number);
    return number;
  }

  function GenerateRandomQuoteNumb(lastValue) {
    let number;
    do {
      number = Math.floor(Math.random() * lastValue) + 1;
    } while (number === lastRandomQuoteNumb || number == null);
    setLastRandomQuoteNumb(number);
    return number;
  }

  function test()
    {
      setRandomImgNumb(GenerateRandomImgNumb(photos));
      setRandomQuoteNumb(GenerateRandomQuoteNumb(quotes));
    }

  useEffect(() => {
    setRandomImgNumb(GenerateRandomImgNumb(photos));
    setRandomQuoteNumb(GenerateRandomQuoteNumb(quotes));
  }, []);

  return (
    <div className='min-h-screen'>
      <a href='https://www.studysprintwithalfa.life/'>
        <img src={logo} className='mt-5 w-12 md:w-24 lg:hidden m-auto rounded-[15px] animate-bob' alt='Alfa Logo' />
      </a>
      <h1 className='mt-2 text-center font-plaster lg:text-5xl md:text-4xl text-[19px] bg-gradient-to-b from-[#fff] to-[#313d07] text-transparent bg-clip-text'>
        Study Sprint with Alfa
      </h1>
      {randomImgNumb && <RandomImage randomNumb={randomImgNumb} />}
      {randomQuoteNumb && <Quote randomQuoteNumb={randomQuoteNumb} onQuoteButtonClick={test}/>}
      <div className='h-full'>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <h6 className="text-center text-gray-500 sm:text-center mb-4 dark:text-gray-400">© 2025 <a href="https://www.studysprintwithalfa.life/" class="hover:underline">Study Sprint with Alfa™</a><br/> All Rights Reserved.</h6>
      </div>
    </div>
  );
}

export default App;
