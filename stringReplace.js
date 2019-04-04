var word = 'hello world hello';
print(word.replace(new RegExp ('hello', 'gm'), 'my'));
print(word.replace(/hello/g, 'my'));
print(word.split('hello').join('my'));