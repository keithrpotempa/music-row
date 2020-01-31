let artists = [
    {
        name: "Bruce Atkins",
        genre: "Country",
        age: 23
    },
    {
        name: "Jensen Brown",
        genre: "Funk",
        age: 25
    },
    {
        name: "Dre Funkz",
        genre: "Funk",
        age: 25
    },
    {
        name: "Dusta Grimes",
        genre: "Rap",
        age: 21
    },
    {
        name: "Bartholomew Danielson", 
        genre: "Bluegrass" ,
        age: 23
    },
    {
        name: "Avilee Dallas",
        genre: "Country", 
        age: 19
    },
    {
        name: "Austin Kinkaid",
        genre: "Pop" ,
        age: 22
    },
    {
        name: "Loyoncé Branis",
        genre: "Rap",
        age: 27
    }
]

const labels = [
    {
        name: "Jump Stop Records",
        genres: ["Funk", "Rap"],
        artists: []
    },
    {
        name: "Chatten Records",
        genres: ["Country", "Bluegrass"],
        artists: []
    },
    {
        name: "Polar Records",
        genres: ["Pop"],
        artists: []
    }
]

const signToLabel = (genre, name, age) => {
    return {
        name: name,
        genre: genre,
        age: age
    }
}

const decideLabel = (artist) => {
    let artistGenre = artist.genre;
    let labelIndex = "";
    labels.forEach(label => {
        let labelGenres = label.genres;
        if (labelGenres.includes(artistGenre)) {
            // console.log("Artist ", artist.name, "is signed to ", label.name)
            labelIndex = labels.indexOf(label);
        }
    })
    return labelIndex;
}

artists.forEach(artist => {
    let i = decideLabel(artist)
    labels[i].artists.push(signToLabel(artist.genre, artist.name, artist.age))
})

console.log(labels)