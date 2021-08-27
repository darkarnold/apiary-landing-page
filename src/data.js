import prBoost from "./images/PR-boost.png";
import resourceSaving from "./images/resource-saving.png";
import publicize from "./images/publicize.png";
import quality from "./images/quality.png";
import professionalism from "./images/Professionalism.png";
import experience from "./images/experience.png";
import peopleWithLaptop from "./images/peopleWithLaptop.png";
import checklist from "./images/checklist.svg";
import question from "./images/question.svg";
import work from "./images/work.svg";

export const contentWhyUseful = {
  title: "Why is it useful for your company?",
  subtitle:
    "By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness.",
  items: [
    {
      position: "1",
      image: resourceSaving,
      title: "Resource saving",
      subtitle:
        "Delegate tasks for free and get results that can be used in your future work.",
    },
    {
      position: "2",
      image: publicize,
      title: "Publicize",
      subtitle:
        "We take pride in the real-world value of the tasks that our students perform and we share them in all available channels.",
    },
    {
      position: "3",
      image: prBoost,
      title: "PR boost",
      subtitle:
        "This will increase the visibility of the company among job seekers and attract those who share the values of your company.",
    },
  ],
};

export const contentWhyChooseUs = {
  title: "Why choose us?",
  subtitle:
    "We have built the largest IT company in Russia. We know how to develop cool employees, and we work hard to make our clients' lives better and happier.",
  items: [
    {
      position: "1",
      image: quality,
      title: "Quality",
      subtitle:
        "The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed.",
    },
    {
      position: "2",

      image: professionalism,
      title: "Professionalism",
      subtitle:
        "Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill.",
    },
    {
      position: "3",
      image: experience,
      title: "Experience",
      subtitle:
        "Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world.",
    },
  ],
};

export const contentDelegateTasks = {
  title: "Delegate tasks to those who enjoy them",
  subtitle:
    "Check out the projects our students have done for companies in the USA and beyond",
  image: peopleWithLaptop,
};

export const contentHowToStart = {
  title: "How to Start?",
  items: [
    {
      position: "1",
      image: checklist,
      title: "Fill in the checklist",
      subtitle: "So that we can understand your request and how we can help you"
    },
    {
      position: "2",
      image: question,
      title: "We will clarify the details and connect the necessary experts",
      subtitle: "We will help you formulate the request so that it's understandable to our students, and you will receive a high-quality solution in a timely manner"
    },
    {
      position: "3",
      image: work,
      title: "We will start solving your tasks",
      subtitle: "Practicum by Yandex students will solve the task, then our curators check and correct their solutions. We'll send you the work. Additionally, if you wish, you may talk to the authors of the best solutions and invite them to join you"
    },
  ]
}