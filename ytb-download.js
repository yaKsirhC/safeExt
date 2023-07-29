async function download_vid() {
  try {
    console.log(JSON.stringify({ url: window.location.href }));
    alert("Downloading please be patient.");
    const res = fetch("http://localhost:8000/testing/hello", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: window.location.href }),
    });
    const content = await (await res).json();
    console.log(content.status);
    alert("Server Responded with: " + content.status);
  } catch (error) {
    alert("FAILED, contact me.");
  }
}
function main(){
  console.log("Project initialised properly");
  const new_b = document.createElement('button')
  new_b.innerText = "Download Video"
  new_b.style.position = "fixed"
  new_b.style.zIndex = "99999999999999999999999999999999999999999"
  new_b.className = "new_btn_ytb"

  new_b.addEventListener('click', e => {
    download_vid(window.location.href)
  })
  document.body.appendChild(new_b)
}

main()