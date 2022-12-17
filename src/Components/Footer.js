export default function Footer() {
  return (
    <div class="mx-auto">
      <footer class="p-4 bg-myPurple-900 shadow items-center justify-end pb-10 min-h-fit md:px-6 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-4 sm:mb-0">
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Abraham Trinh</a>
            </span>  
          </a>
          
          <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
              <a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Back to the Top</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}