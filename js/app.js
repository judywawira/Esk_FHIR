function goToWelcome() {
    //window.location.href = "https://open-ic.epic.com/argonaut/oauth2/authorize?response_type=code&client_id=e1920551-0f59-464d-a707-7daa5a112be5&redirect_uri=http://localhost/hackthon-app"
    var userId = $('#userName').val();
    window.location.href = 'patient.html?userId='+userId;
    return true;
};

$( document ).ready(function() {
    var userId = getParameterByName('userId', window.location.href);
    $('#welcomeUser').text('Welcome ' + userId);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addComment() {
    //window.location.href = "https://open-ic.epic.com/argonaut/oauth2/authorize?response_type=code&client_id=e1920551-0f59-464d-a707-7daa5a112be5&redirect_uri=http://localhost/hackthon-app"
    var comment = $('#new-review').val();
    $('#comments').append('<p>' + comment + '</p><br>');
    var comment = $('#new-review').val("");
    return true;
};
