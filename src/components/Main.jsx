import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    function handleChange(event) {
        const { value, name } = event.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(
            Math.random() * allMemes.length
        )

        const newMemeUrl = allMemes[randomNumber].url

        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }

    return (
        <main>
            <div className="form">
                <label>
                    Top Text
                    <input
                        type="text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>
                    Bottom Text
                    <input
                        type="text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>

                <button onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>

        </main>
    )
}