import nookies from 'nookies';
import Router from 'next/router';

async function profileToggle() {
    var profileDropdown = document.getElementById('ProfileDropDown');
    if (profileDropdown.style.display === "none") {
        profileDropdown.style.display = "block";
    } else {
        profileDropdown.style.display = "none";
    }
}

async function sidebarToggle() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

export default function Header() {
  function Logout(){
    nookies.destroy(null, 'token');
    Router.replace(`../admin/login`)
  }

    return (
    <header className="bg-gray-darkest">
    <div className="flex justify-between">
      <div className="p-1 mx-3 inline-flex items-center">
        <i
          className="fas fa-bars pr-2 text-gray-lightest"
          onClick={sidebarToggle}
        />
        <h1 className="text-gray-lightest text-xl p-2">Logo</h1>
      </div>
      <div className="p-1 flex flex-row items-center">
        <img
          onClick={profileToggle}
          className="inline-block h-8 w-8 rounded-full"
          src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4"
          
        />
        <a
          href="#"
          onClick={profileToggle}
          className="text-gray-lightest p-2 no-underline hidden md:block lg:block"
        >
          Adam Wathan
        </a>
        <div
          id="ProfileDropDown"
          className="rounded hidden  border-1 border-gray shadow-md bg-gray-lightest absolute top-0 mt-12 mr-1 right-0"
        >
          <ul className="list-reset">
            <li>
              <a
                href="#"
                className="no-underline px-4 py-2  rounded block text-gray-hitam hover:bg-gray"
              >
                My account
              </a>
            </li>
            <li>
              <hr className="border-t mx-2 border-gray" />
            </li>
            <li>
              <a
                onClick={Logout}
                className="no-underline px-4 py-2 block rounded text-gray-hitam hover:bg-gray"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    );
}