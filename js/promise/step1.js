class Promise {
    constructor (executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolveCallbacks = [];
        this.onRejectCallbacks = [];
        // value? executor 调用时传过来的结果
        let resolve = (value) => {
            if (this.status == 'pending') {
                this.status = 'resolved';
                this.value = value;
                this.onResolveCallbacks.forEach(fn => fn());
            }
        }
        let reject = (reason) => {
            if (this.status == 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectCallbacks.forEach(fn => fn());
            }
        }
        executor(resolve, reject);
    }

    then (onFullFilled, onRejected) {
        if (this.status == 'resolved') {
            onFullFilled(this.value)
        }
        if (this.status == 'rejected') {
            onRejected(this.reason)
        }
        if (this.status == 'pending') {
            this.onResolveCallbacks.push(() => {
                onFullFilled(this.value)
            })
        }
        if (this.status == 'pending') {
            this.onRejectCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    } 
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello world');
    }, 1000);
    // reject('天哪') 
})

p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})


module.exports = Promise