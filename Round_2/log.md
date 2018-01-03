# 100 Days Of Code - Log

### Day 1: January 1, 2017

**Today's Progress**: Re-solved a problem from Pramp interview: findLargestSmallerKey. Object is to find the largest value in a binary tree that is smaller than a given number. I didn't really get it during the interview, was helpful to try to solve it on my own again.

**Thoughts:** This has been a useful introduction to Binary Search Trees and their traversal. This problem highlighted my need to brush up on recursion and has excited me to plow ahead into more data structures (breadth-first search?) and cozy up better with BSTs (depth-first?). Also excited to be back in the 100 Days of Code saddle.

**Link(s) to work:** [findLargestSmallerKey](http://tinyurl.com/yb7mcpxq)

**Tweet:** Starting Round 2 #100daysofcode. Day 1: Solved binary search tree problem from Pramp interview. Didn't get it during the interview, helpful to try again on my own.  http://tinyurl.com/yb7mcpxq  . Stoked to be getting back in the saddle! #dailypractice

### Day 2: January 2, 2017

**Today's Progress**: Diagramed out the components, data flow, and client-server relationships of a new app. Studied the API documentation of a couple of services that will be required, made sure they can do what is required. 

**Thoughts:**: re-writing the Log-App. Where to start? Read an (https://www.codementor.io/codementorteam/how-to-build-app-from-scratch-beginner-programmer-7z0atq56w)[article] on how to plan out an application build. Helped me think through and answer some useful questions like: exactly what functions will the user be able to perform? What technologies will be involved? What does the stack look like? What does the data flow look like? What does the UI look like? What does the database look like? I didn't know the answers to a lot of these questions but I did do some doodling and drawing of boxes that represented some components and arrows pointing to others and some names of bits of data and where they would come from and where they would go to. Even thinking through the chain of events that needs to follow the click of "Forgot Password?" was enlightening...there's a bunch of steps in that one process!

In diagramming this stuff out, I didn't worry much about getting all the names and steps and order just right. There are a bunch of embarrassing errors in there, no doubt. This isn't about building a blueprint to hand off to a builder so they can execute a perfectly spec'd plan. No, this is about sketching out a very rough shape for my own brain to hold as a mental model. It's about breaking down the project into a few broad strokes instead of the one amorphous blog full of question marks and magic that was previously drifting around in my head.

I only vaguely remembered some things about how React works in terms of state and props so I didn't worry about what would be passed as state vs props nor antything about the component lifecycle. Those gaps in my knowledge and comfort will be flushed out when I start writing the code. Also, since I'm planning to use Redux this time, I'm going to have to do some learning about that as well as deciding which type of database to use.

That part about unit testing was intriguing as unit testing is not something I much experience with. Really, I just don't have a concept of how to implement it. I am adding that to my list of things I hope to learn through this build.

I think the next step is going to be to read up on the basics of how Redux works with React, then fire a up create-react-app, github repo, and install redux. Wait, but first I want to get familiar with the GitHub and Twitter APIs because what if they don't allow me to do what I want the app to do? Yes, API orientations are next. Redux can wait.

One of the intended functions of this application is to update a file in a user's git repo. Let's see how that works that by attempting to do so on one of my own files.

**Link(s) to work:** [Log.md](http://tinyurl.com/ychjul5v)

**Tweet:** #100daysofcode. Day 2 of #100DaysOfCode : Diagramed out the components, data flow, and client-server relationships of a new app. Studied the API documentation of a couple of services that will be required, made sure they can do what will be needed. 