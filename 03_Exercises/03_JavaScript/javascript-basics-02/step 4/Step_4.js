function inputClear(){
    document.getElementById('name').value="";
    document.getElementById('surname').value="";
    document.getElementById('city').value="";

}
function confirmInputClear(){
    if (confirm('yes/no ?')){
        inputClear();
        alert('Cleared!');
    } else {
        alert('No change!');
    }
}