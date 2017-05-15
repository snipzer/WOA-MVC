function Chat (name) {
    EventEmitter.call(this);
    this.name = name;
    this.online = true;
    this.init();
}

Chat.prototype = Object.create(EventEmitter.prototype);
Chat.prototype.constructor = Chat;

Chat.prototype.init = function ()
{
    document.querySelector("#"+this.name+"-send-message").onsubmit = (function (e)
    {
        e.preventDefault();

        var messageContent = document.querySelector("#"+this.name+"-message").value;
        var messageContainer = document.querySelector("#"+this.name+"-messages-list");
        var newP = document.createElement("p");


        this.emit("message", {message: messageContent});

        newP.innerText = "Vous: "+ messageContent;

        messageContainer.appendChild(newP);
    }).bind(this);

    this.emit("connected");
};


Chat.prototype.setFriend = function (friend)
{
    this.friend = friend;

    this.friend.on("message", (function (data)
    {
        var messageBox = document.querySelector("#"+this.name+"-messages-list");

        var newP = document.createElement("p");
        newP.innerText = this.friend.name+": "+data.message;

        messageBox.appendChild(newP);

    }).bind(this));

    this.friend.on('connected', (function ()
    {
        var messageContent = document.querySelector("#"+this.name+"-messages-list");

        var newP = document.createElement("p");

        newP.innerText = this.friend.name+": Is connected";

        messageContent.appendChild(newP);

    }).bind(this));
};

// Chat.prototype.Connection = function ()
// {
//     var messageBox = document.querySelector("#"+this.name+"-messages-list");
//
//     var newP = document.createElement("p");
//     newP.innerText = this.friend.name+": "+data.message;
//
//     messageBox.appendChild(newP);
//
// };