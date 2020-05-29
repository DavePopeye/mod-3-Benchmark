const url = "https://striveschool.herokuapp.com/api/movies/"

getMovie = async () => {
    let response = await fetch(url, {
        headers: {
            "Authorization": "Basic " + btoa("user6:4SdE6yRXfXAUHrKM")
        }
    })
    return await response.json()
}

saveMovie = async (movieSaved) => {
    let response = await fetch(url,
        {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa("user6:4SdE6yRXfXAUHrKM"),
                "Content-type": "application/json"
            },
            body: JSON.stringify(movieSaved)
        })
    return await response.json()
}

