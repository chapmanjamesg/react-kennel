const remoteURL = "http://localhost:5002"

export default {

    //this will gather one item from the JSON server, based off the page and the id. 
    get(page, id) {
        return fetch(`${remoteURL}/${page}/${id}`).then(result => result.json())
    },
    //this will gather all the items from the JSON server, based off the page that the fetch call is being made.
    getAll(page) {
        return fetch(`${remoteURL}/${page}`).then(result => result.json())
    },
    //this will delete one item from the JSON server, based off the page and id that the fetch call is made on.
    delete(page, id) {
        return fetch(`${remoteURL}/${page}/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      }
}