<!-- Route Guarding -->

Stops users that are not logged in (authenticated) from accessing certain pages of the website as well as stop already signed-in users from
signing up or logging in again

<!-- Mounting/Unmounting -->

Unmounting the state is useful for ending an update/request whenever a new process takes over such as changing the page

<!-- Why So Many Hooks? -->

Creating so many separate hooks allows us to split up the logic so that if any issues arise it will be easy to troubleshoot and update

<!-- OrderBy -->

After writing the code, make sure to refresh your app and check the console. Firebase will tell you to create an index. Click on the link for your Firestore console
and allow it to enable Indexing. After waiting a few minutes for it to enable, the content will be ordered by your preferences.
