var languages = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python"
];


$(document).ready(function()
{
    $("#bday").datepicker();

    $("#programming").autocomplete({
        source: languages
    
        });


});