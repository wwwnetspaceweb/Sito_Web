


var webtorrentHealth = require('webtorrent-health')
var Greenland = 'magnet:?xt=urn:btih:d2b35d2b24971c6f3f035e6479637bc744e796b0&dn=Greenland_2020_iTALiAN=udp://glotorrents.pw:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://torrent.gresille.org:80/announce&tr=udp://tracker.openbittorrent.com:80&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://p4p.arenabg.ch:1337&tr=udp://tracker.internetwarriors.net:1337&tr=wss://tracker.openwebtorrent.com'
var Borat2 = 'magnet:?xt=urn:btih:6C3F7E1BF7EE1A6457A1B14B0CDBD222F746BB11&dn=Borat+Subsequent+Moviefilm+%282020%29+%282160p+AMZN+WEBRip+x265+HEVC+10bit+AAC+5.1+Joy%29+%5BUTR%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Harry_Potter= 'magnet:?xt=urn:btih:2CFC2BA0041164F935BC4CAFF46C41C7D023568A&dn=%5BDvdRip-Xvid-Ita-AC3%5DHarry+Potter+E+Il+Prigioniero+Di+Azkaban%5Bsurvivalofmisa%5D&tr=http%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=http%3A%2F%2Fwww.h33t.com%3A3310%2Fannounce&tr=http%3A%2F%2Ftracker.torrentbox.com%3A2710%2Fannounce&tr=http%3A%2F%2Fwww.sumotracker.com%2Fannounce&tr=http%3A%2F%2Fgenesis.1337x.org%3A1337%2Fannounce&tr=http%3A%2F%2Ftorrent-downloads.to%3A5869%2Fannounce&tr=http%3A%2F%2Fdenis.stalker.h3q.com%3A6969%2Fannounce&tr=http%3A%2F%2Fopen.tracker.thepiratebay.org%2Fannounce&tr=http%3A%2F%2Fpirates.sumotracker.com%2Fannounce&tr=http%3A%2F%2Ftracker.thepiratebay.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.thepiratebay.org%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Il_Diritto_Di_Opporsi= 'magnet:?xt=urn:btih:48370cf773a794509e421e83417145d442f27aba&dn=Il+diritto+di+opporsi+%282019%29+%5BBluRay+Rip+1080p+ITA-ENG+AC3+SUBS%5D+%5BM%40HD%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce'
var Lo_Squalo= 'magnet:?xt=urn:btih:57B23EE59C2D0D4808A78AFFD362430D815806D8&dn=Jaws+%281975%29+%2B+Featurettes+%282160p+Bluray+x265+HEVC+10bit+AAC+7.1+Joy%29+%5BUTR%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Non_e_un_paese_per_vecchi= 'magnet:?xt=urn:btih:bffd181a08e7faa74dbc432fb5239dc259503792&dn=Non+%C3%A8+un+Paese+per+Vecchi+%282007+ITA%2FENG%29+%5B1080p+x265%5D+%5BPaso77%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce'
var _Odissea_nello_spazio = 'magnet:?xt=urn:btih:CD3558EF57E5F18FE3C1A5BBDD76BDAB8DA3BA88&dn=2001.A.Space.Odyssey.1968.Multi.mUHD.2160p.Bluray.x265.HDR.DTS..5.1-DTOne&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2740%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Moon = 'magnet:?xt=urn:btih:f2d8138f1576ba878f71f04bf02884df21ed632f&dn=Moon+2009+BDRip+1080p+Ita+Eng+x265-NAHOM&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce'
var Il_Grande_Lebowsky ='magnet:?xt=urn:btih:8f0c05b10eaddd6e204b2a5ad9f1bb817163037a&dn=Il+grande+Lebowski+-+Remastered+4K+%281998+ITA%2FENG%29+%5B1080p%5D+%5BHollywoodMovie%5D&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce'
var Padrino_Trilogia = 'magnet:?xt=urn:btih:6FF345C4FF51A6C38350DB09D5485FA110C1425C&dn=Il+Padrino+-+The+Godfather+Trilogia+1080p+H265+AC3+5.1+ITA.ENG+multisub+%281972-1990%29+Sp33dy94+MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.pw%3A3391%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Escape_Room= 'magnet:?xt=urn:btih:4E3DCE58DC00DBF673EB2D4058C9EA2E9BBAF299&dn=Escape+Room+AC3+5.1+ITA.ENG+1080p+H265+multisub+%282019%29+Sp33dy94+MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2F151.80.120.114%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var UnderWater= 'magnet:?xt=urn:btih:dc2fb6e5f34f9c5924b8381c84a2d389bb055dc2&tr=http://tracker.tfile.me:80/announce&tr=http://torrent.nwps.ws:80/announce&tr=http://peersteers.org:80/announce&tr=https://tracker.fastdownload.xyz:443/announce&tr=https://opentracker.xyz:443/announce&tr=http://open.trackerlist.xyz:80/announce&tr=https://1.tracker.animmouse.tk:443/announce&tr=udp://tracker.skynetcloud.tk:6969/announce&tr=udp://tracker.dyn.im:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.open-tracker.org:1337/announce&tr=http://tracker.tfile.co:80/announce&tr=https://t.quic.ws:443/announce&tr=udp://tracker.filemail.com:6969/announce&tr=udp://retracker.lanta-net.ru:2710/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=http://0d.kebhana.mx:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://bigfoot1942.sektori.org:6969/announce&tr=udp://retracker.sevstar.net:2710/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://denis.stalker.upeer.me:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=udp://tracker.port443.xyz:6969/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://t.acg.rip:6699/announce&tr=udp://tracker.moeking.me:6969/announce&tr=http://vps02.net.orel.ru:80/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=https://2.tracker.animmouse.tk:443/announce&tr=udp://bt.xxx-tracker.com:2710/announce&tr=udp://open.demonii.si:1337/announce&tr=udp://tracker.nyaa.uk:6969/announce&tr=udp://prestige.minimafia.nl:443/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://retracker.netbynet.ru:2710/announce&tr=udp://ipv4.tracker.harry.lu:80/announce&tr=udp://hk1.opentracker.ga:6969/announce&tr=udp://torrentclub.tech:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tw.opentracker.ga:36920/announce&tr=udp://explodie.org:6969/announce&tr=udp://tracker.iamhansen.xyz:2000/announce&tr=http://tracker.corpscorp.online:80/announce&tr=udp://tracker.freddit.nl:6969/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://9.rarbg.to:2710/announce&tr=udp://tracker1.itzmx.com:8080/announce&tr=udp://thetracker.org:80/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://tracker.vanitycore.co:6969/announce&tr=http://private.minimafia.nl:443/announce'

