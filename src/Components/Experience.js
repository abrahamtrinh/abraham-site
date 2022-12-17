const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
]

export default function Experience() {
  return (
    <div id="Experience" className="bg-myPurple-500">
      <div className="mx-auto grid max-w-xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-5xl lg:px-16">
        <p className="px-10 leading-tight max-w-5xl mx-auto text-gray-300 text-3xl md:px-20 md:text-5xl tracking-tight sm:text-4xl">
          <strong>Experience</strong>
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-24">
          <div className="rounded-lg bg-white flex flex-col items-center justify-start border-0 p-5 shadow-lg">
            <a href="https://www.medtronic.com/" target="_blank">
              <img
                src="/media/medtronic.png"
                alt="Medtronic Logo"
                className="rounded-lg bg-gray-100"
                href="https://www.medtronic.com/"
              />
            </a>
            <h2 className="text-xl lg:text-2xl font-bold">
              Software Engineer I
            </h2>
            <p className="text-sm lg:text-lg font-normal">
              
            </p>
          </div>
          
          <div className="rounded-lg bg-white flex flex-col items-center justify-start border-0 p-5 shadow-lg">
            <a href="https://www.medtronic.com/" target="_blank">
              <img
                src="/media/medtronic.png"
                alt="Medtronic Logo"
                className="rounded-lg bg-gray-100"
                href="https://www.medtronic.com/"
              />
            </a>
            <h2 className="text-xl lg:text-2xl font-bold">
              Summer Engineering Intern
            </h2>
            <p className="text-sm lg:text-lg font-normal">
              Developed <strong>Azure DevOps</strong> pipelines to implement <strong>CI/CD</strong> practices,
              wrote <strong>Powershell</strong> scripts to queue automated tests with custom Test Manager, and
              wrote unit tests in <strong>C#</strong> to test new features in Xamarin.Forms application
            </p>
          </div>

          <div className="rounded-lg bg-white flex flex-col items-center justify-start border-0 p-5 shadow-lg">
            <a href="https://asudsc.com/" target="_blank">
              <img
                src="/media/gdsc.png"
                alt="Google Developer Student Club Logo"
                className="rounded-lg bg-gray-100"
                href="https://asudsc.com/"
              />
            </a>
            
            <h2 className="text-xl lg:text-2xl font-bold">
              Vice President
            </h2>
            <p className="text-sm lg:text-lg font-normal">
            Met with core executive members to discuss club meetings 
            and develop coding workshops for 800+ club members.
            <br/>
            <br/> 
            These workshops' target was to give brief introductions to
            various programming languages, frameworks, and more. 
            (Intro to: <strong>iOS Development</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>Git</strong>, <strong>Linux</strong>, and <strong>Python</strong>)</p>
          </div>


          <div className="rounded-lg bg-white flex flex-col items-center justify-start border-0 p-5 shadow-lg">
            <a href="https://edplus.asu.edu/" target="_blank">
              <img
                src="/media/Edplus.png"
                alt="Edplus at Arizona State University Logo"
                className="rounded-lg bg-gray-100"
                href="https://edplus.asu.edu/"
              />
            </a>
            
            <h2 className="text-xl lg:text-2xl font-bold">
              Computer Science Course Technical Assistant
            </h2>
            <p className="text-sm lg:text-lg font-normal">
              Coordinated with Arizona State University instructors to 
              develop an interactive online course for an intro CS course teaching <strong>Java</strong>.
              Developing in-depth video content to aid over 1,600 students' learning in specialized topics.
            </p>
          </div>

          <div className="rounded-lg bg-white flex flex-col items-center justify-start border-0 p-5 shadow-lg">
            <a href="https://engineering.asu.edu/" target="_blank">
              <img
                src="/media/fulton.png"
                alt="Ira A. Fulton School of Engineering at Arizona State University Logo"
                className="rounded-lg bg-gray-100"
                href="https://engineering.asu.edu/"
              />
            </a>
            
            <h2 className="text-xl lg:text-2xl font-bold">
              Undergraduate Teaching Assistant
            </h2>
            <p className="text-sm lg:text-lg font-normal">
              Tailored individualized learning strategies for learning <strong>C/C++</strong> to over 250 students and
              facilitated office hours and monitored discussions to answer student questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
