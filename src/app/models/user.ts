import * as moment from "moment";

export class User {

    constructor(
        public name: string,
        public email: string,
        public gender: string,
        public address: string,
        public dateOfBirth: moment.Moment
    ) {
        this.dateOfBirth = moment(this.dateOfBirth, 'DD/MM/YYYY')
    }
}