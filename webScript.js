document.getElementById('searchButton').addEventListener('click', 
function() {
    var searchTerm = document.getElementById('searchInput').value;
    searchTerm = encodeURIComponent(searchTerm); // Codifica a consulta para que seja seguro para URL
    if(searchTerm === ""){
        alert('Digite alguma coisa')
    }else{
        
        var googleSearchURL = 'https://www.google.com/search?q=' + searchTerm;
        window.location.href = googleSearchURL;
    }
}
);