console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------------------')

//Greenland
webtorrentHealth(Greenland, function (err, data) {
  if (err) return console.error(err)
  console.log('\x1b[32m%s\x1b[0m',"GreenLand:----------------")
  console.log('average number of seeders: ' + data.seeds)
  console.log('average number of leechers: ' + data.peers)
  console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
  if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
      console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
  }
  else{
    console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
  }
})
//Greenland
//Borat2
webtorrentHealth(Borat2, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Borat2:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  }
    
  )
//Borat2
//Harry Potter

  webtorrentHealth(Harry_Potter, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Harry Potter e il prigioniero di Azkban:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  }
  )
  //Harry Potter
    //Il diritto di opporsi

  webtorrentHealth(Il_Diritto_Di_Opporsi, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Il diritto di opporsi:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
      //Il diritto di opporsi
    //Lo Squalo

  webtorrentHealth(Lo_Squalo, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Lo Squalo:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
      //Lo Squalo
    //Non e un paese per vecchi

  webtorrentHealth(Non_e_un_paese_per_vecchi, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Non è un paese per vecchi:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
  //Non e un paese per vecchi
  //2001 Odissea nello spazio
  webtorrentHealth(_Odissea_nello_spazio, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','2001 Odissea nello Spazio:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
    //2001 Odissea nello spazio
//Moon
webtorrentHealth(Moon, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Moon:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
  //Moon
//Il grande lebowsky

  webtorrentHealth(Il_Grande_Lebowsky, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Il grande Lebowsky:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
  //Il grande lebowsky
//Il padrino trilogia

  webtorrentHealth(Padrino_Trilogia, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Il padrino Trilogia:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
  //Il padrino trilogia
//Escape room
  webtorrentHealth(Escape_Room, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','Escape Room:----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
  //Escape room
  //Underwater

  webtorrentHealth(UnderWater, function (err, data) {
    if (err) return console.error(err)
    console.log('\x1b[32m%s\x1b[0m','UnderWater----------------')
    console.log('average number of seeders: ' + data.seeds)
    console.log('average number of leechers: ' + data.peers)
    console.log('ratio: ', +(Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2'))
    if ((Math.round((data.peers > 0 ? data.seeds / data.peers : data.seeds) +'e+2') + 'e-2')>0){
        console.log('STATO='+'\x1b[32m%s\x1b[0m','OK!')
    }
    else{
      console.log('STATO='+'\x1b[31m%s\x1b[0m','NOT WORKING!')
    }
  })
    //Underwater

  console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------------------')