let DiscordCopy = document.getElementById("discord-copy");

DiscordCopy.addEventListener("click", () => {
	navigator.clipboard.writeText("zilibobi#8836");
	DiscordCopy.innerHTML = DiscordCopy.innerHTML + " (copied)"
});