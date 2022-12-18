const experiences = [
  { 
    title: 'Software Engineer I',
    dates: 'Starting January 2023',
    description: '',
    image: {
      src: '/media/medtronic.png',
      alt: 'Medtronic Logo',
      href: 'https://www.medtronic.com/'
    }
  },
  { 
    title: 'Summer Engineering Intern',
    dates: 'June 2022 to August 2022',
    description: "Developed Azure DevOps pipelines to implement CI/CD practices, wrote Powershell scripts to queue automated tests with custom Test Manager, and wrote unit tests in C# to test new features in Xamarin.Forms application",
    image: {
      src: '/media/medtronic.png',
      alt: 'Medtronic Logo',
      href: 'https://www.medtronic.com/'
    }
  },
  { 
    title: 'Vice President',
    dates: 'January 2022 to December 2022',
    description: "Met with core executive members to discuss club meetings and develop coding workshops for 800+ club members. \n\n" +
    "These workshops' target was to give brief introductions to various programming languages, frameworks, and more. \n\n" +
    "Workshops included, Intro to: iOS Development, React, Node.js, Git, Linux, and Python",
    image: {
      src: '/media/gdsc.png',
      alt: 'Google Developer Student Club Logo',
      href: 'https://asudsc.com/'
    }
  },
  { 
    title: 'Computer Science Course Technical Assistant',
    dates: 'March 2021 to December 2022',
    description: "Coordinated with Arizona State University instructors to develop an interactive online course for an intro CS course teaching Java. Developing in-depth video content to aid over 1,600 students' learning in specialized topics.",
    image: {
      src: '/media/Edplus.png',
      alt: 'Edplus at Arizona State University Logo',
      href: 'https://edplus.asu.edu/'
    }
  },
  { 
    title: 'Undergraduate Teaching Assistant',
    dates: 'January 2021 to December 2021',
    description: 'Tailored individualized learning strategies for learning C/C++ to over 250 students and facilitated office hours and monitored discussions to answer student questions.',
    image: {
      src: '/media/fulton.png',
      alt: 'Ira A. Fulton School of Engineering at Arizona State University Logo',
      href: 'https://engineering.asu.edu/'
    }
  },
]

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}<br/></p>);
}

export default function Experience() {
  return (
    <div id="Experience" className="bg-myPurple-500">
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-5xl lg:px-16">
        <p className="px-10 leading-tight max-w-5xl mx-auto text-gray-300 text-3xl md:px-20 md:text-5xl tracking-tight sm:text-4xl">
          <strong>Experience</strong>
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-24">
          {experiences.map((item) => (
            <div className="rounded-lg bg-white flex flex-col justify-start border-0 p-5 shadow-lg">
              <a href={item.image.href} target="_blank">
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
                <br/>
                <br/>
                <NewlineText text={item.description}/>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

