window.onload = function () {
    var user = new User("Toto");
    var view = new UserView(user);
    var controller = new UserController(user, view);
};