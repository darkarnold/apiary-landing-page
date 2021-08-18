import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__links">
                <li>
                    <a href="/" className="footer__link footer__text-aboutus">About us</a>
                </li>
                <li>
                    <a href="#main" className="footer__link footer__text-totop">Back to top &#8593;</a>
                </li>
            </ul>
            <div className="footer__links-grid">
                <ul className="footer__links">
                    <li>
                        <a href="/" className="footer__link">
                            msgordienko@yandex-team.com</a>
                    </li>
                    <li>
                        <a href="/" className="footer__link">Linkedin</a>
                    </li>
                    <li className="footer__text">+1-510-646-62-5</li>
                </ul>
                <p className="footer__text footer__text-creator">This website is developed by Practicum by
                    Yandex’students
                </p>
                <p className="footer__text footer__text-copyright">&#169; 2020 Practicum by Yandex</p>
            </div>
        </footer>
    )
}

export default Footer;