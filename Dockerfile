<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EliasarYT | API Navideña</title>
    <link rel="icon" href="https://github.com/Eliasar54.png" type="image/png">
    <link href="https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --bg-color: #001f3f;
            --text-color: #f9f9f9;
            --button-color: #004d00;
            --button-hover: #007700;
            --border-color: #ffe066;
            --highlight-color: #ff4136;
            --snow-color: #ffffff;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: 'Mountains of Christmas', cursive;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            height: 100vh;
            overflow: hidden;
            user-select: none;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: url('https://cdn.pixabay.com/photo/2016/11/19/15/36/snow-1845424_960_720.png') repeat;
            opacity: 0.2;
            z-index: 0;
        }

        #api-wrapper {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            max-width: 1000px;
            margin: auto;
            width: 100%;
            padding: 20px;
            background: linear-gradient(145deg, #003f5c, #002a40);
            border-radius: 10px;
            box-shadow: 0 0 20px #000;
            overflow-y: auto;
            position: relative;
            z-index: 1;
        }

        h2 {
            font-size: 32px;
            color: var(--highlight-color);
            margin: 20px 0 10px;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 5px;
            text-align: center;
        }

        h2::before {
            content: '🎄';
            margin-right: 10px;
        }

        h2::after {
            content: '🎁';
            margin-left: 10px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .api-description {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-grow: 1;
        }

        .circle {
            flex-shrink: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 10px;
            background-color: var(--highlight-color);
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
                transform: scale(1);
            }
            50% {
                opacity: 0.6;
                transform: scale(1.2);
            }
        }

        .build-button {
            padding: 10px 20px;
            background-color: var(--button-color);
            color: var(--text-color);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.2s;
            flex-shrink: 0;
        }

        .build-button:hover {
            background-color: var(--button-hover);
            transform: scale(1.1);
        }

        footer {
            text-align: center;
            padding: 10px;
            background-color: var(--bg-color);
            color: var(--text-color);
            font-size: 16px;
            font-weight: bold;
            user-select: none;
        }

        .snowflake {
            position: fixed;
            top: -10px;
            font-size: 1rem;
            color: var(--snow-color);
            animation: fall linear infinite;
            z-index: 2;
        }

        @keyframes fall {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) translateX(-50px);
                opacity: 0;
            }
        }
    </style>
</head>
<body oncontextmenu="return false">
    <div id="api-wrapper">
        <h2>🎅 Descargadores 🎅</h2>
        <table>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>Descarga de TikTok</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/search/tiktok?query=https://vm.tiktok.com/ZMh3KL31o/')">Get</button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>YouTube Downloader (MP4)</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/download/youtube?text=ahura+funk{}&format=mp4')">Get</button>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>YouTube Downloader (MP3)</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/download/youtube?text=light+it+up+funk&format=mp3')">Get</button>
                </td>
            </tr>
        </table>
        <h2>🎄 Buscadores 🎄</h2>
        <table>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>Búsqueda en Google</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/google?query=Eliasar54')">Get</button>
                </td>
            </tr>
        </table>
        <h2>❄ Anime ❄</h2>
        <table>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>Imagen de Anime</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/anime/')">Get</button>
                </td>
            </tr>
        </table>
        <h2>🤖 IA 🤖</h2>
        <table>
            <tr>
                <td>
                    <div class="api-description">
                        <div class="circle"></div>
                        <span>ChatGPT</span>
                    </div>
                    <button class="build-button" onclick="redirect('/api/chatgpt?text=hola&prompt=actuaras+como+una+api')">Get</button>
                </td>
            </tr>
        </table>
    </div>
    <footer>
        🎅 © 2024 EliasarYT | API Navideña 🎅
    </footer>
    <script>
        function redirect(url) {
            window.location.href = url;
        }
        const snowflakeCount = 50;
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = '❄';
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
            snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
            document.body.appendChild(snowflake);
        }
    </script>
</body>
</html>