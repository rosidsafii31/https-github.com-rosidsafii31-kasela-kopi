
export default function Sidebarkiri() {
    return (
        <aside
        id="sidebar"
        className="bg-gray-light w-1/2 md:w-1/6 lg:w-1/6 border-r border-side-nav hidden md:block lg:block"
      >
        <div className="flex"></div>
        <ul className="list-reset flex flex-col ">
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="../admin/artikel"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
              Artikel
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="forms.html"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
              Produk
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="forms.html"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
              Galeri
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="forms.html"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
                Categori
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="forms.html"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
              Profil Kasela
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
          <li className="w-full h-full  bg-gray-light hover:bg-gray py-3 px-2 border-b border-300-border">
            <a
              href="forms.html"
              className="font-produk3  text-lg text-nav-item no-underline"
            >
              <i className="fab fa-wpforms  float-left mx-2" />
              Profil Depan
              <span>
                <i className="fa fa-angle-right float-right" />
              </span>
            </a>
          </li>
        </ul>
      </aside>
    )
}