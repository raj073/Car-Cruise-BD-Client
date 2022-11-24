import React from 'react';

const BLog = () => {


    return (


        <div className="flex items-center justify-center">
            <div className="bg-white">
                <div className="container flex flex-col justify-center mx-auto px-4 py-8 md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Featured Blogs
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                    Frequently Asked Questions
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            <b>Q1.</b> What are the different ways to manage a state in a React application? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <strong><i>Answer: </i></strong> <br />
                                There are four main types of state you need to properly 
                                manage a React application: <br />

                                <b>1. Local state: </b>Local state is data we manage in one or another component.
                                    Local state is most often managed in React using the useState hook. <br />
                                <b>2. Global state: </b>
                                Global state is data we manage across multiple components.Global state is necessary 
                                when we want to get and update data anywhere in our app, or in multiple components 
                                at least. <br />
                                <b>3. Server state: </b>
                                Data that comes from an external server that must be integrated with our UI state.
                                Server state is a simple concept, but can be hard to manage alongside all of our 
                                local and global UI state. <br />
                                <b>4. URL state: </b>
                                Data that exists on our URLs, including the pathname and query parameters.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            <b>Q2.</b> How does prototypical inheritance work? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            <strong><i>Answer: </i></strong> <br />
                            The Prototypal Inheritance is a feature in javascript used to add methods and 
                            properties in objects. It is a method by which an object can inherit the 
                            properties and methods of another object. Traditionally, in order to get and 
                            set the [Prototype] of an object, we use Object. getPrototypeOf and Object. <br />
                            Every object with its methods and properties contains an internal and hidden 
                            property known as [[Prototype]]. The Prototypal Inheritance is a feature in 
                            javascript used to add methods and properties in objects. It is a method by 
                            which an object can inherit the properties and methods of another object. 
                            Traditionally, in order to get and set the [[Prototype]] of an object, 
                            we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern 
                            language, it is being set using __proto__.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            <b>Q3.</b> What is a unit test? Why should we write unit tests? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            <strong><i>Answer: </i></strong> <br />
                            <b>Unit Test: </b> Unit Testing is a type of software testing where individual 
                            units or components of a software are tested. The purpose is to validate that 
                            each unit of the software code performs as expected. Unit Testing is 
                            done during the development (coding phase) of an application by the developers. 
                            Unit Tests isolate a section of code and verify its correctness. 
                            A unit may be an individual function, method, procedure, module, or object. <br />

                            For Test-Driven Development (TDD), we write unit tests before writing 
                            any implementation. This makes your implementation details in your code shorter 
                            and easier to understand. In this instance, the best time to write unit tests 
                            is immediately. For others, most developers write unit tests after the code's 
                            been written.
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            <b>Q4.</b> React vs. Angular vs. Vue? 
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            <strong><i>Answer: </i></strong> <br />
                            Angular JS and React JS frameworks are used to create web interfaces for front end 
                            development. Angular is Google's matured and advanced JavaScript framework based 
                            on TypeScript, whereas Vue is a progressive open-source front-end JavaScript 
                            framework created by Evan You. <br /> <br />
                            <b>Angular.js</b> is an MVC framework. A major disadvantage of Angular is that it uses a 
                            regular DOM, and thus, the entire tree structure of the HTML tags is updated, 
                            which massively impacts the loading time. Angular.js has its Ionic framework 
                            for mobile applications. <br /> <br />
                            <b>React.js</b> just provides one view, it is not appropriate for building an MVC 
                            architecture: you must solve the model and controller yourself. Besides this, there are only 
                            advantages and lots of advantages.One of the biggest of them is that React.js 
                            uses a virtual DOM that only compares the previous HTML code differences and only 
                            loads the different parts. This significantly impacts the loading times. In a 
                            positive way, of course. With React.js, you handle the markup and the logic in 
                            the same file, which means you can output variables in a view component (JSX). 
                            React offers a type of mobile solution for applications called React-Native. <br /> <br />
                            <b>Vue.js</b> is a JavaScript-based progressive framework for creating single-page 
                            applications. It was created with scalability and incrementality in mind, as 
                            well as ease of integration with other view layer frameworks. Vue is built 
                            from the bottom up to be progressively adaptable, unlike other monolithic 
                            frameworks. The core library focuses solely on the view layer, and it's 
                            simple to use and connect with other libraries or applications. This framework's 
                            fast learning angle is almost a trademark. It's a flexible framework that may be 
                            used as a library or a full-fledged framework for developing large web 
                            applications. Vue.js combines the useful principles of the Angular and React 
                            frameworks and presents them in a minimalistic modern style. Web developers use 
                            Vue.js to create frontend user interfaces for web-based and hybrid mobile 
                            applications.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default BLog;