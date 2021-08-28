let DiscordCopy = document.getElementById("discord-copy");
let innerHTML = DiscordCopy.innerHTML + " (copied)"

DiscordCopy.addEventListener("click", () => {
	navigator.clipboard.writeText("zilibobi#8836");
	DiscordCopy.innerHTML = innerHTML
});