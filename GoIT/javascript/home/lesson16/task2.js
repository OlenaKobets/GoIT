var table = document.getElementById('age-table');
var lables = table.getElementsByTagName('label');
var firsAgeCell = table.rows[0].cells[0];
var secondForm = document.getElementsByTagName('form')[1];
var searchForm = document.querySelector('form[name="search"]');
var firstSearchFormInput = searchForm.getElementsByTagName('input')[0];
var elInfo0_withoutPosition = document.getElementsByName("info[0]")[0];
var elInfo0_insideForm = document.querySelector('form[name="search-person"] [name="info[0]"]');

