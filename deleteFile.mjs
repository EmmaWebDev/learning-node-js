import {unlink} from 'node:fs';

unlink('./hello.html', () => {
    console.log('file deleted');
});
