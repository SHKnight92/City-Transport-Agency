import Airplane from './Airplane';
import Ambulance from './Ambulance';
import SubwayTrain from './SubwayTrain';
import Taxi from './Taxi';

const fakeData = [...Airplane, ...Ambulance, ...SubwayTrain, ...Taxi];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);
export default fakeData;