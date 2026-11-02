@echo off
setlocal EnableExtensions
set "PROJECT=C:\1_PLACEMENT\FINAL PROJECTS\Bhaagvatam\bhaagavatam-frontend"
if not exist "%PROJECT%\src\styles.css" (
  echo ERROR: Cannot find "%PROJECT%\src\styles.css"
  echo Edit PROJECT in this CMD file if your frontend is elsewhere.
  pause
  exit /b 1
)
set "CSS=%PROJECT%\src\styles.css"
findstr /C:"BHAAGAVATAM_SAFE_CROP_FIX_V2" "%CSS%" >nul 2>&1
if not errorlevel 1 (
  echo Image cropping fix is already installed. No duplicate rules added.
  goto :done
)
copy /Y "%CSS%" "%CSS%.before-crop-v2.bak" >nul
>>"%CSS%" echo.
>>"%CSS%" echo /* BHAAGAVATAM_SAFE_CROP_FIX_V2 - preserves complete artwork */
>>"%CSS%" echo .video-thumb{aspect-ratio:16/9!important;display:flex!important;align-items:center!important;justify-content:center!important;background:#101316!important}
>>"%CSS%" echo .video-thumb img{width:100%%!important;height:100%%!important;object-fit:contain!important;object-position:center!important;transform:none!important;filter:none!important}
>>"%CSS%" echo .video-tile:hover .video-thumb img{transform:none!important;filter:brightness(1.07)!important}
>>"%CSS%" echo .card-image{background:#101316!important;overflow:hidden!important}
>>"%CSS%" echo .card-image img{width:100%%!important;height:100%%!important;object-fit:contain!important;object-position:center!important;transform:none!important}
>>"%CSS%" echo .story-card:hover .card-image img{transform:none!important}
>>"%CSS%" echo .universe-panel ^> img{width:100%%!important;height:auto!important;max-height:none!important;aspect-ratio:auto!important;object-fit:contain!important;object-position:center!important;background:#101316!important}
>>"%CSS%" echo .node img{object-fit:contain!important;object-position:center!important;transform:none!important;background:#11161a!important}
>>"%CSS%" echo .watch-feature-art img{object-fit:contain!important;object-position:center!important;background:#101316!important}
>>"%CSS%" echo .hero-art ^> img{object-fit:contain!important;object-position:center!important;animation:none!important;filter:none!important}
>>"%CSS%" echo .detail-img img,.featured-art img{object-fit:contain!important;object-position:center!important}
>>"%CSS%" echo @media(max-width:600px){.video-thumb{aspect-ratio:16/9!important}.universe-panel ^> img{max-height:none!important}}
echo Image visibility rules added. Backup: styles.css.before-crop-v2.bak
:done
cd /d "%PROJECT%"
call npm run build
if errorlevel 1 (
  echo ERROR: Build failed. Restore styles.css.before-crop-v2.bak if necessary.
  pause
  exit /b 1
)
echo Build passed. Starting Vite...
call npm run dev
