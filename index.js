const root = ReactDOM.createRoot(document.getElementById('root'));

function Header() {
    return (
        <header>
            <div className="content-div">
                <nav className="main-nav">
                <img src='./react_logo.png' className="nav-logo" />
                    <ul className="nav-items">
                        <li className="nav-item">Pricing</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <div className="content-div">
                <div className="footer-content">
                    <small>&#169; 2022 Jordan Hunnicut Development. All Rights Reserved.</small>
                </div>
            </div>
        </footer>
        )
}

function MainContent() {
    return (
        <div className='main-content'>
            <div className="content-div">
                <h1>Fun facts about React</h1>
                <ul className="react-list">
                    <li className="react-list--item">Was first released in 2013</li>
                    <li className="react-list--item">Was originally created by Jordan Walke</li>
                    <li className="react-list--item">Has well over 100K stars on Github</li>
                    <li className="react-list--item">Is maintained by Facebook</li>
                    <li className="react-list--item">Powers thosands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
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