async function getDownload() {
  const url = document.getElementById("ytUrl").value;
  if (!url) {
    alert("Enter a YouTube URL");
    return;
  }

  try {
    // Change this to your deployed backend API
    const res = await fetch(`http://localhost:5000/download?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    if (data.download) {
      document.getElementById("result").innerHTML =
        `<a href="${data.download}" target="_blank" download>⬇️ Download MP3</a>`;
    } else {
      document.getElementById("result").innerText = "❌ Failed to get link";
    }
  } catch (e) {
    document.getElementById("result").innerText = "⚠️ Error connecting to API";
  }
}
