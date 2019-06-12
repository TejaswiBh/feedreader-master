# Freedreader master Project

## Table of Contents

- [Project Overview](#Project-Overview)
- [Why this Project?](#Why-this-Project)
- [What will I learn?](#What-will-I-learn)
- [How will this help my career?](#How-will-this-help-my-career)
- [Development Strategy](#Development-Strategy)
- [Scratch Project link](#Scratch-Project-link)
- [Steps followed](Steps-followed)
- [How to run the Project](#How-to-run-the-Project)
- [Contributing](#Contributing)

## Scratch Project link

To download the `scratch` project for `feedreader-master` click on the below `link`.

<https://github.com/udacity/frontend-nanodegree-feedreader.git>

## Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development." This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

## How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.

Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

# Development Strategy

For a refresher (or reference) before you begin writing code, we recommend reviewing the content from [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549). Your project will be evaluated by a Udacity code reviewer according to the [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view). Please review for detailed project requirements.

1. Familiarize yourself with the starter code

  - Open up `index.html` and review the functionality of the application within your browser
  - What is all the code in `app.js` doing? Be sure to read all code comments
  - Check out `style.css`. How is styling applied to the application?

2. Explore the Jasmine spec file in `feedreader.js`

  - This is the file in which you'll be writing your tests
  - Make sure to read all code comments here as well
  - Review the [Jasmine documentation](http://jasmine.github.io) if needed

3. Edit the `allFeeds` variable in `app.js` to make the provided test fail

  - See how Jasmine visualizes this failure in your application
  - Return the `allFeeds` variable to a passing state after reviewing the failed test

4. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty

  - For example, how would you use a `for...of` loop in this test?

5. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty

  - Think about how you wrote the previous test. What are you testing for this time?

6. Write a new test suite named `"The menu"`

  - What are you `describe`-ing in this test suite?

7. Write a test that ensures the menu element is hidden by default

  - You'll have to analyze the HTML and the CSS to determine how the hiding/showing of the menu element is implemented
  - What code in `app.js` is directly involved with toggling the menu on and off?

8. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?

  - Think about how you wrote the previous test. What is different this time around?
  - Which clickable element are you checking for?
  - How do you "simulate" a mouse click that element without actually clicking it?

9. Write a test suite named `"Initial Entries"`

  - What are you `describe`-ing in this test suite?

10. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container

  - How does Jasmine's `beforeEach()`function work?
  - How does the `loadFeed()` function in `app.js` work? Is it synchronous or asynchronous?

11. Write a test suite named `"New Feed Selection"`

  - What are you `describe`-ing in this test suite?

12. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes

  - How is this test different from the previous test?

Additionally, note that:

- No test should be dependent on the results of another
- Callbacks should be used to ensure that feeds are loaded before they are tested
- Error handling should be implemented for undefined variables and out-of-bound array access
- When complete, all of your tests should pass

When you're all finished, write a `README` file detailing all steps required to successfully run the application. If you have added additional tests, provide documentation for what these future features are and what the tests are checking for.

## Note

To run the feedreader project, we require `internet`.

## Steps followed

   ** I have followed the below steps to create test suites and then pass the specs in it **

     _Initially, I have taken the first test suite named RSS Feeds_

      - In **RSS Feeds**, I have written the first spec called `are defined` to make sure that the allFeeds variable has  been defined and it is not empty and then made sure that it is passed.

- I have written the second spec called `url is defined` in RSS Feeds to make sure that it loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty and then made sure that it is passed.

- I have written the third spec called `name is defined` in RSS Feeds to make sure that it loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty and then made sure that it is passed.

  _Next, I have taken the second test suite named The menu._

- In **The menu**, I have written the first spec called `menu is hidden` to make sure that the menu element is hidden by default and made sure that it is passed.

- In The menu, I have written the second spec called `menu visibility` to make sure that the menu visibility changes when the menu icon is clicked and then made sure that it is passed.

  _Next, I have taken the third test suite named Initial Entries_

- I have written the first spec called `a single entry element in the feed container` to make sure that the LoadFeed function is called and completes its work and then makes sure that there is at least a single .entry element within the .feed container. I also ensured that the spec is passed.

  _Next, I have taken the fourth test suite named New Feed Selection_

- I have written the first spec called `to load a new feed` to make sure that when a new feed is loaded by the loadFeed function then the content actually changes. Here, `beforeEach` and `done()` functions are used since `LoadFeed()` is `asynchronous`. I also made sure that the spec is passed.

## How to run the Project

After extracting the scratch project of the feedreader, open the **index.html** page to observe the static view of the project. Initially, in the output we will get 0 specs and 0 failures. Then we should write tests for each test suite which are specified in feedreader.js and observe the output by reloading the index.html whether the tests are passed without any failures or not. After all tests are passed, then the project is made to be tested successfully using jasmine framework.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
