const mainElement = document.querySelector("main")

!(async function getDefaults(){
    const res = await fetch("http://127.0.0.1:8000/testing/default")
    const jsonParsed = await res.json()
    mainElement.innerHTML = `
        <p>Default filters: ${jsonParsed.d_filters}</p>
        <br>
        <p>Default path: ${jsonParsed.d_path}</p>
    ` 
})
