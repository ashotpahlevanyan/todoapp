# Celonis Code Sample

In this folder, you find the Celonis Code Sample, a JavaScript exercise.

The goal of the exercise is to implement a simple TODO Application which
uses some kind of architecture for showing, adding and removing TODOs.

Please work through the following tasks. If you have any favourite tools,
libraries or other best practices you are of course free to use them.

## Functionality

The following functionality should be implemented:

1) Add new TODOs
new TODOs are added to the list by typing into the top input box and hitting
the return key.

2) Mark all TODOs (un)finished
When you click the two arrows pointing down next to the top input box,
all TODOs should be marked done. If all TODOs are already done, all
should be undone again.

3) Mark single TODO (un)finshed
When clicking the checkmark in front of the TODO, its done state should be
toggled.

4) Delete a single TODO
When clicking the (X) a single TODO should be deleted.

5) Showing number of unfinished TODOs:
on the bottom, the number of TODOs being unfinished should be updated automatically.

6) Filter for all/active/complete TODOs
The list of TODOs should be filtered according to their done state.

7) Clear all completed
All completed TODOs should be removed

8) Edit a TODO
Double-clicking a TODO will show an input box where you can edit the TODO.
Hitting enter again will store the TODO.

8) Load TODOs from sample.json
The sample.json file contains an array of TODOs. These should be loaded for an initial state
using AJAX.

## Tasks

The exercise consists of the following tasks:

1) Choose your architecture
Please describe the architecture/framework/pattern/library you will use in order
to implement the app. Please try to not think about it as a very small and
simple TODO app but choose an architecture which is easily extendable etc.

Descibe which additional components you would add to make it production ready.

2) Implement the functionality using your architecture/toolchain of choice.

The code is based on the official todoMVC Template, please don't use a solution from there directly ;)
If you use certain design or architectural patterns please explain why you used them. Please document
your progress in the form of comments in the code.

3) Create a ZIP file from your solution and mail it back to us.

If you want, you can always add some fancyness to it (css animations, ...) but that is not part of the exercise.

Good Luck and Have Fun!


The TODOMVC Part is licensend under the MIT License and Copyright by Addy Osmani, Sindre Sorhus, Pascal Hartig, Stephen Sawchuk.