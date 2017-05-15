window.onload = function () {
    //instanciation des models, vues et controllers
    var user = new User("Toto");
    var view = new UserView();
    var controller = new UserController(user);

    //determination de qui observe qui
    user.addObserver(view);
    view.addObserver(controller);

};