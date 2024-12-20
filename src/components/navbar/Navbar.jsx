"use client";

export function CustomNavbar() {
  // Array of objects for navigation links
  const navLinks = [
    { name: "Home", href: "#home", current: true },
    { name: "About", href: "#about", current: false },
    { name: "Scholarship Details", href: "#services", current: false },
    { name: "FAQ", href: "#pricing", current: false },
    { name: "Contact", href: "#contact", current: false },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DreamSchor
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:items-center md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block py-2 px-3 rounded md:p-0 ${
                    link.current
                      ? "text-white bg-green-700 md:bg-transparent md:text-green-700"
                      : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }`}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}

<a
          href="#"
          className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white  bg-green-700 hover:bg-green-800 focus:ring-0 "
        >
          Apply Now
          </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}
