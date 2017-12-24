export class appService {
    static getJokes() {
        return fetch('http://api.icndb.com/jokes/random/4', {
            method: 'GET',
        }).then(response => {
            if (response.status !== 200) {
                throw new Error('Error');
            }
            return response.json();
        });
    }
}