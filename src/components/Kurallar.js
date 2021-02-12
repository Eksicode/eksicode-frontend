import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

export default function Kurallar() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    
    const kurallar = "https://api.eksicode.org/sayfalars/1";


    useEffect(() => {
        fetch(kurallar)
            .then(
                data => data.json()
            )
            .then(text => {
                const converter = new showdown.Converter();
                setContent(converter.makeHtml(text.content));
                setTitle(converter.makeHtml(text.title));
                document.title = "Eksicode.org - " + text.title
            })
    }, []);

    return (
        <div className="container">
          <div className="row">
            <div className="col m12 l6">
              <h1>{parse(title)}</h1>
            </div>
          </div>
          <div className="row">
            {parse(content)}
          </div>
        </div>
    )
}