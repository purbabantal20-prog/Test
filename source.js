(function () {
    function blockPage() {
        document.documentElement.innerHTML = `
            <head>
                <title>Blocked</title>
                <style>
                    html, body {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        background: #000;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Arial, sans-serif;
                    }
                    .msg {
                        background: red;
                        color: white;
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
                <div class="msg">
                    ⚠️ You have been blocked.<br>
                    You must contact the administrator of Alix_io
                </div>
            </body>
        `;
    }

    // تشغيل مباشر
    blockPage();

    // إعادة فرض الحظر باستمرار (ضد أي سكربت)
    setInterval(blockPage, 200);

    // منع أي تفاعل
    window.addEventListener('click', e => e.stopPropagation(), true);
    window.addEventListener('keydown', e => e.stopPropagation(), true);
})();
