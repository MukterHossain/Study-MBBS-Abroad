

// Form Validation
document.getElementById('applyForm').addEventListener('submit', function(event){
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let country = document.getElementById('country').value;
    if(!name || !email || !phone || !country){
        alert("plese fill in all fields")
    }
    alert("Application submitted successfully!")
})