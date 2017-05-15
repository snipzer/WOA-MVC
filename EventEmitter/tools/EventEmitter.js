function EventEmitter (){
    this.events = {};
}

EventEmitter.prototype.on = function (eventName, ftn)
{
    if(typeof ftn !== 'function' || typeof eventName !== "string")
        return;

    this.events[eventName] = this.events[eventName] || [];

    this.events[eventName].push(ftn);

};

EventEmitter.prototype.off = function (eventName, ftn)
{
    if(typeof ftn !== 'function' || typeof eventName !== "string")
        return;

    if(!this.events[eventName])
        return;

    var index = this.events[eventName].indexOf(ftn);

    if (index !== -1)
        this.events.splice(index, 1);
};

EventEmitter.prototype.emit = function (eventName, data)
{
    if(!this.events[eventName])
        return;

    this.events[eventName].forEach(function (ftn) { ftn(data) });
};