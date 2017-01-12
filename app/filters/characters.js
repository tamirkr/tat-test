app.filter('character', function() {
    return function(input) {
        return (!!input) ? input.replace(/[^a-zA-Z ]/g, "") : '';
    }
});