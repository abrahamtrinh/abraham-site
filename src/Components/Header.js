const people = [
  {
    name: 'Abraham',
    title: 'Software Engineer.',
    email: 'trinh.abraham@gmail.com',
    image:
      '/media/avatar.jpg',
  }
]

export default function Header() {
  return (
    <div id="Header" className="shadow bg-macOS bg-cover min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10">
      <div className="mx-auto grid max-w-1xl grid-cols-1 items-center gap-y-4 gap-x-4 py-4 px-4 sm:px-6 sm:py-32 lg:max-w-4xl lg:grid-cols-2 lg:px-8">
        <div className="mx-auto w-48 h-48 items-center" id="Avatar">
          <img className="rounded-full" src={people[0].image} alt="" />
        </div>

        <div className="mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            {people[0].title}
          </h2>
          <p className="mt-4 text-gray-300 max-w-sm">
            Dedicated computer science graduate from Arizona State University with superb communication and organization skills, 
            experienced with mobile app development and DevOps
          </p>
        </div>
      </div>
    </div>
  )
}