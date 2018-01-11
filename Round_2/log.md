# 100 Days Of Code - Log

### Day 1: January 1, 2018

**Today's Progress**: Re-solved a problem from Pramp interview: findLargestSmallerKey. Object is to find the largest value in a binary tree that is smaller than a given number. I didn't really get it during the interview, was helpful to try to solve it on my own again.

**Thoughts:** This has been a useful introduction to Binary Search Trees and their traversal. This problem highlighted my need to brush up on recursion and has excited me to plow ahead into more data structures (breadth-first search?) and cozy up better with BSTs (depth-first?). Also excited to be back in the 100 Days of Code saddle.

**Link(s) to work:** [findLargestSmallerKey](http://tinyurl.com/yb7mcpxq)

**Tweet:** Starting Round 2 #100daysofcode. Day 1: Solved binary search tree problem from Pramp interview. Didn't get it during the interview, helpful to try again on my own.  http://tinyurl.com/yb7mcpxq  . Stoked to be getting back in the saddle! #dailypractice

### Day 2: January 2, 2018

**Today's Progress**: Diagramed out the components, data flow, and client-server relationships of a new app. Studied the API documentation of a couple of services that will be required, made sure they can do what is required. 

**Thoughts:**: re-writing the Log-App. Where to start? Read an [article](https://www.codementor.io/codementorteam/how-to-build-app-from-scratch-beginner-programmer-7z0atq56w) on how to plan out an application build. Helped me think through and answer some useful questions like: exactly what functions will the user be able to perform? What technologies will be involved? What does the stack look like? What does the data flow look like? What does the UI look like? What does the database look like? I didn't know the answers to a lot of these questions but I did do some doodling and drawing of boxes that represented some components and arrows pointing to others and some names of bits of data and where they would come from and where they would go to. Even thinking through the chain of events that needs to follow the click of "Forgot Password?" was enlightening...there's a bunch of steps in that one process!

In diagramming this stuff out, I didn't worry much about getting all the names and steps and order just right. There are a bunch of embarrassing errors in there, no doubt. This isn't about building a blueprint to hand off to a builder so they can execute a perfectly spec'd plan. No, this is about sketching out a very rough shape for my own brain to hold as a mental model. It's about breaking down the project into a few broad strokes instead of the one amorphous blog full of question marks and magic that was previously drifting around in my head.

I only vaguely remembered some things about how React works in terms of state and props so I didn't worry about what would be passed as state vs props nor antything about the component lifecycle. Those gaps in my knowledge and comfort will be flushed out when I start writing the code. Also, since I'm planning to use Redux this time, I'm going to have to do some learning about that as well as deciding which type of database to use.

That part about unit testing was intriguing as unit testing is not something I much experience with. Really, I just don't have a concept of how to implement it. I am adding that to my list of things I hope to learn through this build.

I think the next step is going to be to read up on the basics of how Redux works with React, then fire a up create-react-app, github repo, and install redux. Wait, but first I want to get familiar with the GitHub and Twitter APIs because what if they don't allow me to do what I want the app to do? Yes, API orientations are next. Redux can wait.

One of the intended functions of this application is to update a file in a user's git repo. Let's see how that works that by attempting to do so on one of my own files.

**Link(s) to work:** [Log.md](http://tinyurl.com/ychjul5v)

**Tweet:** #100daysofcode. Day 2 of #100DaysOfCode : Diagramed out the components, data flow, and client-server relationships of a new app. Studied the API documentation of a couple of services that will be required, made sure they can do what will be needed. 

### Day 3: January 3, 2018

**Today's Progress**: Solving leetcode problem twoSum using a hash table approach. Did not quite get it working but oh so close. What with their superior O(1) time complexity and all (as compared to an array's or linked list's O(n)), it's nice to make hash table's acquaintance. 

**Thoughts:** Hash tables are new to me and are clearly superior in terms of time complexity O(1) when compared to an unsorted array or linked list O(n). This problem also introduced me to the Map object in JS and its associated prototype methods like .get. I haven't evaluated the space complexity of my solution just yet, that will come tomorrow. Other than submitting the solution to leetcode, I'll have to discover how best to do that.

**Link(s) to work:** [twoSum](https://github.com/standardhuman/Interview-Practice/blob/master/leetcode/01_twosums.js)

**Tweet:** #100DaysOfCode Round 2. Day 3: Solving leetcode problem twoSum using a hash table approach. What with their superior O(1) time complexity and all (as compared to an array or linked list O(n)), it's nice to make hash table's acquaintance. http://tinyurl.com/y7jtcwnd 

### Day 4: January 4, 2018

**Today's Progress**: Got the Basic Regex Parser problem again as a Pramp interview problem, so a good forced revisiting of recursion and that damn '*' behavior. Also setup a repo, installed create-react-app, and started reading up on Redux for log-app-2018.

**Thoughts:** Should probably do a couple of quick recursion problems to knock the rust off. Who am I kidding, I never was comfy with recursion, but also never really spent time with it, so that makes sense. Feeling much more comfortable with the Pramp interview this time around. Funny that I got the same problem to present as last week. On the Log-App front, bootstrapping with create-react-app is so nice as it give that "we're getting started" feeling fast and easy. Excited to really roll Redux into the build from the beginning and wrap my brain around it.

**Link(s) to work:** (Log-App-2018 (nothing to see here))[http://tinyurl.com/ybpaeons],  (Basic Regex Parser)[http://tinyurl.com/y9wykkqr]

**Tweet:** #100DaysofCode Round 2, Day 4: Got the Basic Regex Parser problem again as a Pramp interview problem, so a good forced revisiting of recursion and that damn '*' behavior. Also setup a repo, installed create-react-app, and started reading up on Redux for log-app-2018. tinyurl.com/ybpaeons tinyurl.com/y9wykkqr

### Day 5: January 5, 2018

**Today's Progress**: R2,D5: Pramp interview, got equivalent of twoSum. Forgot about recursion, instead used brute force. I gave the Basic Regex Parser, inspired to see my interviewee work through it beautifully. Also did more Redux ed. www.pramp.com, http://tinyurl.com/ychjul5v

**Thoughts:** I need to revisit twoSum, solve it with recursion and revisit that regex parser.

**Link(s) to work:** (Pramp)[www.pramp.com], (Log.md)[http://tinyurl.com/ychjul5v]

**Tweet:** #100DaysofCode R2,D5: Pramp interview, got equivalent of twoSum. Forgot about recursion, instead used brute force. I gave the Basic Regex Parser, inspired to see my interviewee work through it beautifully. Also did more Redux ed. www.pramp.com, http://tinyurl.com/ychjul5v

### Day 6: January 6, 2018

**Today's Progress**: R2,D6: Read more Redux and React design considerations then wrote up a pseudocode outline of all the components and helper function data flows for log-app-2018.

**Thoughts:** Doing some calm reading and some thoughtful planning in the form of an outline is incredibly useful for visualizing the scope and flow of the project. I hope that this outline will serve as a useful reference during the build, like a blueprint.

**Link(s) to work:** (Log App Component Structure)[https://github.com/standardhuman/Log-App-2018/blob/master/component%20structure.js]

**Tweet:** #100DaysofCode R2,D6: Read more Redux and React design considerations then wrote up a pseudocode outline of all the components and helper function data flows for log-app-2018. http://tinyurl.com/ybtbcazc

### Day 7: January 7, 2018

**Today's Progress:** R2,D7: Reading through React and Twitter API docs to re-famliarize myself. Updating the app structure outline as I go. Beginnings of Sendtweet component in the works.

**Thoughts:** Left coding to the last minute today and started to get sick a the same time. Good reason to not leave it to the last minute. Prioritizing making sure the app will be able to send a tweet for an authenticated user. Thinking that probably won't be an issue, but bigger uncertainty is committing and pushing to GH. Always need to be ready to axe that feature if it's not supported by the GH API, but I remain hopeful.

**Link(s) to work:** (Log-App-2018)[https://github.com/standardhuman/Log-App-2018]

**Tweet:** #100DaysofCode R2,D7: Reading through React and Twitter API docs to re-famliarize myself. Updating the app structure outline as I go. Beginnings of Sendtweet component in the works. http://tinyurl.com/ybpaeons

### Day 8: January 8, 2018

**Today's Progress:** R2,D8: Figured out some of the ins and outs of the GitHub API. It's going to work for my purposes. 

**Thoughts:** Having a cold sucks.

**Link(s) to work:** (Log-App-2018)[https://github.com/standardhuman/Log-App-2018]

**Tweet:** #100DaysofCode R2,D8: Figured out some of the ins and outs of the GitHub API. It's going to work for my purposes. http://tinyurl.com/ybpaeons

### Day 9: January 9, 2018

**Today's Progress:** R2, D9: Built a server in Ruby to test the GitHub API.

**Thoughts:** Having a cold still sucks.

**Link(s) to work:** (Log-App-2018)[https://github.com/standardhuman/Log-App-2018/tree/master/src/gh-test-server]

**Tweet:** #100DaysofCode R2,D8: R2, D9: Built a server in Ruby to test the GitHub API. http://tinyurl.com/yd5wwc27

### Day 10: January 10, 2018

**Today's Progress:** R2, D10: Solved FCC allSum algo.

**Thoughts:** Struggled today. Def did NOT want to squeeze in an hour after getting little done on the Log App today. But I did it, and I'll remember that. 

**Link(s) to work:** (FCC: sumAllInRange)[https://github.com/standardhuman/Interview-Practice/blob/master/freecodecamp/sumAllInRange.js]

**Tweet:** #100DaysofCode R2, D10: Solved FCC allSum algo. http://tinyurl.com/ya5n243o



