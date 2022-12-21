import React from "react";

const experiences = [
  { 
    id: '0',
    title: 'Software Engineer I',
    company: 'Medtronic',
    dates: 'Starting January 2023',
    description: '',
    image: {
      src: '/media/medtronic.jpg',
      alt: 'Medtronic Logo',
      href: 'https://www.medtronic.com/'
    }
  },
  { 
    id: '1',
    title: 'Summer Engineering Intern',
    company: 'Medtronic',
    dates: 'June 2022 to August 2022',
    description: "Developed Azure DevOps pipelines to implement CI/CD practices, wrote Powershell scripts to queue automated tests with custom Test Manager, and wrote unit tests in C# to test new features in Xamarin.Forms application.",
    image: {
      src: '/media/medtronic.jpg',
      alt: 'Medtronic Logo',
      href: 'https://www.medtronic.com/'
    }
  },
  { 
    id: '2',
    title: 'Vice President',
    company: 'Google Developer Student Club (ASU)',
    dates: 'January 2022 to December 2022',
    description: "Met with core executive members to discuss club meetings and develop coding workshops for 800+ club members. \n\n" +
    "These workshops' target was to give brief introductions to various programming languages, frameworks, and more. \n\n" +
    "Workshops included, Intro to: iOS Development, React, Node.js, Git, Linux, and Python.",
    image: {
      src: '/media/gdsc.jpg',
      alt: 'Google Developer Student Club Logo',
      href: 'https://asudsc.com/'
    }
  },
  { 
    id: '3',
    title: 'Computer Science Course Technical Assistant',
    company: 'EdPlus (ASU)',
    dates: 'March 2021 to December 2022',
    description: "Coordinated with Arizona State University instructors to develop an interactive online course for an intro CS course teaching Java.\n\n" +
    "Developed in-depth video content to aid over 1,600 students' learning in specialized topics.",
    image: {
      src: '/media/Edplus.jpg',
      alt: 'Edplus at Arizona State University Logo',
      href: 'https://edplus.asu.edu/'
    }
  },
  { 
    id: '4',
    title: 'Undergraduate Teaching Assistant',
    company: 'Ira A. Fulton Schools of Engineering (ASU)',
    dates: 'January 2021 to December 2021',
    description: "Tailored individualized learning strategies for learning C/C++ to over 250 students.\n\n" +
    "Facilitated office hours and monitored discussions to answer student questions.",
    image: {
      src: '/media/fulton.jpg',
      alt: 'Ira A. Fulton School of Engineering at Arizona State University Logo',
      href: 'https://engineering.asu.edu/'
    }
  },
]

var currModal = -1; 

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}<br/></p>);
}

export default function Experience() {
  const [showModal, setShowModal] = React.useState(false);

  function setCurrentModal(props) {
    currModal = props
    setShowModal(true)
  }

  return (
    <div id="Experience" className="bg-myPurple-500">
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-5xl lg:px-16">
        <p className="px-10 leading-tight max-w-5xl mx-auto text-gray-300 text-3xl md:px-20 md:text-5xl tracking-tight sm:text-4xl">
          <strong>Experience</strong>
        </p>
        <>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-24">
              {experiences.map((item) => (
                <div 
                className="rounded-lg bg-white flex flex-col justify-start border-0 p-5 shadow-lg cursor-pointer" 
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
                        {experiences[currModal].title} at {experiences[currModal].company}
                      </h3>
                      <p className="text-sm lg:text-lg font-normal text-left">
                        <i>{experiences[currModal].dates}</i>
                      </p>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <NewlineText text={experiences[currModal].description}/>
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
                        href={experiences[currModal].image.href}
                        target="_blank"
                        className="bg-myPurple-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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