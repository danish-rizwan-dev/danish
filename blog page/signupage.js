let UserArray = [];

if (localStorage.getItem("users")) {
    UserArray = JSON.parse(localStorage.getItem("users"));
}

class User {
    constructor(userId, name, userEmail, userPassword) {
        this.userId = userId;
        this.name = name;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}

function signUp() {
    const userId = $('#userId').val();
    const name = $('#userName').val(); 
    const validEmail = $('#userEmail').val(); 
    const userPassword = $('#userPassword').val(); 
    
    const check = UserArray.find(function(item) {
        return item.userEmail === validEmail; 
    });

    if (!check) {
            const newUser = new User(userId, name, userEmail, userPassword);
            console.log(newUser);
            UserArray.push(newUser);
            localStorage.setItem("users", JSON.stringify(UserArray));
            console.log(UserArray);
            alert('User signed Up successfully!');
    } else {
        alert('ID already exists');
    }
    
}

$('#signupbtn').on('click', function(){
    signUp();
});
