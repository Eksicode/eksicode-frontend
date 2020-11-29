import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

export default function Kurallar() {
    const [content, setContent] = useState("");

    const kurallar = "https://api.eksicode.org/sayfalars/1";


    useEffect(() => {
        document.title = "Eksicode.org - Grup Kuralları"

        fetch(kurallar)
            .then(
                data => data.json()
            )
            .then(text => {
                const converter = new showdown.Converter();
                setContent(converter.makeHtml(text.content));
            })
            
    }, []);

    return (
        <div>
        <div></div>
        <div className="container">
        <div className="row">
                <div className="col m12 l6">
                    <h1>Grup Kuralları</h1>
                </div>
        </div>
    <div className="row">
        {parse(content)}
    </div>
    </div>
    </div>
    )
}