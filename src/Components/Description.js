import Spacer from './Spacer'

const people = [
  {
    name: 'Abraham',
    title: 'Software Engineer',
    email: 'aqtrinh@asu.edu',
    image:
      'https://aqtrinh.me/skate.png',
  },
  
  // More people...
]

export default function Description() {
  return (
    <div id="About" className="shadow bg-white">
      <div className="flex flex-col py-10 md:py-20 text-3xl md:text-4xl outline-1">
        <p className="px-10 leading-tight max-w-5xl mx-auto text-black text-xl md:px-20 md:text-3xl tracking-tight sm:text-2xl">
        <strong>
          Hello, hello. 👋 My name is Abraham, I am a Software Engineer at Medtronic and an Arizona State Alumni!
        </strong>
         <br/>
         <br/>
         
         In January 2023, I began my journey as a Software Engineer at Medtronic. 
         I am a person who is passionate about computer science and 
         I hope to utilize the skills that I learned in school and 
         in the at work to write code that will benefit society! 
        </p>
      </div>
    </div>
    
  )
}