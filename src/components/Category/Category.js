import "./style.css";
const Category = () => {
  return (
    <div class="container" style={{ paddingTop: "25px" }}>
      <div class="grid text-center align-items-center category">
        <div class="border rounded-pill p-1" style={{color: "white", backgroundColor: "black"}} type="button">All</div>
        <div class="border rounded-pill p-1" type="button">Adventure</div>
        <div class="border rounded-pill p-1" type="button">Music</div>
        <div class="border rounded-pill p-1" type="button">Live</div>
        <div class="border rounded-pill p-1" type="button">Chill-out music</div>
        <div class="border rounded-pill p-1" type="button">News</div>
        <div class="border rounded-pill p-1" type="button">Background music</div>
        <div class="border rounded-pill p-1" type="button">Gadgets</div>
      </div>
    </div>
  );
};
export default Category;
