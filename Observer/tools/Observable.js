function Observable (){
    this.observers = [];
}

Observable.prototype.addObserver = function (observer)
{
    this.observers.push(observer)
};

Observable.prototype.removeObserver = function (observer)
{
    var index = this.observer.indexOf(observer);
    if (index !== -1)
    {
        this.observers.splice(index, 1);
    }
};

Observable.prototype.notify = function (label, data)
{
    this.observers.forEach(function (observer)
    {
        observer.update(label, data);
    })
};