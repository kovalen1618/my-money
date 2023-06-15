<!-- Route Guarding -->

Stops users that are not logged in (authenticated) from accessing certain pages of the website as well as stop already signed-in users from
signing up or logging in again

<!-- Mounting/Unmounting -->

Unmounting the state is useful for ending an update/request whenever a new process takes over such as changing the page

<!-- Why So Many Hooks? -->

Creating so many separate hooks allows us to split up the logic so that if any issues arise it will be easy to troubleshoot and update
