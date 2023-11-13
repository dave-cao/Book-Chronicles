let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +14 src/App.jsx
badd +28 src/pages/Gallery.jsx
badd +5 src/pages/Create.jsx
badd +14 src/components/Navbar.jsx
badd +3 src/App.css
badd +15 src/components/Form.jsx
badd +6 src/pages/Home.jsx
badd +52 src/pages/GetBookInfo.jsx
argglobal
%argdel
$argadd .
set stal=2
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/components/Navbar.jsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 30 + 106) / 213)
exe 'vert 2resize ' . ((&columns * 61 + 106) / 213)
exe 'vert 3resize ' . ((&columns * 120 + 106) / 213)
argglobal
enew
file NvimTree_1
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src
wincmd w
argglobal
balt ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/App.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 14 - ((13 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 14
normal! 03|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
wincmd w
argglobal
if bufexists(fnamemodify("~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/GetBookInfo.jsx", ":p")) | buffer ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/GetBookInfo.jsx | else | edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/GetBookInfo.jsx | endif
if &buftype ==# 'terminal'
  silent file ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/GetBookInfo.jsx
endif
balt ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/components/Navbar.jsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 47 - ((19 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 47
normal! 0
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
wincmd w
3wincmd w
exe 'vert 1resize ' . ((&columns * 30 + 106) / 213)
exe 'vert 2resize ' . ((&columns * 61 + 106) / 213)
exe 'vert 3resize ' . ((&columns * 120 + 106) / 213)
tabnext
edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/Home.jsx
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 6 - ((5 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 07|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src
tabnext
edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/App.jsx
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 21 - ((20 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 21
normal! 016|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src
tabnext
edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/components/Navbar.jsx
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 6 - ((5 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 010|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
tabnext
edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/Create.jsx
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 41 - ((40 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 41
normal! 03|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
tabnext
edit ~/Documents/drive/code/projects/professional/codepath/final_project/book_review/src/pages/Gallery.jsx
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 28 - ((27 * winheight(0) + 25) / 50)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 28
normal! 082|
lcd ~/Documents/drive/code/projects/professional/codepath/final_project/book_review
tabnext 1
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
