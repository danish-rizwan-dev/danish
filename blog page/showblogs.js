let blogsArray =[];

blogsArray = JSON . parse(localStorage.getItem("blogs"));

$("#showbtn").on("click",function(){
    showBlogs();
})
showBlogs();
function showBlogs(){
    let html = '';  

    blogsArray.forEach(function(item) {
        html += `
        <div class="px-4 py-5 my-5 text-start container box ">
        <p class="lead mb-4"> Blog Id :- ${item.id}</p>
        <h1 class="display-5 fw-bold text-body-emphasis text-center py-4">${item.title}</h1>
        <img
          class="d-block mx-auto mb-4"
          src=${item.image}
          alt="not Found"
        />
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4 fs-2">  ${item.title}</p>
          <p class="lead mb-4">${item.content}</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-primary px-4 gap-3">
              Delete
            </button>
            <button type="button" class="btn btn-outline-secondary  px-4">
              Update
            </button>
          </div>
        </div>
      </div> `
    });
    $("#blogs").html(html);
}