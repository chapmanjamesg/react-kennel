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
    },
    post(page, newItem) {
        return fetch(`${remoteURL}/${page}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then(data => data.json())
    },
    update(page, editedItem) {
        return fetch(`${remoteURL}/${page}/${editedItem.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedItem)
        }).then(data => data.json());
    },
    getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
        .then(result => result.json())
    }
}