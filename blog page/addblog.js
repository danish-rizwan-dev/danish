let blogsArray = [];

if (localStorage.getItem("blogs")) {
    blogsArray = JSON.parse(localStorage.getItem("blogs"));
}

class Blog {
    constructor(id,category, title, image, content) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.image = image;
        this.content = content;
    }
}
    
function submitBlog() {
    const blogId = $('#id').val();
    const title = $('#title').val(); 
    const image = $('#image').val(); 
    const content = $('#content').val(); 
    const check = blogsArray.find(function(item) {
        return item.id === blogId; 
    });

    if (!check) {
        if (title && image && content) {
            const newBlog = new Blog(blogId, title, image, content);

            blogsArray.push(newBlog);

            localStorage.setItem("blogs", JSON.stringify(blogsArray));

            console.log(blogsArray);

            $('#id').val('');
            $('#title').val('');
            $('#image').val('');
            $('#content').val('');

            alert('Blog submitted successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    } else {
        alert('ID already exists');
    }
}

$('#submitButton').on('click', submitBlog);
