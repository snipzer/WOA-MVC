function UserView(model)
{
    EventEmitter.call(this);
    this.model = model;
    this.init();
}

UserView.prototype = Object.create(EventEmitter.prototype);
UserView.prototype.constructor = User;

UserView.prototype.init = function ()
{
    document.querySelector("#change-username").onsubmit = (function (e)
    {
        e.preventDefault();

        this.emit("change-username", {
            username: document.getElementById('username').value
        });
    }).bind(this);

    this.model.on('changed', function (data)
    {
        document.querySelector("#show-username").innerText = data.username;
    });
};