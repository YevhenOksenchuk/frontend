import {all, call, spawn } from 'redux-saga/effects';

export default function* rootSaga(): Generator {
    const sagas: Array<Generator> = [];

    try {
        const retry: any = yield sagas.map((saga: any) => {
            return spawn(function* () {
                while (true) {
                    try {
                        // second argument can be api requests
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.log(e);
                    }
                }
            });
        });

        yield all(retry);

    } catch (e) {
        console.log(e)
    }
}
