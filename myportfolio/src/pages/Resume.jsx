import React from 'react';
import myResume from '../assets/myresume.pdf'

export default function Resume() {
    return (
        <>
            <h1>this is the RESUME page
                this page will have my resume and
                able to download
            </h1>
            <div>
                <a href={myResume} download>Download PDF</a>
            </div>
        </>
    )
}