const permission = await Notification.requestPermission();

const button = document.getElementById("button")

button.addEventListener("click", function(){
    const notification = new Notification("Abschiebung erfolgreich durchgeführt", {
        body: "Vielen Dank für die Benutzung diese Formulars!",
        vibrate: true
    })
})