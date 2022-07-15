const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
    return (
        <nav>
            <img src='./react_logo.png' width='50px' />
        </nav>
    )
}

function Footer() {
    return (
        <footer>
            <small>&#169; 2022 Hunnicut Development. All Rights Reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
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
}

function Page() {
    return (
        <div className='container'>
            <Header />
            <MainContent />
            <Footer />
        </div>
    
    )
} 

root.render(<Page />);