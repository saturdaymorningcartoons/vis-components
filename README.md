# Reusable Visualization Components

Work in progress implementation of reusable graphing components. I'd like to think that I'm working towards a well-thoughtout design pattern, but currently things are just provisionally thought through. I've been spurred in this direction mostly by problems and demands I've been facing at work. As of April 2018 I've been working three years, first on the issue of making code that renders graphs more agnostic to the sources of data it can consume, and then later thinking about making this code reusable and extendable.

To run the examples:

- clone this repository `git clone https://github.com/saturdaymorningcartoons/vis-components.git`
- cd into the `examples` directory
- run a local server, e.g. `python -m http.server 8888`
- visit that port on your browser `localhost:8888`
