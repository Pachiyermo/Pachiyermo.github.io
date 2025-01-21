# Datos de los paises
$data = @{
   countries = @(
        
    "albania", "andorra", "armenia", "austria", "belgica", "bulgaria", "bosnia", "bielorrusia",  
    "suiza", "chequia", "alemania", "dinamarca", "estonia", "finlandia", "reino_unido", "georgia",  
    "grecia", "croacia", "hungria", "irlanda", "islandia", "italia", "liechtenstein",  
    "lituania", "luxemburgo", "letonia", "moldavia", "macedonia", "montenegro", "noruega",  
    "polonia", "portugal", "rumania", "serbia", "eslovaquia", "eslovenia", "suecia", "turquia",  
    "ucrania", "kosovo", "paises_bajos", "españa", "francia", "portugal", "chipre"

    )
}

# Ruta base donde se crean las carpetas y archivos
$basePath = "C:\Users\aleba\Documents\GitHub\Pachiyermo.github.io\agencia-viajes\paises"

# Crear carpeta base si no existe
if (-not (Test-Path -Path $basePath)) {
    New-Item -ItemType Directory -Path $basePath
}

# Crear carpetas y archivos HTML
foreach ($country in $data.countries) {
    $folderPath = Join-Path $basePath $country
    $filePath = Join-Path $folderPath "$country.html"

    # Crear carpeta del pais
    if (-not (Test-Path -Path $folderPath)) {
        New-Item -ItemType Directory -Path $folderPath
    }

    # Crear archivo HTML
    $htmlContent = @"
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>$country</title>
</head>
<body>
    <h1>Welcome to $country</h1>
</body>
</html>
"@
    Set-Content -Path $filePath -Value $htmlContent
}

Write-Host "Carpetas y archivos creados en $basePath"
