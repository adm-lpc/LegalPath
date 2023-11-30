document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  // Handle form submission here (e.g., validation, sending data to server)
  // You can access form inputs by their IDs: document.getElementById("inputID").value
});
<script>
function countAlphabetChars(textareaId, counterId) {
  var text = document.getElementById(textareaId).value;
  var alphabetCount = text.replace(/[^a-zA-Z]/g, "").length;
  document.getElementById(counterId).innerText = "Alphabet characters count: " + alphabetCount;
}
</script>
