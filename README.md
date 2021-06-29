# Add routing to React apps using React Router v4

## Course Notes
Learner reviews are very positive, but one reports the course being dated (react-router-dom latest version is 5.2.0 and next version is 6.0.0-beta.0, but the course is for v4)

## Run the React Router v4 Examples with Create React App
<!-- 
<TimeStamp start="0:00" end="0:30">
No longer need to globally install create-react-app. Just use `npx create-react-app rr4`.
<TimeStamp />
 -->
<!--
<TimeStamp start="1:30" end="2:15">
As of 6/28/2021, the "next" version of react-router-dom is 6.0.0-beta.0. This version of react-router-dom requires the user to also install `history` as a peer dependency (see https://github.com/ReactTraining/react-router/releases/tag/v6.0.0-beta.0). Viewer should now run `npm install history react-router-dom@next --save-dev`.
<TimeStamp />
 -->

Code compiles with minimal changes to what is done in the lesson.

## Create Basic Routes with the React Router v4 BrowserRouter
<!-- 
<TimeStamp start="0:00" end="1:12">
On the current version of react-router-dom, "Home" was not immediately rendered to the page. I needed to also import `Routes` from 'react-router-dom' and wrap our `Route` component with `Routes. Also, instead of specifying the Home component in the `component` prop of Route, I needed to use the `element` prop to pass in Home as a ReactElement to be rendered. See https://github.com/ReactTraining/react-router/blob/f59ee5488bc343cf3c957b7e0cc395ef5eb572d2/docs/advanced-guides/migrating-5-to-6.md#upgrade-all-switch-elements-to-routes.
 -->

<!-- 
<TimeStamp start="1:45" end="2:30">
With the addition of the Routes component in v6, no longer need the `exact` qualifier on the Route component (see https://reacttraining.com/blog/react-router-v6-pre/#relative-route-path-and-link-to).
 -->

<!-- 
<TimeStamp start="2:30" end="3:10">
`strict` qualifier did not have the demonstrated effect on the path. As of react-router-dom v6, strict and exact props should be removed.
 -->

<!-- 
<TimeStamp start="3:20" end="3:40">
Instead of a `render` prop, Route can now take an `element` prop which renders the provided ReactElement.
 -->

<!-- 
<TimeStamp start="3:50" end="5:40">
Components should be passed into the `element` prop in v6. However, if you pass an element as a child to Route, you still don't need to handle the problem described in the lesson.
 -->

Lots of minor changes need to be made to migrate this react-router-dom v4 code to v6, but the concepts are similar and no changes are drastic.

## Use the React Router v4 Link Component for Navigation Between Routes
<!-- 
<TimeStamp start="0:45" end="0:55">
When using the Routes component to wrap all Route components in v6, make sure the Links component is a sibling of Routes and not a child.
 -->

Concepts introduced in this lesson are still applicable to v6 of react-router-dom.

## Style a Link that is Active with NavLink in React Router v4
<!--
<TimeStamp start="0:00" end="1:00">
`activeClassName` defaults to active, so that prop is redundant.
 -->

<!--
<TimeStamp start="1:15" end="1:55">
Instead of using the `exact` prop on the Home NavLink component in v6, use the `end` prop.
 -->

<!--
<TimeStamp start="2:20" end="3:50">
isActive prop is no longer recognized on the NavLink component.
 -->

Concepts introduced in this lesson are similar to what works in v6 and only require minor tweaks.

## Use URL Parameters with React Router v4
<!--
<TimeStamp start="0:00" end="0:15">
To get the intended functionality in v6, make the changes stated above (replace the div wrapper with a Routes wrapper from react-router-dom, and change the `render` prop to an `element` prop with the `h1` element passed in)
 -->

<!--
<TimeStamp start="0:30" end="1:00">
In v6, should now create a new React component to be rendered, pass it to Route through the `element` prop, and, within that component, use the `useParams()` or `useLocation()` hook to access the URL parameter.
 -->

<!--
<TimeStamp start="1:00" end="1:20">
Optional parameters not supported in v6. Solution: make another route specifically for the Home route.
 -->

<!--
<TimeStamp start="1:20" end="2:05">
Because react-router-dom has removed optional parameters and now uses nested routes with the Routes component (see https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#advantages-of-route-element), creating optional pages and subpages now requires a different process. The migration guide provides a helpful illustration of this.
 -->

At this point in the course, tweaks to the lesson code required to make it work with new versions of react-router-dom are becoming significant and rather drastic.

## Use Regular Expressions with Routes with React Router v4

Regular expression style route paths are not valid in v6 of React Router. See https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#note-on-route-path-patterns.

## Parse Query Parameters in React Router v4

<!--
<TimeStamp start="0:00" end="1:20">
Again, because v6 uses the `element` prop to render a ReactElement through the Route component, we use the `useLocation()` and `useParams()` hooks to grab information about the params and location.
 -->

<!--
<TimeStamp start="1:20" end="2:20">
react-router-dom automatically splits up the `pathname` and the `search` keys in v6.
 -->

Once the viewer understands using the element prop and hooks in react-router-dom v6, it is not too difficult to migrate the v4 lesson content to v6.

## Render Catch-All Routes with React Router v4 using the Switch Component

All Switch elements have been upgraded to Routes elements (see https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#upgrade-all-switch-elements-to-routes). To have followed along this far into the course, though, the viewer should have been using the Routes element anyway. Otherwise, the code would not have worked as demonstrated in the course.

## Conditionally Render a React Router v4 Route with the Switch Component

Again, the Switch component has been deprecated in favor of the Routes component. Otherwise, as previously mentioned, need to replace render prop with an element prop that takes in a ReactElement. Can use the `useParams()` hook inside of the provided React component to access URL parameters.

## Render Multiple Components for the Same Route in React Router v4

Because we are using the Routes component in react-router-dom v6, and because the Routes component only selects a single child Route component to render, we cannot render multiple components on a specific route in the same manner that the instructor does in the lesson. Instead, we must create a parent component that renders the multiple components that we want to render on the specific route, then render that parent component via the `element` prop on a single Route component.

## Render Nested Routes with React Router v4

<!--
<TimeStamp start="1:20" end="1:30">
To render "Menu" on /menu/drink and /menu/food, make the `path` prop of the menu Route "/menu/*" (see https://github.com/ReactTraining/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md#advantages-of-route-element).
 -->

<!--
<TimeStamp start="1:45" end="2:17">
Need to use the `element` prop on the route and pass in a ReactElement instead of using `render`. To access the URL parameters, use the `useParams()` hook in the ReactElement.
 -->

## Redirect to Another Page with React Router v4

<!--
<TimeStamp start="0:00" end="1:45">
The Redirect component has been removed in react-router-dom v6. Instead, we can use the Navigate component with a `to` prop to conditionally redirect the user to a different path. Adding `<Route path="/old" element={<Navigate to="/new"/>}/>` will match the functionality of the Redirect component shown in the video.
 -->

<!--
<TimeStamp start="1:55" end="2:43">
In v6, use the `element` prop and the `useParams()` hook instead of the `render` prop and the `match` parameter. 
 -->

## Intercept Route Changes with React Router v4 Prompt Component

Besides the previously mentioned changes in react-router-dom v6, implementation of the Prompt component works as demonstrated in the lesson.

## Understand the Difference Between the React Router v4 Router Types

<!--
<TimeStamp start="0:00" end="1:50">
The forceRefresh prop does not work as demonstrated in v6. BrowserRouter always behaves as though forceRefresh is false.
 -->

<!--
<TimeStamp start="2:30" end="3:14">
hashType prop is removed in v6. See https://github.com/ReactTraining/react-router/issues/7703.
 -->

<!--
<TimeStamp start="4:50" end="6:15">
Import StaticRouter from 'react-router-dom/server' as of v6
Also getting error "You cannot use navigator.push() on the server because it is a stateless environment." 
 -->

It seems that, with v6, extra research and content beyond this course would be necessary to implement many of the different routers effectively and comfortably.

## Rubric Score
[Course Quality Rubric](https://roamresearch.com/#/app/egghead/page/BRYKMsAyG)

- **Are there opportunities for self-assessment? (1-4):** 2
There are no official opportunities for self-assessment (quizzes, etc.). However, each lesson, especially the first few, build off of the content presented in previous lessons, so being able to comfortably move from one lesson to the next feels like an intrinsic form of self-assessment. 

- **Is the course content high quality? (1-4):** 4
The course content is presented clearly and concisely. The concepts were well illustrated by the instructor. I did not struggle to translate those concepts and implement the demonstrations from react-router-dom v4 code to v6 code.

- **Is the course content current and up to date? (1-4):** 2
Much of the course content requires tweaking and research in order to work in react-router-dom v6. However, the concepts are mostly the same and are not too difficult to translate, so I still felt that the content was helpful.

- **Does the content meet the stated learning goals? (1-4):** 4
I came into this course without any understanding of React Router v4, and now I feel very comfortable the fundamentals of the library.

- **Does the content incorporate proof (to the learner and others) that the stated learning goals were achieved? (1-4):** 3
The instructor presents all concepts that are stated as learning goals. However, all concepts are demonstrated in a very small-scale application, and I think that incorporating a larger-scale project into the lessons would have been useful as proof that the concepts can be scaled beyond the controlled setting of the course.

- **Is the course material evergreen? (1-4):** 3
This course clearly presents the core concepts of react-router-dom that are mostly still relevant in the latest version of the library. However, the study of resources beyond this course is a necessary step in implementing those concepts with the latest version of the library (v6).

- **How much depth of knowledge does the course provide? (1-4):** 4
Great introduction to the core concepts of react-router-dom v4. Provides work-arounds for issues that one might encounter and plenty of small examples.

- **Is the course actionable? (1-4):** 3
As previously mentioned, I wish this course demonstrated the use of this library in a larger-scale application so that the viewer could see how many moving parts work together at once. However, it is definitely still possible for viewers to comfortably implement this library into their own projects after finishing the course.

**Average Score:** 3.125