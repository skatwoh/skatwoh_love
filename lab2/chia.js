const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
theList.shift();
theList.pop();
theList.unshift('FIRST');
theList.push('LAST');
theList.splice(3, 0, 'hello world');
theList.splice(2, 0, 'middle');
console.log(theList);