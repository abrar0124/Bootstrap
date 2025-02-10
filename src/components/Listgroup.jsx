import Header from "./Header";

function Listgroup() {
  return (
    <>
      <Header />
      {/* list group */}
      <ul class="list-group w-25 m-5 fs-5">
        <li class="list-group-item active">saba</li>
        <li class="list-group-item">sara</li>
        <li class="list-group-item">Ayesha</li>
        <li class="list-group-item">Hina</li>
        <li class="list-group-item">saba</li>
      </ul>
      <div class="list-group w-25 m-5 fs-5">
        <a href="#" class="list-group-item list-group-item-action active">
          Maths
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
          Physics
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
          Chemistry
        </a>
      </div>
      <ul class="list-group list-group-flush w-25 m-5">
        <li class="list-group-item ">Saba</li>
        <li class="list-group-item ">Sara</li>
        <li class="list-group-item ">Abrar</li>
        <li class="list-group-item ">Mama</li>
        <li class="list-group-item ">Papa</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">saba</li>
        <li class="list-group-item">abrar</li>
        <li class="list-group-item">sara</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">saba</li>
        <li class="list-group-item">abrar</li>
        <li class="list-group-item">sara</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">saba</li>
        <li class="list-group-item">abrar</li>
        <li class="list-group-item">sara</li>
      </ul>
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">saba</li>
        <li class="list-group-item">abrar</li>
        <li class="list-group-item">sara</li>
      </ul>
    </>
  );
}
export default Listgroup;
