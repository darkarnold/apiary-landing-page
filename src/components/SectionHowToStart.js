import React from "react";
import checklist from "../images/checklist.svg";
import question from "../images/question.svg";
import work from "../images/work.svg";

function SectionHowToStart() {
    return (
        <section className="content">
            <div className="content__wrapper">
                <h2 className="howToStart__heading">How to Start?</h2>
                <div className="grid grid__items howToStart__grid-items">
                    <div className="grid__item">
                        <img src={checklist} alt="checklist" className="grid__item-image" />
                        <p className="howToStart__text hide__device_minwidth_1024">1</p>
                        <h4 className="howToStart__title">Fill in the checklist</h4>
                        <p className="howToStart__subtitle">So that we can understand your request and how we can help you</p>
                    </div>
                    <div className="grid__item">
                        <img src={question} alt="clarify question" className="grid__item-image" />
                        <p className="howToStart__text hide__device_minwidth_1024">2</p>
                        <h4 className="howToStart__title">We will clarify the details and connect the necessary experts</h4>
                        <p className="howToStart__subtitle">We will help you formulate the request so that it's understandable to our students, and you will receive a high-quality solution in a timely manner</p>
                    </div>
                    <div className="grid__item">
                        <img src={work} alt="working bee" className="grid__item-image" />
                        <p className="howToStart__text hide__device_minwidth_1024">3</p>
                        <h4 className="howToStart__title">We will start solving your tasks</h4>
                        <p className="howToStart__subtitle">Practicum by Yandex students will solve the task, then our curators check and correct their solutions. We'll send you the work. Additionally, if you wish, you may talk to the authors of the best solutions and invite them to join you</p>
                    </div>
                    <div className="grid__item steps-wrapper">
                        <div className="steps">
                            <div className="step">
                                <p className="howToStart__text">1</p>
                            </div>
                            <div className="step">
                                <p className="howToStart__text">2</p>
                            </div>
                            <div className="step">
                                <p className="howToStart__text">3</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionHowToStart;