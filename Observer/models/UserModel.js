function User(username){
    Observable.call(this);
    this.username = username;
    setTimeout((function () {
        this.notify("changed", { username: username })
    }).bind(this), 1);
}

User.prototype = Object.create(Observable.prototype);
User.prototype.constructor = User;

User.prototype.setUsername = function (username) {
    this.username = username;

    this.notify("changed", { username: this.username });
};