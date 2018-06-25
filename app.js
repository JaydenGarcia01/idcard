function generateID() {
    let userFirstName = document.getElementById("first-Name").value;
    let userLastName = document.getElementById("LastName").value;
    let userFullName = userFirstName + " " + userLastName;
    document.getElementById("idCard").innerHTML = userFullName;

}
