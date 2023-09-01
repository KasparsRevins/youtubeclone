import SideBar from "../SideBar/SideBar";
import "./style.css";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar sticky-top">
        <div class="container-fluid">
          <div>
            <SideBar />
            <a class="navbar-brand logo">
              <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" />
            </a>
          </div>
          <div id="center">
            <form class="d-flex" role="search">
              <input
                id="search-bar"
                class="rounded-pill form-control border-dark rounded-0 rounded-end"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="rounded-pill rounded-0 rounded-start btn btn-light btn-outline-dark"
                type="submit"
              >
                <i class="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div class="row flex-nowrap">
            <div class="col-md-1 p-2">
            <i class="bi bi-three-dots-vertical" type="button"></i>
            </div>
            <div class="mx-1 border rounded-pill p-1">
              <div type="button" class="ml-2">
                <i class="bi bi-person-circle"></i>Sign In
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
