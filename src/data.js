import prBoost from "./images/PR-boost.png";
import resourceSaving from "./images/resource-saving.png";
import publicize from "./images/publicize.png";
import quality from "./images/quality.png";
import professionalism from "./images/Professionalism.png";
import experience from "./images/experience.png";
import peopleWithLaptop from "./images/peopleWithLaptop.png";
import bubbleAvatar from "./images/bubble-avatar.png";

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

export const contentBubble = {
  title: "What is Practicum by Yandex?",
  image: bubbleAvatar,
  messages: [
    {
      id: "1",
      left: "Practicum by Yandex is a kind of boot camp. Our goal is to help ambitious and passionate people to master it and find their first job. At the same time, the level of our training allows graduates to carry out high-quality real projects of companies under the review of experienced mentors.",
      right: "Who will solve the problems? How much does it cost?"
    },
    {
      id: "2",
      left: "It is a win-win situation: we take real tasks from real companies and give them to graduates of Data Science and Data Analytics courses. The results of these tasks will be repeatedly checked by curators and returned to the customer as ordered for free.",
      right: "Why is it free?"
    },
    {
      id: "3",
      left: "Because Practicum has students who are eager to gain real life experience, find them interesting and useful, and are ready to take on your tasks",
      right: "Wow! I'm ready to start!"
    },
  ]
}