let existingUser = Cookies.get('existing_user')

if (!existingUser) {
    window.location.replace("login.html")
}