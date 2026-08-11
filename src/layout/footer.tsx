const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-red-800 p-4 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <ul className="flex gap-4 mt-2 md:mt-0">
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Terms of Service</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer