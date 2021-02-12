import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';

export default function Amacimiz() {
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    
    const amacimiz = "https://api.eksicode.org/sayfalars/3";


    useEffect(() => {
        fetch(amacimiz)
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
      <div>
        <div></div>
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
      </div>
    )
}