const root = ReactDOM.createRoot(document.getElementById('root'))

const page = (
    <div className='container'>
        <img src='./react_logo.png' width='50px' />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thosands of enterprise apps, including mobile apps</li>
        </ul>
    </div>

)

root.render(page);