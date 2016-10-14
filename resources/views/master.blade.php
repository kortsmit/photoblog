<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Vue 2.0 Testing</title>

    <link rel="stylesheet" href="{{ elixir('css/app.css') }}">
</head>
<body>

    <div id="app">
        <h1>Home</h1>
        <p>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/admin">Admin</router-link>
        </p>
        <router-view></router-view>
    </div>

    <script src="{{ elixir('js/app.js') }}"></script>
</body>
</html>