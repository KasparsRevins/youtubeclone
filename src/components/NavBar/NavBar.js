import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar sticky-top">
        <div class="container-fluid">
          <SideBar />
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex" role="search">
            <input
              class="rounded-pill form-control border-dark rounded-0 rounded-end"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="rounded-pill rounded-0 rounded-start btn btn-light btn-outline-dark"
              type="submit"
            >
              Search
            </button>
          </form>
          <div>Settings</div>
          <div class="mx-1 border rounded-pill p-1">
            <div>Image Sign In</div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
