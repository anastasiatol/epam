import axios from 'axios';

export class getCollectionFromServer {
    getData(source) {
        return (
            axios.get(source)
                .then( response => {
                    return(response.data);
                })
                .catch( e => {
                    console.log(e);
            }))
        }
    }

