import {TEST} from './actions';

export default function (state = 0, action) {
    console.log(action);
    switch (action.type) {
        case TEST:

            return state + 1;

        default:
            return state;

    }


};