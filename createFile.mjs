import {writeFile} from 'node:fs';
writeFile('./hello.html', '<h1>Learning Node Js</h1>', () => {
    console.log('file added');
})
console.log('learning');