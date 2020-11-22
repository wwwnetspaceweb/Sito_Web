


var webtorrentHealth = require('webtorrent-health')
var Greenland = 'magnet:?xt=urn:btih:61D2FE2B6D888BE09DA3306AD751F1F0AC37BC8D&dn=Greenland.2020.1080p.AMZN.WEBRip.DDP5.1.x264-NTG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2860%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2990%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Borat2 = 'magnet:?xt=urn:btih:6C3F7E1BF7EE1A6457A1B14B0CDBD222F746BB11&dn=Borat+Subsequent+Moviefilm+%282020%29+%282160p+AMZN+WEBRip+x265+HEVC+10bit+AAC+5.1+Joy%29+%5BUTR%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
webtorrentHealth(Greenland, function (err, data) {
  if (err) return console.error(err)
  console.log('\x1b[32m%s\x1b[0m',"GreenLand:----------------")
  console.log('average number of seeders: ' + data.seeds)
  console.log('average number of leechers: ' + data.peers)
  console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
})
webtorrentHealth(Borat2, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Borat2:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
  })