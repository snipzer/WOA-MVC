function UserView()
{
    Observable.call(this);
    this.init();
}

UserView.prototype = Object.create(Observable.prototype);
UserView.prototype.constructor = User;

UserView.prototype.update = function (label, data)
{
    if(label === "changed")
    {
        document.querySelector("#show-username").innerText = data.username;
    }
};

UserView.prototype.init = function ()
{
    document.querySelector("#change-username").onsubmit = (function (e)
    {
        e.preventDefault();

        this.notify("change-username", {
            username: document.getElementById('username').value
        });
    }).bind(this);
};