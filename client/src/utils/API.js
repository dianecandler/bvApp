import axios from "axios";

export default {
    saveDate: function (data) {
        return axios.post('/api/appointments', {
            _id: data._id,
            date: data.date,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            eventNotes: data.eventNotes,
            questions: data.questions,
            terms: data.terms,
            privacy: data.privacy,
            validateCheck: data.validateCheck
        }).then(res => res.data).catch(err => console.log(err))
    },
    savedData: function () {
        return axios.get('/api/appointments').then(res => res.data);
    },
    getDate: function(id) {
        return axios.get('/api/appointments/' + id).then(res => res.data);
    }
}