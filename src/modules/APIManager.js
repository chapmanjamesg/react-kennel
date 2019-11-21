const remoteURL = "http://localhost:5002"

export default {

    get(page, id) {
        return fetch(`${remoteURL}/${page}/${id}`).then(result => result.json())
    },
    getAll(page) {
        return fetch(`${remoteURL}/${page}`).then(result => result.json())
    },
    delete(page, id) {
        return fetch(`${remoteURL}/${page}/${id}`, {
            method: "DELETE"
        })
        .then(result => result.json())
      }
}