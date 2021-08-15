import React from 'react';
import prBoost from "../images/PR-boost.png";
import resourceSaving from "../images/resource-saving.png";
import publicize from "../images/publicize.png";

function SectionWhyUseful() {
    return (
        <section className="content content_theme_dark">
            <div className="content__wrapper">
                <h2 className="content__heading content__heading_theme_dark">Why is it useful for your company?</h2>
                <h3 className="content__text content__text_theme_dark">By handing over assignments to students for work,
                    you
                    free experienced
                    employees
                    from routine tasks, as well as increase brand awareness.</h3>
                <div className="grid__items">
                    <div className="grid__item">
                        <img src={`${resourceSaving}`} alt="resource saving" className="grid__item-image" />
                        <h4 className="grid__title">Resource saving</h4>
                        <p className="grid__subtitle">Delegate tasks for free and get results that can be used in your
                            future
                            work.</p>
                    </div>
                    <div className="grid__item">
                        <img src={`${publicize}`} alt="publicize" className="grid__item-image" />
                        <h4 className="grid__title">Publicize</h4>
                        <p className="grid__subtitle">We take pride in the real-world value of the tasks that our
                            students
                            perform and we share them in all available channels.</p>
                    </div>
                    <div className="grid__item">
                        <img src={`${prBoost}`} alt="PR boost" className="grid__item-image" />
                        <h4 className="grid__title">PR boost</h4>
                        <p className="grid__subtitle">This will increase the visibility of the company among job seekers
                            and
                            attract those who share the values of your company.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWhyUseful;