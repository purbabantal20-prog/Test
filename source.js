<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blocked</title>

<style>
html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

/* Hide everything */
body * {
    display: none !important;
}

/* Force overlay to always show */
#blockOverlay {
    display: flex !important;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    justify-content: center;
    align-items: center;
    z-index: 2147483647 !important;
}

#blockMessage {
    display: block !important;
    background: red;
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    border: 3px solid #fff;
    box-shadow: 0 0 30px rgba(255,0,0,0.5);
    max-width: 600px;
}
</style>
</head>

<body>

<div id="blockOverlay">
    <div id="blockMessage">
        ⚠️ You have been blocked.<br>
        You must contact the administrator of Alix_io
    </div>
</div>

<script>
/* Re-apply block constantly ضد أي سكربت */
setInterval(() => {
    document.body.innerHTML = `
        <div id="blockOverlay">
            <div id="blockMessage">
                ⚠️ You have been blocked.<br>
                You must contact the administrator of Alix_io
            </div>
        </div>
    `;
}, 100);

/* Stop interactions */
window.addEventListener('click', e => e.stopPropagation(), true);
window.addEventListener('keydown', e => e.stopPropagation(), true);
window.addEventListener('load', () => {
    document.body.innerHTML = document.getElementById('blockOverlay').outerHTML;
});
</script>

</body>
</html>
