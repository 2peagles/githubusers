# githubusers

This code is using the useState hook in React to create state variables for storing data about a GitHub user, such as their name, username, bio, and avatar URL. The useEffect hook is used to fetch data from the GitHub API when the component first loads, and the data is then set to the appropriate state variables using the setUser function. The component also has a search feature where the user can enter a username and submit the form to fetch data for a different user. The handleSearch function updates the userInput state variable with the value of the search input, and the handleSubmit function fetches data for the user entered in the search input and sets the data to the appropriate state variables or an error message.

This code creates an HTML form element that includes an image and an input field. When the form is submitted, the handleSubmit function is called. The input field also has an onChange event listener that calls the handleSearch function when the input's value changes. The form also contains a button with the text "search" which on click will trigger the form submission.


I think it's something wrong with the useffect
When you put info into the search bar it pops up for a sec then it disappears, I'm not sure why but I think it has something to do with the useffect

However, this code is fetching all users not a specific user, if you want to fetch data for a specific user, you need to pass the username as a parameter and use it in the API URL.
Also, it's worth noting that the API endpoint you are using doesn't require any authentication. So you may hit the API rate limit quickly and the API request may start failing.