import Category from "../Category/Category";
import NavBar from "../NavBar/NavBar";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Category />
      <div class="grid text-center">
        <div class="g-col-4">Video 1</div>
        <div class="g-col-4">Video 2</div>
        <div class="g-col-4">Video 3</div>

        <div class="g-col-4">Video 4</div>
        <div class="g-col-4">Video 5</div>
        <div class="g-col-4">Video 6</div>
      </div>
    </div>
  );
};
export default Body;
