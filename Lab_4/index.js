const getUser = () => (
    fetch(`https://api.github.com/users/${document.getElementById('user').value}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('image').setAttribute('src', data.avatar_url);
            document.getElementById('name').innerHTML = data.name || "???";
            document.getElementById('login').innerHTML = data.login || "???";
            document.getElementById('bio').innerHTML = data.bio || "???";
            document.getElementById('company').innerHTML = data.company || "???";
            document.getElementById('location').innerHTML = data.location || "???";
            document.getElementById('email').innerHTML = data.email || "???";
            document.getElementById('blog').innerHTML = data.blog || "???";
        })
        .catch(err => console.log(err))
  )
  getUser()