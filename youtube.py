import os
import yt_dlp

def download_video(link):
    # Crear la carpeta 'descargas' si no existe
    if not os.path.exists('descargas'):
        os.makedirs('descargas')

    # Configuración de las opciones de descarga
    ydl_opts = {
        'format': 'bestvideo + bestaudio/best',
        'outtmpl': 'descargas/%(title)s.%(ext)s',  # Guarda en la carpeta 'descargas'
        'merge_output_format': 'mp4'
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([link])
            print("Descarga Completa")
    except Exception as e:
        print(f"Hubo un problema al descargar el video: {e}")

# Pedir la URL del video al usuario
if __name__ == "__main__":
    link = str(input("Pega la URL del video a descargar: ")).strip()
    download_video(link)