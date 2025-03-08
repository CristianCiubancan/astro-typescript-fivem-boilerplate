fx_version 'cerulean'
game 'gta5'

-- UI from the Astro build output
ui_page 'dist/web/index.html'

-- Include Astro-built files
files {
  'dist/web/index.html',
  'dist/web/**/*.js',
  'dist/web/**/*.css'
}

-- Use the compiled client and server scripts
client_scripts {
  'dist/client/*.js'
}

server_scripts {
  'dist/server/*.js'
}
