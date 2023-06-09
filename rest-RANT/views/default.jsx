const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
                    <ul>
                        <li>
                        <a href="/">Home</a>
                        </li>
                        <li>
                        <a href="/places">Places</a>
                        </li>
                        <li>
                        <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                    </nav>

                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

