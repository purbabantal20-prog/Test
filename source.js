<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>تم الحظر</title>

<style>
/* اخفاء أي محتوى */
body > *:not(.block-overlay) {
    display: none !important;
}

/* طبقة الحظر */
.block-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
}

/* الرسالة */
.blocked-message {
    background-color: #ff0000;
    color: white;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 0 30px rgba(255,0,0,0.5);
    border: 3px solid #fff;
    max-width: 600px;
}

@media (max-width: 600px) {
    .blocked-message {
        font-size: 20px;
        padding: 20px;
        margin: 20px;
    }
}
</style>
</head>

<body>

<div class="block-overlay">
    <div class="blocked-message">
        ⚠️ تم حظرك<br>
        يرجى التواصل مع إدارة Alix_io
    </div>
</div>

</body>
</html>
