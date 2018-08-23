const fs = require('fs');
const EventEmitter = require('events');

class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }

      this.emit('data', data,'abc');
      console.log('within func',data)
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));

withTime.on('end', () => console.log('Done with execute'));

withTime.on('data', (data,abc) => console.log('hello',abc,data));

withTime.execute(fs.readFile,__filename,"utf8");

console.log('filename is',__filename)
