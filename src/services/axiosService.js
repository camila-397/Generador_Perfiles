import APIResquest from '../utils/axios.config'

export default function getRandomUser(){
    return APIResquest.get('/', {
        validateStatus: function(status) {
            return status < 500;
        }
    })
}