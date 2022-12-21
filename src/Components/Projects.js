import React from "react";

const projects = [
  { 
    id: '0',
    title: 'Capstone: Game Development',
    dates: 'January 2022 to December 2022',
    description: "Worked in a team of five to develop a rogue-like role-playing game with procedural level generation using Unity.\n\n" +
    "Researched and implemented the game’s procedural generation and level design using C#.\n\n" +
    "Algorithms researched: cellular automata, marching squares, and edge detection.",
    href:'/projects/capstone.pdf',
    target:'_blank',
    image: {
      src: '/media/game.avif',
      alt: '',
    }
  },
  { 
    id: '1',
    title: 'Boba Buddy',
    dates: 'October 2021 to December 2021',
    description: "Developed an iPhone application using Swift and UIKit, allowing users to find nearby Boba Tea shops.\n\n" +
    "The Boba Tea shops and their information are found based on the user's current location.\n\n" +
    "Users are able to add their favorite stores to an easily accessible list and they are able to save their favorite drinks.",
    href:'https://youtu.be/z6bzwNR_fOY',
    target:'_blank',
    image: {
      src: '/media/bobabuddy.avif',
      alt: 'Boba Buddy Logo',
    }
  },
  { 
    id: '2',
    title: 'Personal Website',
    dates: '',
    description: "Over the course of a few days, I created this portfolio website from scratch using React, JavaScript, and Tailwind CSS.\n\n" +
    "The purpose of this project was to recreate my old portfolio website whilst learning more modern technologies.\n\n" +
    "The old site used pure HTML and CSS and was rather simple and boring.",
    href:'https://github.com/abrahamtrinh/abraham-site',
    target:'_blank',
    image: {
      src: '',
      alt: '',
    }
  },
]

var currModal = -1; 

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}<br/></p>);
}

export default function Projects() {
  const [showModal, setShowModal] = React.useState(false);

  function setCurrentModal(props) {
    currModal = props
    setShowModal(true)
  }

  return (
    <div id="Projects" className="bg-gray-100">
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-5xl lg:px-16">
        <p className="px-10 leading-tight max-w-5xl mx-auto text-black text-3xl md:px-20 md:text-5xl tracking-tight sm:text-4xl">
          <strong>Projects</strong>
        </p>
        <>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-24">
              {projects.map((item) => (
                <div 
                className="rounded-lg bg-white flex flex-col justify-start border-0 p-5 shadow-lg" 
                onClick={
                  () => setCurrentModal(item.id)}
                >
                  <a>
                    <img
                      src={item.image.src}
                      alt={item.image.alt}
                      className="rounded-lg bg-gray-100"
                    />
                  </a>
                  <h2 className="text-xl lg:text-2xl font-bold text-left">
                    {item.title}
                  </h2>
                  <p className="text-sm lg:text-lg font-normal text-left">
                    <i>{item.dates}</i>
                  </p>
                </div>
              ))}
          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-bold">
                        {projects[currModal].title} at {projects[currModal].company}
                      </h3>
                      <p className="text-sm lg:text-lg font-normal text-left">
                        <i>{projects[currModal].dates}</i>
                      </p>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <NewlineText text={projects[currModal].description}/>
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      
                      <a
                        href={projects[currModal].href}
                        target="_blank"
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Go to Link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      </div>
    </div>
  )
}

