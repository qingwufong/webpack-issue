import { isFunction } from 'lodash';

onmessage = (message) => {
    if (isFunction(message.data)) {
        console.log('isFunction');
    }
};
