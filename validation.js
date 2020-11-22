


var webtorrentHealth = require('webtorrent-health')
var Greenland = 'magnet:?xt=urn:btih:61D2FE2B6D888BE09DA3306AD751F1F0AC37BC8D&dn=Greenland.2020.1080p.AMZN.WEBRip.DDP5.1.x264-NTG&tr=http%3A%2F%2Ftracker.trackerfix.com%3A80%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2860%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2990%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Borat2 = 'magnet:?xt=urn:btih:6C3F7E1BF7EE1A6457A1B14B0CDBD222F746BB11&dn=Borat+Subsequent+Moviefilm+%282020%29+%282160p+AMZN+WEBRip+x265+HEVC+10bit+AAC+5.1+Joy%29+%5BUTR%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Harry_Potter= 'magnet:?xt=urn:btih:3E3B429E1FEB84ECDBC87C32EC9B71F4570E2753&dn=Harry+Potter+and+the+Prisoner+of+Azkaban+%282004%29+%282160p+BluRay+x265+HEVC+10bit+HDR+AAC+7.1+Tigole%29+%5BQxR%5D&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Il_Diritto_Di_Opporsi= 'magnet:?xt=urn:btih:CD3558EF57E5F18FE3C1A5BBDD76BDAB8DA3BA88&dn=2001.A.Space.Odyssey.1968.Multi.mUHD.2160p.Bluray.x265.HDR.DTS..5.1-DTOne&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2740%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Lo_Squalo= 'magnet:?xt=urn:btih:57B23EE59C2D0D4808A78AFFD362430D815806D8&dn=Jaws+%281975%29+%2B+Featurettes+%282160p+Bluray+x265+HEVC+10bit+AAC+7.1+Joy%29+%5BUTR%5D&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Non_e_un_paese_per_vecchi= 'magnet:?xt=urn:btih:F4679E02D61C276381761BF07AECF0B10C828D7F&dn=No+Country+for+Old+Men+-+Non+%26egrave%3B+un+paese+per+vecchi+%5BH264+-+Ita+Eng+Aac+-+Sub+Ita%5D%5BTNT+Village%5D&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.istole.it%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var _Odissea_nello_spazio = 'magnet:?xt=urn:btih:CD3558EF57E5F18FE3C1A5BBDD76BDAB8DA3BA88&dn=2001.A.Space.Odyssey.1968.Multi.mUHD.2160p.Bluray.x265.HDR.DTS..5.1-DTOne&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2740%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.vanitycore.co%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Moon = 'magnet:?xt=urn:btih:9B19A8B82AD14D27099211FACDC855746983C9D9&dn=Moon.2009.4K.HDR.2160p.BDRip+Ita+Eng+x265-NAHOM&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Il_Grande_Lebowsky ='magnet:?xt=urn:btih:8f0c05b10eaddd6e204b2a5ad9f1bb817163037a&dn=Il+grande+Lebowski+-+Remastered+4K+%281998+ITA%2FENG%29+%5B1080p%5D+%5BHollywoodMovie%5D&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce'
var Padrino_Trilogia = 'magnet:?xt=urn:btih:6FF345C4FF51A6C38350DB09D5485FA110C1425C&dn=Il+Padrino+-+The+Godfather+Trilogia+1080p+H265+AC3+5.1+ITA.ENG+multisub+%281972-1990%29+Sp33dy94+MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.pw%3A3391%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var Escape_Room= 'magnet:?xt=urn:btih:4E3DCE58DC00DBF673EB2D4058C9EA2E9BBAF299&dn=Escape+Room+AC3+5.1+ITA.ENG+1080p+H265+multisub+%282019%29+Sp33dy94+MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2F62.138.0.158%3A6969%2Fannounce&tr=udp%3A%2F%2F151.80.120.114%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'
var UnderWater= 'magnet:?xt=urn:btih:6E92AA54FDE02914EC21D3E4DD4C3E0A885E60B4&dn=Underwater+%282020%29+AC3+5.1+ITA.ENG+1080p+H265+sub+ita.eng+Sp33dy94+MIRCrew&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2730%2Fannounce&tr=udp%3A%2F%2F9.rarbg.com%3A2710%2Fannounce&tr=udp%3A%2F%2F9.rarbg.me%3A2780%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.yi.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fshadowshq.eddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Finferno.demonoid.pw%3A3391%2Fannounce&tr=udp%3A%2F%2Feddie4.nl%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.zer0day.to%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fcoppersurfer.tk%3A6969%2Fannounce'

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