import { escape } from 'lodash';

onmessage = (message) => {
    const escapedName = escape(message.data.name);
    console.log('escapedName', escapedName);
};
