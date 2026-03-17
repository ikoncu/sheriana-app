var bt=Object.defineProperty;var wt=(t,e,s)=>e in t?bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Ae=(t,e,s)=>wt(t,typeof e!="symbol"?e+"":e,s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}})();class kt{initSync(){throw new Error("Not implemented")}async init(){this.initSync()}getSync(e){throw new Error("Not implemented")}getByIdSync(e,s){throw new Error("Not implemented")}addSync(e,s){throw new Error("Not implemented")}updateSync(e,s,i){throw new Error("Not implemented")}removeSync(e,s){throw new Error("Not implemented")}setSync(e,s){throw new Error("Not implemented")}subscribe(e,s){throw new Error("Not implemented")}syncAfterWrite(e,s,i){}resetSync(){throw new Error("Not implemented")}}const St=[{id:1,slug:"havlu",name:"Havlular",order:0},{id:2,slug:"plaj",name:"Plaj",order:1},{id:3,slug:"ceyiz",name:"Ceyiz",order:2},{id:4,slug:"ev",name:"Ev Tekstili",order:3}],Et=[{id:1,name:"Denizli Premium Havlu Seti",price:34.9,badge:"Yeni",category:"havlu",desc:"Denizli'nin en kaliteli pamuğundan üretilen 4'lü havlu seti. Ekstra yumuşak, hızlı kuruyan özel dokuma.",material:"%100 Türk Pamuğu",reviews:24,stock:50,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80"]},{name:"Siyah",hex:"#1A1A1A",images:["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]}]},{id:2,name:"Peştemal Plaj Havlusu",price:22.9,oldPrice:28.9,badge:"%20",category:"plaj",desc:"Geleneksel Türk peştemalı modern desenlerle buluşuyor. Hafif, çabuk kuruyan, çok amaçlı.",material:"%100 Pamuk",reviews:18,stock:35,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"]}]},{id:3,name:"Bambu Banyo Havlusu",price:29.9,category:"havlu",desc:"Bambu lifi karışımlı ultra yumuşak banyo havlusu. Antibakteriyel özellikli, hassas ciltler için ideal.",material:"%60 Bambu, %40 Pamuk",reviews:31,stock:42,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80"]}]},{id:4,name:"Çeyiz Nevresim Takımı",price:79.9,badge:"Yeni",category:"ceyiz",desc:"Lüks saten dokuma çeyizlik nevresim takımı. Zarif işlemeli, 6 parça komple set.",material:"%100 Pamuk Saten",reviews:12,stock:20,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80","https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]},{name:"Siyah",hex:"#1A1A1A",images:["https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80","https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]}]},{id:5,name:"Plaj Pareosu",price:18.9,oldPrice:22.9,badge:"%15",category:"plaj",desc:"Çok fonksiyonlu plaj pareosu. Şal, etek, elbise olarak kullanılabilir. Canlı renkler.",material:"%100 Viskon",reviews:22,stock:60,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"]}]},{id:6,name:"El Dokuması Masa Örtüsü",price:45.9,category:"ev",desc:"Geleneksel el dokuma tekniğiyle üretilmiş masa örtüsü. Her biri benzersiz, doğal tonlarda.",material:"%100 Keten",reviews:9,stock:15,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]}]},{id:7,name:"Otel Tipi Havlu Seti",price:44.9,category:"havlu",desc:"5 yıldızlı otel kalitesinde havlu seti. Ekstra kalın, yüksek emicilik, uzun ömürlü.",material:"%100 Ringiplik Pamuk",reviews:37,stock:30,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80"]},{name:"Siyah",hex:"#1A1A1A",images:["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]}]},{id:8,name:"Gelin Hamam Seti",price:89.9,badge:"Özel",category:"ceyiz",desc:"Özel tasarım gelin hamam seti. İşlemeli peştemal, kese, sabun ve havlu seti.",material:"%100 Pamuk, El İşçiliği",reviews:15,stock:10,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80","https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80","https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]}]},{id:9,name:"Dekoratif Yastık Kılıfı",price:19.9,oldPrice:24.9,badge:"%20",category:"ev",desc:"El işlemeli dekoratif yastık kılıfı. Bohem tarzı, doğal renklerle evinize sıcaklık katın.",material:"%100 Pamuk",reviews:28,stock:75,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80","https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80"]},{name:"Siyah",hex:"#1A1A1A",images:["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80"]}]},{id:10,name:"Pamuklu Bornoz",price:59.9,category:"havlu",desc:"Premium kalite pamuklu bornoz. Hafif, yumuşak, dört mevsim kullanıma uygun.",material:"%100 Türk Pamuğu",reviews:19,stock:25,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80","https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]},{name:"Siyah",hex:"#1A1A1A",images:["https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80","https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80","https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"]}]},{id:11,name:"Keten Sofra Seti",price:54.9,category:"ev",desc:"Doğal keten sofra seti. Masa örtüsü, runner ve 4 peçete içerir. Şık ve zarif.",material:"%100 Keten",reviews:11,stock:18,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80","https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80","https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&q=80","https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80"]}]},{id:12,name:"Plaj Havlusu XL",price:27.9,oldPrice:34.9,badge:"%20",category:"plaj",desc:"Ekstra geniş plaj havlusu. 100x180cm boyut, canlı desenler, hızlı kuruyan özel doku.",material:"%100 Pamuk",reviews:33,stock:40,colors:[{name:"Doğal",hex:"#E8DDD0",images:["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80"]},{name:"Yeşil",hex:"#6B8F71",images:["https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80"]},{name:"Toprak",hex:"#C4A882",images:["https://images.unsplash.com/photo-1624280217162-466a76286d0f?w=600&q=80","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80","https://images.unsplash.com/photo-1582295525215-cacf275639d8?w=600&q=80"]}]}],$t=[{id:1,title:"Türk Havlularının Sırrı: Denizli Pamuğu",date:"10 Mart 2026",image:"https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=800&q=80",summary:"Denizli havlularını dünyaca ünlü yapan pamuk kalitesinin hikayesi...",content:["Denizli, yüzyıllardır Türkiye'nin havlu üretim merkezi olarak bilinir. Bu kadim şehir, Roma döneminden bu yana tekstil üretimiyle tanınmaktadır.","Bölgenin özel iklim koşulları ve mineral bakımından zengin toprakları, burada yetişen pamuğa benzersiz bir yumuşaklık kazandırır.","SHERIANA olarak, Denizli'nin en köklü atölyelerinde üretilen havlularımızı doğrudan sizlere ulaştırıyoruz.","Türk havlularının dünyada tercih edilmesinin en önemli nedeni, kullanıldıkça yumuşaması ve yıkandıkça emiciliğini artırmasıdır.","Siz de bu eşsiz kaliteyi deneyimlemek için SHERIANA koleksiyonumuza göz atabilirsiniz."]},{id:2,title:"2026 Plaj Trendleri: Peştemal Rehberi",date:"5 Mart 2026",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",summary:"Bu yaz plajda şıklığınızı tamamlayacak peştemal seçim rehberi...",content:["Peştemal, Osmanlı hamam kültüründen günümüze ulaşan bir tekstil mirası olarak 2026 yazının da en trend plaj aksesuarı olmaya devam ediyor.","Bu yılın trendleri arasında doğal tonlar öne çıkıyor. Bej, kum rengi ve zeytuni yeşil tonlarındaki peştemaller, minimalist plaj stilinin vazgeçilmezi.","Peştemal sadece bir plaj havlusu değil; aynı zamanda pareo, şal, masa örtüsü ve hatta battaniye olarak da kullanılabilir.","Peştemal seçerken dikkat edilmesi gereken en önemli kriter, kumaşın dokuma kalitesidir.","SHERIANA peştemal koleksiyonumuz, geleneksel Türk dokuma tekniklerini modern tasarımlarla birleştiriyor."]},{id:3,title:"Çeyiz Hazırlığı: Modern Yaklaşım",date:"28 Şubat 2026",image:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",summary:"Geleneksel çeyiz kültürünü modern dokunuşlarla harmanlama rehberi...",content:["Çeyiz geleneği, Anadolu kültürünün en derin ritüellerinden biri olarak modern çağda da önemini korumaya devam ediyor.","Modern çeyiz anlayışında kalite, miktarın önüne geçiyor. Artık sandıklar dolusu çarşaf yerine, uzun ömürlü ve kaliteli birkaç set tercih ediliyor.","Renk paleti de değişiyor. Geleneksel beyaz ve krem tonlarının yanı sıra, toprak tonları ve pastel renkler de çeyiz koleksiyonlarında yerini alıyor.","Nevresim takımları, havlu setleri ve masa örtüleri, modern çeyizin temel taşlarını oluşturuyor.","SHERIANA çeyiz koleksiyonumuz, geleneksel el işçiliğini modern tasarımlarla buluşturuyor."]}],It=[{id:1,author:"Ayşe K.",stars:5,date:"2 gün önce",text:"Kalitesi gerçekten çok iyi. Yumuşacık ve rengi tam istediğim gibi çıktı."},{id:2,author:"Mehmet Y.",stars:4,date:"1 hafta önce",text:"Eşime hediye aldım, çok beğendi. Kargo da hızlıydı."},{id:3,author:"Zeynep A.",stars:5,date:"2 hafta önce",text:"İkinci kez alışveriş yapıyorum, her zamanki gibi mükemmel kalite."},{id:4,author:"Ali R.",stars:4,date:"3 hafta önce",text:"Fiyatına göre çok kaliteli bir ürün. Tavsiye ederim."},{id:5,author:"Fatma S.",stars:5,date:"1 ay önce",text:"Harika bir ürün! Tam beklediğim gibi geldi, çok memnunum."},{id:6,author:"Emre B.",stars:3,date:"1 ay önce",text:"Ürün güzel ama kargo biraz geç geldi. Ürün kalitesinden memnunum."},{id:7,author:"Deniz K.",stars:5,date:"1 ay önce",text:"Annemin doğum günü için aldım, bayıldı! Paketleme de çok şıktı."},{id:8,author:"Selin M.",stars:4,date:"2 ay önce",text:"Renk beklediğimden biraz farklı ama genel olarak memnunum."},{id:9,author:"Burak T.",stars:5,date:"2 ay önce",text:"Mükemmel kalite, yumuşacık. Tüm aileye aldım."},{id:10,author:"Elif D.",stars:4,date:"3 ay önce",text:"Çok güzel ürün, hediye paketleme seçeneği de harika."},{id:11,author:"Hakan Ö.",stars:5,date:"3 ay önce",text:"Denizli kalitesi gerçekten fark yaratıyor. Süper yumuşak."},{id:12,author:"Gül N.",stars:4,date:"4 ay önce",text:"Güzel ürün, hızlı kargo. Tekrar alırım."}],_t=[{id:1,orderId:"SHR-2026-0847",customer:"Hilal Koncu",email:"hilal@gmail.com",date:"14 Mart 2026",total:79.8,status:"new",items:[{productId:1,name:"Denizli Premium Havlu Seti",qty:1,price:34.9},{productId:2,name:"Peştemal Plaj Havlusu",qty:2,price:22.9}]},{id:2,orderId:"SHR-2026-0846",customer:"Ayşe Demir",email:"ayse@email.com",date:"13 Mart 2026",total:34.9,status:"new",items:[{productId:1,name:"Denizli Premium Havlu Seti",qty:1,price:34.9}]},{id:3,orderId:"SHR-2026-0845",customer:"Mehmet Yılmaz",email:"mehmet@email.com",date:"12 Mart 2026",total:89.9,status:"shipped",items:[{productId:8,name:"Gelin Hamam Seti",qty:1,price:89.9}]},{id:4,orderId:"SHR-2026-0844",customer:"Zeynep Aksoy",email:"zeynep@email.com",date:"11 Mart 2026",total:52.8,status:"shipped",items:[{productId:2,name:"Peştemal Plaj Havlusu",qty:1,price:22.9},{productId:3,name:"Bambu Banyo Havlusu",qty:1,price:29.9}]},{id:5,orderId:"SHR-2026-0843",customer:"Ali Kaya",email:"ali@email.com",date:"10 Mart 2026",total:79.9,status:"delivered",items:[{productId:4,name:"Çeyiz Nevresim Takımı",qty:1,price:79.9}]},{id:6,orderId:"SHR-2026-0842",customer:"Fatma Çelik",email:"fatma@email.com",date:"9 Mart 2026",total:44.9,status:"delivered",items:[{productId:7,name:"Otel Tipi Havlu Seti",qty:1,price:44.9}]},{id:7,orderId:"SHR-2026-0841",customer:"Emre Başaran",email:"emre@email.com",date:"8 Mart 2026",total:59.9,status:"delivered",items:[{productId:10,name:"Pamuklu Bornoz",qty:1,price:59.9}]},{id:8,orderId:"SHR-2026-0840",customer:"Selin Mutlu",email:"selin@email.com",date:"7 Mart 2026",total:45.9,status:"delivered",items:[{productId:6,name:"El Dokuması Masa Örtüsü",qty:1,price:45.9}]}],Mt=[{id:1,name:"Hilal Koncu",email:"hilal@gmail.com",orders:3,totalSpent:142.7,date:"14 Mart 2026"},{id:2,name:"Ayşe Demir",email:"ayse@email.com",orders:2,totalSpent:64.8,date:"13 Mart 2026"},{id:3,name:"Mehmet Yılmaz",email:"mehmet@email.com",orders:5,totalSpent:234.5,date:"12 Mart 2026"},{id:4,name:"Zeynep Aksoy",email:"zeynep@email.com",orders:1,totalSpent:52.8,date:"11 Mart 2026"},{id:5,name:"Ali Kaya",email:"ali@email.com",orders:4,totalSpent:189.6,date:"10 Mart 2026"},{id:6,name:"Fatma Çelik",email:"fatma@email.com",orders:2,totalSpent:89.8,date:"9 Mart 2026"},{id:7,name:"Emre Başaran",email:"emre@email.com",orders:1,totalSpent:59.9,date:"8 Mart 2026"},{id:8,name:"Selin Mutlu",email:"selin@email.com",orders:3,totalSpent:112.4,date:"7 Mart 2026"}],At={storeName:"SHERIANA",email:"info@sheriana.com",phone:"+31 6 1234 5678",freeShippingLimit:50,shippingCost:4.9,deliveryTime:"3-5 iş günü",fastDeliveryCost:9.9,fastDeliveryTime:"1-2 iş günü",notifications:{newOrder:!0,stockAlert:!0,marketing:!1}},B="sheriana_",H={products:Et,categories:St,orders:_t,customers:Mt,reviews:It,settings:At,blogPosts:$t,cart:[],favorites:[],session:null};class ze extends kt{constructor(){super(),this.state={},this.subscribers={}}initSync(){Object.keys(H).forEach(e=>{const s=localStorage.getItem(B+e);if(s!==null)try{this.state[e]=JSON.parse(s)}catch{this.state[e]=structuredClone(H[e]),this._persist(e)}else this.state[e]=structuredClone(H[e]),this._persist(e);this.subscribers[e]=[]})}async init(){this.initSync()}getSync(e){return this.state[e]}getByIdSync(e,s){const i=this.state[e];return Array.isArray(i)&&i.find(a=>a.id===s)||null}addSync(e,s){if(!Array.isArray(this.state[e]))return null;const i=this._getNextId(e),a={...s,id:i};return this.state[e].push(a),this._persist(e),this._notify(e),a}updateSync(e,s,i){const a=this.state[e];if(Array.isArray(a)){const n=a.findIndex(r=>r.id===s);if(n!==-1)return a[n]={...a[n],...i},this._persist(e),this._notify(e),a[n]}return null}removeSync(e,s){if(!Array.isArray(this.state[e]))return!1;const i=this.state[e].length;return this.state[e]=this.state[e].filter(a=>a.id!==s),this.state[e].length<i?(this._persist(e),this._notify(e),!0):!1}setSync(e,s){this.state[e]=s,this._persist(e),this._notify(e)}subscribe(e,s){return this.subscribers[e]||(this.subscribers[e]=[]),this.subscribers[e].push(s),()=>{this.subscribers[e]=this.subscribers[e].filter(i=>i!==s)}}resetSync(){Object.keys(H).forEach(e=>{localStorage.removeItem(B+e),localStorage.removeItem(B+"nextId_"+e)}),this.initSync()}_persist(e){try{localStorage.setItem(B+e,JSON.stringify(this.state[e]))}catch(s){console.warn("Store persist error:",e,s)}}_notify(e){(this.subscribers[e]||[]).forEach(s=>{try{s(this.state[e])}catch(i){console.warn("Store subscriber error:",i)}})}_getNextId(e){const s=B+"nextId_"+e;let i=parseInt(localStorage.getItem(s)||"0",10);const a=this.state[e];if(Array.isArray(a)&&a.length>0){const r=Math.max(...a.map(o=>typeof o.id=="number"?o.id:0));r>=i&&(i=r)}const n=i+1;return localStorage.setItem(s,n.toString()),n}}let h=null,ie=null;function Tt(t){ie=t}function Ct(t){t&&t.shopify&&t.shopify.enabled&&ie?(h=new ie(t.shopify),h.init()):(h=new ze,h.initSync())}function m(t){return h.getSync(t)}function S(t,e){return h.getByIdSync(t,e)}function me(t,e){const s=h.addSync(t,e);return h.syncAfterWrite&&h.syncAfterWrite(t,"create",s),s}function ue(t,e,s){const i=h.updateSync(t,e,s);return h.syncAfterWrite&&h.syncAfterWrite(t,"update",i),i}function De(t,e){const s=h.removeSync(t,e);return h.syncAfterWrite&&h.syncAfterWrite(t,"delete",{id:e}),s}function I(t,e){h.setSync(t,e),h.syncAfterWrite&&h.syncAfterWrite(t,"set",e)}function V(t,e){return h.subscribe(t,e)}function pe(){return h}class qt{constructor(e){this.proxyUrl=e.proxyUrl||"/api/shopify",this.storeDomain=e.storeDomain||"",this._requestQueue=[],this._isProcessing=!1,this._lastRequestTime=0,this._minInterval=500}async getProducts(e={}){const s=new URLSearchParams({limit:"250",...e});return this._throttledRequest("GET",`/products.json?${s}`)}async getProduct(e){return this._throttledRequest("GET",`/products/${e}.json`)}async createProduct(e){return this._throttledRequest("POST","/products.json",{product:e})}async updateProduct(e,s){return this._throttledRequest("PUT",`/products/${e}.json`,{product:s})}async deleteProduct(e){return this._throttledRequest("DELETE",`/products/${e}.json`)}async getOrders(e={}){const s=new URLSearchParams({limit:"250",status:"any",...e});return this._throttledRequest("GET",`/orders.json?${s}`)}async getOrder(e){return this._throttledRequest("GET",`/orders/${e}.json`)}async createDraftOrder(e){return this._throttledRequest("POST","/draft_orders.json",{draft_order:e})}async completeDraftOrder(e){return this._throttledRequest("PUT",`/draft_orders/${e}/complete.json`)}async getCustomers(e={}){const s=new URLSearchParams({limit:"250",...e});return this._throttledRequest("GET",`/customers.json?${s}`)}async createCustomer(e){return this._throttledRequest("POST","/customers.json",{customer:e})}async getCustomCollections(e={}){const s=new URLSearchParams({limit:"250",...e});return this._throttledRequest("GET",`/custom_collections.json?${s}`)}async createCustomCollection(e){return this._throttledRequest("POST","/custom_collections.json",{custom_collection:e})}async getInventoryLevels(e){const s=new URLSearchParams({inventory_item_ids:e.join(",")});return this._throttledRequest("GET",`/inventory_levels.json?${s}`)}async adjustInventory(e,s,i){return this._throttledRequest("POST","/inventory_levels/adjust.json",{inventory_item_id:e,location_id:s,available_adjustment:i})}async testConnection(){var e;try{return{success:!0,productCount:((e=(await this._throttledRequest("GET","/products.json?limit=1")).products)==null?void 0:e.length)||0}}catch(s){return{success:!1,error:s.message}}}async _throttledRequest(e,s,i=null){return new Promise((a,n)=>{this._requestQueue.push({method:e,path:s,body:i,resolve:a,reject:n}),this._processQueue()})}async _processQueue(){if(!(this._isProcessing||this._requestQueue.length===0)){for(this._isProcessing=!0;this._requestQueue.length>0;){const e=Date.now()-this._lastRequestTime;e<this._minInterval&&await new Promise(o=>setTimeout(o,this._minInterval-e));const{method:s,path:i,body:a,resolve:n,reject:r}=this._requestQueue.shift();this._lastRequestTime=Date.now();try{const o=await this._request(s,i,a);n(o)}catch(o){if(o.status===429){const l=parseInt(o.retryAfter||"2",10)*1e3;await new Promise(c=>setTimeout(c,l)),this._requestQueue.unshift({method:s,path:i,body:a,resolve:n,reject:r})}else r(o)}}this._isProcessing=!1}}async _request(e,s,i){const a=`${this.proxyUrl}?path=${encodeURIComponent(s)}`,n={method:e,headers:{"Content-Type":"application/json"}};i&&e!=="GET"&&(n.body=JSON.stringify(i));const r=await fetch(a,n);if(!r.ok){const o=await r.json().catch(()=>({message:r.statusText})),l=new Bt(r.status,o);throw l.retryAfter=r.headers.get("Retry-After"),l}return r.status===204||r.headers.get("content-length")==="0"?{}:r.json()}}class Bt extends Error{constructor(e,s){super(`Shopify API Error ${e}: ${typeof s=="string"?s:JSON.stringify(s)}`),this.status=e,this.body=s,this.retryAfter=null}}const F="sheriana_idmap_",Z="sheriana_varmap_";class Lt{constructor(){this.maps={},this.reverseMaps={},this.variantMaps={}}init(){["products","orders","customers","categories"].forEach(s=>{const i=localStorage.getItem(F+s);this.maps[s]=i?JSON.parse(i):{},this.reverseMaps[s]={},Object.entries(this.maps[s]).forEach(([a,n])=>{this.reverseMaps[s][String(n)]=parseInt(a)})});const e=localStorage.getItem(Z+"products");this.variantMaps=e?JSON.parse(e):{}}setMapping(e,s,i){this.maps[e]||(this.maps[e]={}),this.reverseMaps[e]||(this.reverseMaps[e]={}),this.maps[e][String(s)]=i,this.reverseMaps[e][String(i)]=s,localStorage.setItem(F+e,JSON.stringify(this.maps[e]))}getShopifyId(e,s){var i;return((i=this.maps[e])==null?void 0:i[String(s)])||null}getLocalId(e,s){var i;return((i=this.reverseMaps[e])==null?void 0:i[String(s)])||null}hasShopifyMapping(e,s){var i;return!!((i=this.maps[e])!=null&&i[String(s)])}removeMapping(e,s){if(!this.maps[e])return;const i=this.maps[e][String(s)];delete this.maps[e][String(s)],i&&this.reverseMaps[e]&&delete this.reverseMaps[e][String(i)],localStorage.setItem(F+e,JSON.stringify(this.maps[e]))}setVariantMapping(e,s,i){this.variantMaps[e]||(this.variantMaps[e]={}),this.variantMaps[e][s]=i,localStorage.setItem(Z+"products",JSON.stringify(this.variantMaps))}getShopifyVariantId(e,s){var i;return((i=this.variantMaps[e])==null?void 0:i[s])||null}getLocalProductIdByVariant(e){for(const[s,i]of Object.entries(this.variantMaps))for(const[,a]of Object.entries(i))if(a===e)return parseInt(s);return null}getLocalProductId(e){return this.getLocalId("products",e)}getShopifyProductId(e){return this.getShopifyId("products",e)}getAllMappings(e){return{...this.maps[e]}}getMappingCount(e){return Object.keys(this.maps[e]||{}).length}reset(){["products","orders","customers","categories"].forEach(e=>{localStorage.removeItem(F+e)}),localStorage.removeItem(Z+"products"),this.maps={},this.reverseMaps={},this.variantMaps={}}}class ee{static toSheriana(e,s=null){var l;const i=this._extractColors(e),a=this._mapProductTypeToSlug(e.product_type),n=this._extractBadge(e.tags),r=this._extractMetafield(e.metafields,"custom","material"),o=(l=e.variants)==null?void 0:l[0];return{id:(s==null?void 0:s.id)||null,shopifyId:e.id,name:e.title||"",price:parseFloat((o==null?void 0:o.price)||0),oldPrice:o!=null&&o.compare_at_price?parseFloat(o.compare_at_price):void 0,badge:n||void 0,category:a,desc:this._stripHtml(e.body_html||""),material:r||"",reviews:(s==null?void 0:s.reviews)||0,stock:e.variants?e.variants.reduce((c,d)=>c+(d.inventory_quantity||0),0):0,colors:i}}static toShopify(e){const s={};e.colors.forEach(a=>{s[a.name]=a.hex});const i=Math.floor((e.stock||0)/Math.max(e.colors.length,1));return{title:e.name,body_html:`<p>${e.desc||""}</p>`,product_type:e.category||"",vendor:"SHERIANA",tags:[e.badge?`badge:${e.badge}`:""].filter(Boolean).join(", "),variants:e.colors.map(a=>{var n;return{title:a.name,price:e.price.toString(),compare_at_price:((n=e.oldPrice)==null?void 0:n.toString())||null,option1:a.name,inventory_quantity:i,inventory_management:"shopify"}}),options:[{name:"Renk",values:e.colors.map(a=>a.name)}],images:e.colors.flatMap(a=>a.images.map(n=>({src:n,alt:`${e.name} - ${a.name}`}))),metafields:[{namespace:"custom",key:"material",value:e.material||"",type:"single_line_text_field"},{namespace:"custom",key:"color_hex",value:JSON.stringify(s),type:"json"}]}}static _extractColors(e){var a,n,r;const s=(a=e.options)==null?void 0:a.find(o=>["color","renk","colour"].includes(o.name.toLowerCase())),i=this._parseColorHexMetafield(e.metafields);return!s||!((n=s.values)!=null&&n.length)?[{name:"Default",hex:"#E8DDD0",images:((r=e.images)==null?void 0:r.map(o=>o.src))||[]}]:s.values.map(o=>{var d,g;const l=(d=e.variants)==null?void 0:d.find(p=>p.option1===o);let c=[];return l&&e.images&&(c=e.images.filter(p=>{var w;return(w=p.variant_ids)==null?void 0:w.includes(l.id)}).map(p=>p.src)),c.length===0&&(c=((g=e.images)==null?void 0:g.map(p=>p.src))||[]),{name:o,hex:i[o]||"#E8DDD0",images:c}})}static _parseColorHexMetafield(e){if(!e)return{};const s=e.find(i=>i.namespace==="custom"&&i.key==="color_hex");if(!s)return{};try{return JSON.parse(s.value)}catch{return{}}}static _extractMetafield(e,s,i){if(!e)return null;const a=e.find(n=>n.namespace===s&&n.key===i);return a?a.value:null}static _extractBadge(e){if(!e)return null;const i=(typeof e=="string"?e.split(",").map(a=>a.trim()):e).find(a=>a.startsWith("badge:"));return i?i.replace("badge:",""):null}static _mapProductTypeToSlug(e){return e?e.toLowerCase().replace(/[çÇ]/g,"c").replace(/[şŞ]/g,"s").replace(/[ğĞ]/g,"g").replace(/[üÜ]/g,"u").replace(/[öÖ]/g,"o").replace(/[ıİ]/g,"i").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""):""}static _stripHtml(e){return e?e.replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").trim():""}}class te{static toShopifyDraftOrder(e,s){const i=(e.items||[]).map(a=>{const n=s.getShopifyVariantId(a.productId,a.colorName);return n?{variant_id:n,quantity:a.qty}:{title:a.name,quantity:a.qty,price:a.price.toString()}});return{email:e.email||"",line_items:i,tags:`sheriana_order:${e.orderId}`,note:`Sheriana sipariş: ${e.orderId}`,shipping_line:{title:"Standart Kargo",price:"0.00"}}}static toSheriana(e,s){const i=new Date(e.created_at),a=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],n=`${i.getDate()} ${a[i.getMonth()]} ${i.getFullYear()}`,r=e.customer?`${e.customer.first_name||""} ${e.customer.last_name||""}`.trim():"Misafir";return{shopifyId:e.id,orderId:e.name||`SHOP-${e.id}`,customer:r,email:e.email||"",date:n,total:parseFloat(e.total_price||0),status:this._mapShopifyStatus(e.fulfillment_status,e.cancelled_at),items:(e.line_items||[]).map(o=>({productId:s.getLocalProductId(o.product_id)||0,name:o.title||"",qty:o.quantity||1,price:parseFloat(o.price||0),colorName:o.variant_title||"",size:""}))}}static _mapShopifyStatus(e,s){if(s)return"cancelled";switch(e){case"fulfilled":return"delivered";case"partial":return"shipped";default:return"new"}}}class Te{static toSheriana(e,s=null){return{id:(s==null?void 0:s.id)||null,shopifyId:e.id,name:`${e.first_name||""} ${e.last_name||""}`.trim()||"İsimsiz",email:e.email||"",orders:e.orders_count||0,totalSpent:parseFloat(e.total_spent||0),date:e.created_at?new Date(e.created_at).toLocaleDateString("tr-TR"):"-"}}static toShopify(e){const s=(e.name||"").split(" ");return{first_name:s[0]||"",last_name:s.slice(1).join(" ")||"",email:e.email||""}}}class Ce{static toSheriana(e,s=null,i=0){const a=e.title||"",n=a.toLowerCase().replace(/[çÇ]/g,"c").replace(/[şŞ]/g,"s").replace(/[ğĞ]/g,"g").replace(/[üÜ]/g,"u").replace(/[öÖ]/g,"o").replace(/[ıİ]/g,"i").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");return{id:(s==null?void 0:s.id)||null,shopifyId:e.id,slug:(s==null?void 0:s.slug)||n,name:a,order:(s==null?void 0:s.order)??i}}static toShopify(e){return{title:e.name,body_html:"",published:!0}}}const qe="sheriana_sync_queue",Be="sheriana_last_sync",Le=1440*60*1e3,xe=5;class xt{constructor({apiClient:e,idMap:s,localAdapter:i}){Ae(this,"_onOnline",()=>{this._emit("online",{}),this._queue.length>0&&this.processQueue()});this.api=e,this.idMap=s,this.local=i,this._isSyncing=!1,this._listeners=[],this._dailyTimer=null,this._queue=this._loadQueue()}async performFullSync(){if(this._isSyncing)return this._emit("sync_skipped",{reason:"Zaten senkron ediliyor"}),{success:!1,reason:"already_syncing"};this._isSyncing=!0,this._emit("sync_start",{});const e={products:null,categories:null,customers:null,orders:null,queue:null};try{return e.categories=await this._syncCategories(),e.products=await this._syncProducts(),e.customers=await this._syncCustomers(),e.orders=await this._syncOrders(),e.queue=await this.processQueue(),localStorage.setItem(Be,new Date().toISOString()),this._emit("sync_complete",e),{success:!0,results:e}}catch(s){return this._emit("sync_error",{error:s.message}),{success:!1,error:s.message}}finally{this._isSyncing=!1}}async syncEntity(e){switch(e){case"products":return this._syncProducts();case"categories":return this._syncCategories();case"customers":return this._syncCustomers();case"orders":return this._syncOrders();default:throw new Error(`Bilinmeyen entity: ${e}`)}}queueOperation(e){const s={id:Date.now()+"_"+Math.random().toString(36).substr(2,5),timestamp:new Date().toISOString(),retries:0,...e};this._queue.push(s),this._saveQueue(),this._emit("queue_add",{entry:s}),navigator.onLine&&this.processQueue()}async processQueue(){if(this._queue.length===0)return{processed:0,failed:0};let e=0,s=0;const i=[];for(const a of this._queue)try{await this._processQueueEntry(a),e++,this._emit("queue_process",{entry:a,success:!0})}catch(n){a.retries=(a.retries||0)+1,a.lastError=n.message,a.retries>=xe?(s++,this._emit("queue_fail",{entry:a,error:n.message}),console.error(`[SyncEngine] Kuyruk işlemi başarısız (${xe} deneme): `,a)):(i.push(a),this._emit("queue_retry",{entry:a,retries:a.retries}))}return this._queue=i,this._saveQueue(),{processed:e,failed:s,remaining:i.length}}startDailySync(){this.stopDailySync();const e=this.getLastSyncTime();(!e||Date.now()-e.getTime()>Le)&&navigator.onLine&&this.performFullSync(),this._dailyTimer=setInterval(()=>{navigator.onLine&&!this._isSyncing&&this.performFullSync()},Le),window.addEventListener("online",this._onOnline)}stopDailySync(){this._dailyTimer&&(clearInterval(this._dailyTimer),this._dailyTimer=null),window.removeEventListener("online",this._onOnline)}getSyncStatus(){return{isSyncing:this._isSyncing,lastSync:this.getLastSyncTime(),queuedOperations:this._queue.length,isOnline:navigator.onLine,queue:this._queue.map(e=>({id:e.id,type:e.type,entity:e.entity,retries:e.retries,timestamp:e.timestamp}))}}getLastSyncTime(){const e=localStorage.getItem(Be);return e?new Date(e):null}onSyncEvent(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(s=>s!==e)}}async _syncProducts(){const e={pulled:0,created:0,updated:0};try{const s=await this._fetchAllPaginated("products"),i=this.local.getSync("products")||[];for(const a of s){const n=this.idMap.getLocalId("products",a.id),r=n?i.find(l=>l.id===n):null,o=ee.toSheriana(a,r);if(r)o.id=r.id,this.local.updateSync("products",o),e.updated++;else{const l=this.local.addSync("products",o);this.idMap.setMapping("products",l,a.id),e.created++}if(a.variants){const l=o.id||this.idMap.getLocalId("products",a.id);a.variants.forEach(c=>{const d=c.option1||"Default";this.idMap.setVariantMapping(l,d,c.id)})}e.pulled++}return this._emit("sync_entity",{entity:"products",stats:e}),e}catch(s){throw this._emit("sync_entity_error",{entity:"products",error:s.message}),s}}async _syncCategories(){const e={pulled:0,created:0,updated:0};try{const i=(await this.api.getCustomCollections()).custom_collections||[],a=this.local.getSync("categories")||[];return i.forEach((n,r)=>{const o=this.idMap.getLocalId("categories",n.id),l=o?a.find(d=>d.id===o):null,c=Ce.toSheriana(n,l,r);if(l)c.id=l.id,this.local.updateSync("categories",c),e.updated++;else{const d=this.local.addSync("categories",c);this.idMap.setMapping("categories",d,n.id),e.created++}e.pulled++}),this._emit("sync_entity",{entity:"categories",stats:e}),e}catch(s){throw this._emit("sync_entity_error",{entity:"categories",error:s.message}),s}}async _syncCustomers(){const e={pulled:0,created:0,updated:0};try{const i=(await this.api.getCustomers()).customers||[],a=this.local.getSync("customers")||[];for(const n of i){const r=this.idMap.getLocalId("customers",n.id),o=r?a.find(c=>c.id===r):null,l=Te.toSheriana(n,o);if(o)l.id=o.id,this.local.updateSync("customers",l),e.updated++;else{const c=this.local.addSync("customers",l);this.idMap.setMapping("customers",c,n.id),e.created++}e.pulled++}return this._emit("sync_entity",{entity:"customers",stats:e}),e}catch(s){throw this._emit("sync_entity_error",{entity:"customers",error:s.message}),s}}async _syncOrders(){const e={pulled:0,pushed:0,updated:0};try{const i=(await this.api.getOrders()).orders||[],a=this.local.getSync("orders")||[];for(const r of i){const o=this.idMap.getLocalId("orders",r.id),l=o?a.find(d=>d.id===o):null,c=te.toSheriana(r,this.idMap);if(l)c.id=l.id,this.local.updateSync("orders",c),e.updated++;else{const d=this.local.addSync("orders",c);this.idMap.setMapping("orders",d,r.id)}e.pulled++}const n=this.local.getSync("orders")||[];for(const r of n)if(!this.idMap.hasShopifyMapping("orders",r.id))try{const o=te.toShopifyDraftOrder(r,this.idMap),l=await this.api.createDraftOrder(o);l.draft_order&&(this.idMap.setMapping("orders",r.id,l.draft_order.id),e.pushed++)}catch(o){console.warn(`[SyncEngine] Sipariş push başarısız (ID: ${r.id}):`,o.message)}return this._emit("sync_entity",{entity:"orders",stats:e}),e}catch(s){throw this._emit("sync_entity_error",{entity:"orders",error:s.message}),s}}async _processQueueEntry(e){const{type:s,entity:i,data:a,localId:n}=e;switch(`${i}:${s}`){case"products:create":{const r=ee.toShopify(a),o=await this.api.createProduct(r);o.product&&(this.idMap.setMapping("products",n,o.product.id),o.product.variants&&o.product.variants.forEach(l=>{this.idMap.setVariantMapping(n,l.option1||"Default",l.id)}));break}case"products:update":{const r=this.idMap.getShopifyId("products",n);if(!r)throw new Error(`Shopify ID bulunamadı: products/${n}`);const o=ee.toShopify(a);await this.api.updateProduct(r,o);break}case"products:delete":{const r=this.idMap.getShopifyId("products",n);r&&(await this.api.deleteProduct(r),this.idMap.removeMapping("products",n));break}case"categories:create":{const r=Ce.toShopify(a),o=await this.api.createCustomCollection(r);o.custom_collection&&this.idMap.setMapping("categories",n,o.custom_collection.id);break}case"categories:update":{console.warn("[SyncEngine] Kategori güncelleme henüz desteklenmiyor");break}case"categories:delete":{this.idMap.getShopifyId("categories",n)&&this.idMap.removeMapping("categories",n);break}case"orders:create":{const r=te.toShopifyDraftOrder(a,this.idMap),o=await this.api.createDraftOrder(r);o.draft_order&&this.idMap.setMapping("orders",n,o.draft_order.id);break}case"customers:create":{const r=Te.toShopify(a),o=await this.api.createCustomer(r);o.customer&&this.idMap.setMapping("customers",n,o.customer.id);break}default:console.warn(`[SyncEngine] Bilinmeyen kuyruk işlemi: ${i}:${s}`)}}async _fetchAllPaginated(e){const s=[];let i=1,a=!0;for(;a;){let n;switch(e){case"products":n=await this.api.getProducts({limit:"250",page:String(i)});break;case"customers":n=await this.api.getCustomers({limit:"250",page:String(i)});break;default:throw new Error(`Sayfalama desteklenmiyor: ${e}`)}const r=n[e]||[];s.push(...r),r.length<250?a=!1:i++}return s}_loadQueue(){try{const e=localStorage.getItem(qe);return e?JSON.parse(e):[]}catch{return[]}}_saveQueue(){localStorage.setItem(qe,JSON.stringify(this._queue))}clearQueue(){this._queue=[],this._saveQueue()}_emit(e,s){const i={event:e,timestamp:new Date().toISOString(),...s};this._listeners.forEach(a=>{try{a(i)}catch(n){console.error("[SyncEngine] Listener hatası:",n)}})}}const zt=["products","categories","orders","customers"];class Dt extends ze{constructor(e={}){super(),this.config=e,this.apiClient=new qt({proxyUrl:e.proxyUrl||"/api/shopify",storeDomain:e.storeDomain||""}),this.idMap=new Lt,this.syncEngine=new xt({apiClient:this.apiClient,idMap:this.idMap,localAdapter:this}),this._syncListeners=[]}initSync(){super.initSync(),this.idMap.init()}async init(){this.initSync(),this.config.autoSync!==!1&&this.syncEngine.startDailySync(),this.syncEngine.onSyncEvent(e=>{this._notifySyncListeners(e)}),navigator.onLine&&this.performSync().catch(e=>{console.warn("[ShopifyAdapter] İlk sync hatası:",e.message)})}syncAfterWrite(e,s,i){zt.includes(e)&&this.syncEngine.queueOperation({type:s,entity:e,data:i,localId:(i==null?void 0:i.id)||null})}async performSync(){return this.syncEngine.performFullSync()}async testConnection(){return this.apiClient.testConnection()}getSyncStatus(){return this.syncEngine.getSyncStatus()}getLastSyncTime(){return this.syncEngine.getLastSyncTime()}onSyncEvent(e){return this._syncListeners.push(e),()=>{this._syncListeners=this._syncListeners.filter(s=>s!==e)}}getIdMap(){return this.idMap}getApiClient(){return this.apiClient}getSyncEngine(){return this.syncEngine}isShopifyEnabled(){return!0}resetSync(){super.resetSync(),this.idMap.reset(),this.syncEngine.clearQueue()}destroy(){this.syncEngine.stopDailySync()}_notifySyncListeners(e){this._syncListeners.forEach(s=>{try{s(e)}catch(i){console.warn("[ShopifyAdapter] Listener hatası:",i)}})}}let K=[],L="splash",ne=0;function Pe(){return ne}let He=()=>{},Fe=()=>{},Oe=()=>{},Re=()=>{},re=()=>!1,je=()=>!1,oe=()=>{},Ne=()=>{},Ke=()=>{},Ge=()=>{},Ye=()=>{},Ue=()=>{},Qe=()=>{};function Pt(t){t.updateProductDetail&&(He=t.updateProductDetail),t.renderCart&&(Fe=t.renderCart),t.resetCheckout&&(Oe=t.resetCheckout),t.renderCheckoutSummary&&(Re=t.renderCheckoutSummary),t.isLoggedIn&&(re=t.isLoggedIn),t.isAdmin&&(je=t.isAdmin),t.setRedirectAfterLogin&&(oe=t.setRedirectAfterLogin),t.showAllReviews&&(Ne=t.showAllReviews),t.openBlogPost&&(Ke=t.openBlogPost),t.initAdmin&&(Ge=t.initAdmin),t.exitAdmin&&t.exitAdmin,t.renderFavorites&&(Ye=t.renderFavorites),t.renderUserOrders&&(Ue=t.renderUserOrders),t.renderBlogCards&&(Qe=t.renderBlogCards)}function Ht(){if(K.length>0){const t=K.pop();v(t.screen,t.productId,!0)}else v("home",void 0,!0)}function Ft(){K=[],v("home",void 0,!0)}function v(t,e,s){!s&&L&&L!=="splash"&&K.push({screen:L,productId:L==="product"?ne:void 0}),document.querySelectorAll(".screen").forEach(r=>r.classList.remove("active","fade-in"));let a;switch(t){case"home":a="home-screen";const r=document.getElementById("search-input");r&&(r.value="");const o=document.getElementById("search-bar");o&&o.classList.remove("visible");break;case"product":a="product-screen",e!==void 0&&(ne=e,He(e));break;case"cart":a="cart-screen",Fe();break;case"checkout":a="checkout-screen",Oe(),Re();break;case"success":a="success-screen";break;case"login":a="login-screen";break;case"about":a="about-screen";break;case"contact":a="contact-screen";break;case"blog":a="blog-screen",Qe();break;case"blog-detail":a="blog-detail-screen",e!==void 0&&Ke(e);break;case"reviews":a="reviews-screen",Ne();break;case"privacy":a="privacy-screen";break;case"orders":if(!re()){oe("orders"),v("login");return}a="orders-screen",Ue();break;case"favorites":if(!re()){oe("favorites"),v("login");return}a="favorites-screen",Ye();break;case"admin":if(!je()){v("login");return}a="admin-screen",Ge();break;default:a="home-screen"}L=t;const n=document.getElementById(a);n&&(n.classList.add("active"),requestAnimationFrame(()=>{n.classList.add("fade-in")}),window.scrollTo(0,0))}function u(t,e){const s=document.getElementById("toast"),i=document.getElementById("toast-msg");!s||!i||(e?i.innerHTML=t+e:i.textContent=t,s.classList.add("show"),setTimeout(()=>s.classList.remove("show"),3e3))}function Ot(){const t=document.getElementById("menu-overlay");t&&t.classList.toggle("open")}function Rt(t){const e=document.getElementById("menu-overlay");e&&e.classList.remove("open"),setTimeout(()=>{const{navigateTo:s}=he();s(t)},200)}function jt(t){const e=document.getElementById("menu-overlay");e&&e.classList.remove("open"),setTimeout(()=>{const{navigateTo:s}=he();s("home");const{filterByCategory:i}=Y();i(t)},200)}let he=()=>({}),Y=()=>({});function Nt(t){he=t}function Kt(t){Y=t}function le(){const t=document.getElementById("menu-categories");if(!t)return;const e=m("categories")||[];t.innerHTML=`
    <h3 class="menu-section-title">Kategoriler</h3>
    <a href="#" class="menu-link" onclick="event.preventDefault(); closeMenuAndFilter('all')">Tüm Ürünler</a>
    ${e.sort((s,i)=>s.order-i.order).map(s=>`
      <a href="#" class="menu-link" onclick="event.preventDefault(); closeMenuAndFilter('${s.slug}')">${s.name}</a>
    `).join("")}
  `}function Gt(){const t=document.getElementById("search-bar");if(t)if(t.classList.toggle("visible"),t.classList.contains("visible")){const e=t.querySelector("input");e&&e.focus()}else{const e=document.getElementById("search-input");e&&(e.value="");const{renderProducts:s}=Y();s&&s()}}function Yt(){const t=document.getElementById("search-input");if(!t)return;const{renderProducts:e}=Y();e&&e(t.value)}let E=0,se;function Ut(){se=setInterval(()=>{E=(E+1)%3,ae()},4e3);const t=document.getElementById("hero-track");if(t){let e=0,s=!1;t.addEventListener("touchstart",i=>{e=i.touches[0].clientX,s=!0,clearInterval(se)},{passive:!0}),t.addEventListener("touchend",i=>{if(!s)return;const a=i.changedTouches[0].clientX,n=e-a;Math.abs(n)>50&&(n>0&&E<2?E++:n<0&&E>0&&E--,ae()),s=!1,se=setInterval(()=>{E=(E+1)%3,ae()},4e3)},{passive:!0})}}function ae(){const t=document.getElementById("hero-track");t&&(t.style.transform=`translateX(-${E*100}%)`),document.querySelectorAll("#hero-dots .dot").forEach((e,s)=>{e.classList.toggle("active",s===E)})}let k=0;function Qt(t){k=t}function Xt(){const t=document.getElementById("gallery-track");if(!t)return;let e=0,s=0,i=!1;const a=50;t.addEventListener("touchstart",n=>{e=n.touches[0].clientX,i=!0,t.style.transition="none"},{passive:!0}),t.addEventListener("touchmove",n=>{if(!i)return;s=n.touches[0].clientX;const r=s-e,o=-k*t.parentElement.offsetWidth+r;t.style.transform=`translateX(${o}px)`},{passive:!0}),t.addEventListener("touchend",()=>{if(!i)return;i=!1,t.style.transition="transform 0.3s ease";const n=s-e;Math.abs(n)>a&&(n<0&&k<2?k++:n>0&&k>0&&k--),O()},{passive:!0}),t.addEventListener("mousedown",n=>{e=n.clientX,i=!0,t.style.transition="none",t.style.cursor="grabbing"}),t.addEventListener("mousemove",n=>{if(!i)return;s=n.clientX;const r=s-e,o=-k*t.parentElement.offsetWidth+r;t.style.transform=`translateX(${o}px)`}),t.addEventListener("mouseup",()=>{if(!i)return;i=!1,t.style.transition="transform 0.3s ease",t.style.cursor="grab";const n=s-e;Math.abs(n)>a&&(n<0&&k<2?k++:n>0&&k>0&&k--),O()}),t.addEventListener("mouseleave",()=>{i&&(i=!1,t.style.transition="transform 0.3s ease",O())})}function O(){const t=document.getElementById("gallery-track");if(t){const e=t.parentElement.offsetWidth;t.style.transform=`translateX(-${k*e}px)`}document.querySelectorAll("#gallery-dots .dot").forEach((e,s)=>{e.classList.toggle("active",s===k)})}function Wt(t){let e=m("favorites")||[];e.indexOf(t)!==-1?(e=e.filter(i=>i!==t),u("Favorilerden çıkarıldı")):(e=[...e,t],u("Favorilere eklendi")),I("favorites",e),document.querySelectorAll(".fav-btn").forEach(i=>{const n=(i.getAttribute("onclick")||"").match(/toggleFav\((\d+)\)/);if(n){const r=parseInt(n[1]),o=e.includes(r);i.classList.toggle("active",o);const l=i.querySelector("svg");l&&(l.setAttribute("fill",o?"var(--primary)":"none"),l.setAttribute("stroke",o?"var(--primary)":"#ccc"))}})}let R=null,M=()=>{},Xe=()=>{};function Jt(t){t.navigateTo&&(M=t.navigateTo),t.renderCheckoutSummary&&(Xe=t.renderCheckoutSummary)}function P(){return m("session")}function We(){const t=P();return t?t.isLoggedIn:!1}function Vt(){const t=P();return t?t.isAdmin:!1}function Je(){const t=P();return t?t.user:null}function Ve(t){R=t}function Zt(){const t=P();t&&t.isLoggedIn&&A()}function es(){const t=document.getElementById("login-email"),e=document.getElementById("login-password"),s=document.getElementById("login-error"),i=t?t.value.trim():"",a=e?e.value.trim():"";if(!i||!a){s&&(s.textContent="Lütfen e-posta ve şifre girin.");return}if(s&&(s.textContent=""),i==="admin@sheriana.com"&&a==="123"){I("session",{isLoggedIn:!0,isAdmin:!0,user:{name:"Admin",email:"admin@sheriana.com"}}),A(),u("Admin paneline yönlendiriliyorsunuz"),M("admin");return}const n=i.split("@")[0].charAt(0).toUpperCase()+i.split("@")[0].slice(1);I("session",{isLoggedIn:!0,isAdmin:!1,user:{name:n,email:i,phone:"+31 6 1234 5678",address:"Keizersgracht 123",city:"Amsterdam",zip:"1015 CJ",country:"Hollanda"}}),A(),u(`Hoş geldiniz, ${n}!`),Ze()}function ts(){I("session",{isLoggedIn:!0,isAdmin:!1,user:{name:"Hilal Koncu",email:"hilal@gmail.com",phone:"+31 6 1234 5678",address:"Keizersgracht 123",city:"Amsterdam",zip:"1015 CJ",country:"Hollanda"}}),A(),u("Hoş geldiniz, Hilal!"),Ze()}function Ze(){if(R){const t=R;R=null,t==="checkout"?(Xe(),M("checkout")):M(t)}else M("home")}function ss(){I("session",null),A(),u("Çıkış yapıldı"),M("home")}function A(){const t=document.getElementById("menu-account");if(!t)return;const e=P();if(e&&e.isLoggedIn){const s=e.user,i=e.isAdmin?`<a href="#" class="menu-link" onclick="closeMenuAndGo('admin')">Yönetim Paneli <span class="admin-badge-text">ADMIN</span></a>`:"";t.innerHTML=`
      <h3 class="menu-section-title">Hesabım</h3>
      <div class="menu-user-info">
        <p class="menu-user-name">${s.name}</p>
        <p class="menu-user-email">${s.email}</p>
      </div>
      ${i}
      <a href="#" class="menu-link" onclick="closeMenuAndGo('orders')">Siparişlerim</a>
      <a href="#" class="menu-link" onclick="closeMenuAndGo('favorites')">Favorilerim</a>
      <a href="#" class="menu-link" onclick="event.preventDefault(); toggleMenu(); logout()">Çıkış Yap</a>
    `}else t.innerHTML=`
      <h3 class="menu-section-title">Hesap</h3>
      <a href="#" class="menu-link" onclick="closeMenuAndGo('login')">Giriş Yap</a>
    `}let ce=()=>{},et=()=>!1,tt=()=>{};function as(t){t.navigateTo&&(ce=t.navigateTo),t.isLoggedIn&&(et=t.isLoggedIn),t.setRedirectAfterLogin&&(tt=t.setRedirectAfterLogin)}function C(){return m("cart")||[]}function U(t){I("cart",t),de()}function is(t){var o,l;const e=S("products",t);if(!e)return;const s=[...C()],i=0,a=((o=e.colors[i])==null?void 0:o.name)||"",n="M",r=s.findIndex(c=>c.productId===t&&c.colorName===a&&c.size===n);r!==-1?s[r]={...s[r],qty:s[r].qty+1}:s.push({productId:t,name:e.name,price:e.price,colorName:a,size:n,qty:1,image:((l=e.colors[i])==null?void 0:l.images[0])||""}),U(s),u("Ürün sepete eklendi ",`<a href="#" onclick="event.preventDefault(); navigateTo('cart')">Sepete Git &rarr;</a>`)}function ns(t){const e=[...C()];e.splice(t,1),U(e),fe()}function rs(t,e){const s=[...C()];s[t]&&(s[t]={...s[t],qty:Math.max(1,s[t].qty+e)},U(s),fe())}function ge(){return C().reduce((t,e)=>t+e.price*e.qty,0)}function st(){return C().reduce((t,e)=>t+e.qty,0)}function de(){const t=st();document.querySelectorAll(".cart-badge").forEach(s=>{s.textContent=t,s.style.display=t>0?"flex":"none"})}function os(){U([])}function ls(){const t=document.getElementById("coupon-input");if(!t)return;const e=t.value.trim().toUpperCase();u(e==="HOSGELDIN15"||e==="SHERIANA10"?"Kupon kodu uygulandı!":"Geçersiz kupon kodu")}function cs(){if(!et()){tt("checkout"),u("Ödeme için giriş yapmalısınız"),ce("login");return}ce("checkout")}function fe(){const t=document.getElementById("cart-items"),e=document.getElementById("cart-summary"),s=document.getElementById("cart-empty"),i=C();if(!t)return;if(i.length===0){t.innerHTML="",e&&(e.style.display="none"),s&&(s.style.display="block");return}s&&(s.style.display="none"),e&&(e.style.display="block"),t.innerHTML=i.map((d,g)=>`
    <div class="cart-item">
      <img src="${d.image}" alt="${d.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h3 class="cart-item-name">${d.name}</h3>
        <p class="cart-item-variant">Renk: ${d.colorName} | Beden: ${d.size}</p>
        <p class="cart-item-price">&euro;${d.price.toFixed(2).replace(".",",")}</p>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeCartQty(${g}, -1)">&minus;</button>
          <span class="qty-value">${d.qty}</span>
          <button class="qty-btn" onclick="changeCartQty(${g}, 1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeCartItem(${g})">&times;</button>
    </div>
  `).join("");const a=ge(),n=m("settings")||{},r=n.freeShippingLimit||50,o=n.shippingCost||4.9,l=a>=r?0:o,c=r-a;e&&(e.innerHTML=`
      ${c>0?`<div class="free-shipping-bar">Ücretsiz kargo için &euro;${c.toFixed(2).replace(".",",")} daha ekleyin</div>`:'<div class="free-shipping-bar free">Ücretsiz kargo kazandınız!</div>'}
      <div class="coupon-section">
        <input type="text" id="coupon-input" class="form-input" placeholder="Kupon kodu">
        <button class="coupon-btn" onclick="applyCoupon()">Uygula</button>
      </div>
      <div class="cart-summary-rows">
        <div class="summary-row"><span>Ara Toplam</span><span>&euro;${a.toFixed(2).replace(".",",")}</span></div>
        <div class="summary-row"><span>Kargo</span><span>${l===0?"Ücretsiz":"€"+o.toFixed(2).replace(".",",")}</span></div>
        <div class="summary-row total"><span>Toplam</span><span>&euro;${(a+l).toFixed(2).replace(".",",")}</span></div>
      </div>
      <button class="checkout-btn" onclick="goToCheckout()">Ödemeye Geç</button>
    `)}let z="all",_=0,at=()=>0;function ds(t){t.getCurrentProductId&&(at=t.getCurrentProductId)}function T(t){const e=document.getElementById("product-grid");if(!e)return;let s=m("products")||[];const i=m("favorites")||[];if(z!=="all"&&(s=s.filter(a=>a.category===z)),t){const a=t.toLowerCase();s=s.filter(n=>n.name.toLowerCase().includes(a)||n.desc.toLowerCase().includes(a))}e.innerHTML=s.map(a=>{var o;const n=((o=a.colors[0])==null?void 0:o.images[0])||"",r=i.includes(a.id);return`
      <div class="product-card" onclick="navigateTo('product', ${a.id})">
        <div class="product-card-img-wrap">
          <img src="${n}" alt="${a.name}" class="product-card-img" loading="lazy">
          ${a.badge?`<span class="badge">${a.badge}</span>`:""}
          <button class="fav-btn ${r?"active":""}" onclick="event.stopPropagation(); toggleFav(${a.id})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${r?"var(--primary)":"none"}" stroke="${r?"var(--primary)":"#ccc"}" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
        <div class="product-card-info">
          <h3 class="product-card-name">${a.name}</h3>
          <div class="product-card-price">
            <span>&euro;${a.price.toFixed(2).replace(".",",")}</span>
            ${a.oldPrice?`<span class="old-price">&euro;${a.oldPrice.toFixed(2).replace(".",",")}</span>`:""}
          </div>
        </div>
      </div>
    `}).join("")}function x(){const t=document.getElementById("category-bar");if(!t)return;const e=m("categories")||[];t.innerHTML=`
    <button class="cat-chip ${z==="all"?"active":""}" onclick="filterByCategory('all', this)">Tümü</button>
    ${e.sort((s,i)=>s.order-i.order).map(s=>`
      <button class="cat-chip ${z===s.slug?"active":""}" onclick="filterByCategory('${s.slug}', this)">${s.name}</button>
    `).join("")}
  `}function it(t,e){z=t,x(),T()}function ms(t){const e=S("products",t);if(!e)return;_=0,e.colors[_],nt(e);const s="★".repeat(Math.round(e.reviews>0?4.5:0))+"☆".repeat(5-Math.round(e.reviews>0?4.5:0)),i=document.getElementById("product-info");i&&(i.innerHTML=`
      <div class="product-title-row">
        <h2 class="product-title">${e.name}</h2>
        <div class="product-rating">
          <span class="stars">${s}</span>
          <span class="rating-count">(${e.reviews} yorum)</span>
        </div>
      </div>
      <p class="product-price">
        &euro;${e.price.toFixed(2).replace(".",",")}
        ${e.oldPrice?`<span class="old-price">&euro;${e.oldPrice.toFixed(2).replace(".",",")}</span>`:""}
      </p>
    `);const a=document.getElementById("product-desc");a&&(a.textContent=e.desc);const n=document.getElementById("color-options");n&&(n.innerHTML=e.colors.map((p,w)=>`
      <button class="color-btn ${w===_?"active":""}" style="background:${p.hex}; border:2px solid ${w===_?"var(--secondary)":"transparent"}" onclick="selectColor(${w})" title="${p.name}">${p.name}</button>
    `).join(""));const r=document.getElementById("size-options");r&&(r.innerHTML=["S","M","L","XL"].map(p=>`
      <button class="size-btn ${p==="M"?"active":""}" onclick="selectSize(this)">${p}</button>
    `).join(""));const o=document.getElementById("product-material");o&&(o.textContent=e.material);const l=document.getElementById("product-delivery"),c=m("settings")||{};l&&(l.textContent=c.deliveryTime||"3-5 iş günü");const d=document.getElementById("reviews-preview");if(d){const w=(m("reviews")||[]).slice(0,2);d.innerHTML=`
      <h3 class="section-title">Yorumlar (${e.reviews})</h3>
      ${w.map(f=>`
        <div class="review-card">
          <div class="review-stars">${"★".repeat(f.stars)}${"☆".repeat(5-f.stars)}</div>
          <span class="review-date">${f.date}</span>
          <p class="review-author">${f.author}</p>
          <p class="review-text">${f.text}</p>
        </div>
      `).join("")}
      <button class="see-all-reviews-btn" onclick="showAllReviews()">Tüm Yorumları Gör</button>
    `}const g=document.getElementById("similar-products");if(g){const w=(m("products")||[]).filter(f=>f.category===e.category&&f.id!==e.id).slice(0,3);g.innerHTML=`
      <h3 class="section-title">Benzer Ürünler</h3>
      <div class="similar-grid">
        ${w.map(f=>{var q;return`
          <div class="similar-card" onclick="navigateTo('product', ${f.id})">
            <img src="${((q=f.colors[0])==null?void 0:q.images[0])||""}" alt="${f.name}" loading="lazy">
            <p class="similar-name">${f.name}</p>
            <p class="similar-price">&euro;${f.price.toFixed(2).replace(".",",")}</p>
          </div>
        `}).join("")}
      </div>
    `}}function us(t){const e=at(),s=S("products",e);s&&(_=t,document.querySelectorAll(".color-btn").forEach((i,a)=>{i.classList.toggle("active",a===t),i.style.borderColor=a===t?"var(--secondary)":"transparent"}),nt(s))}function ps(t){document.querySelectorAll(".size-btn").forEach(e=>e.classList.remove("active")),t.classList.add("active")}function nt(t){const e=t.colors[_];if(!e)return;const s=document.getElementById("gallery-track");s&&(s.innerHTML=e.images.map(i=>`
      <div class="gallery-slide">
        <img src="${i}" alt="${t.name}">
      </div>
    `).join("")),Qt(0),O()}let rt=()=>{};function hs(t){t.navigateTo&&(rt=t.navigateTo)}function ot(t){for(let e=1;e<=3;e++){const s=document.getElementById(`step-${e}`),i=document.getElementById(`checkout-step-${e}`);!s||!i||(s.classList.remove("active","done"),i.classList.remove("active"),e<t&&s.classList.add("done"),e===t&&(s.classList.add("active"),i.classList.add("active")))}document.querySelectorAll(".progress-line").forEach((e,s)=>{e.classList.toggle("filled",s<t-1)}),t===3&&ye(),window.scrollTo(0,0)}function gs(){ot(1),fs()}function fs(){const t=Je();if(!t)return;const e={"checkout-name":t.name,"checkout-email":t.email,"checkout-phone":t.phone,"checkout-address":t.address,"checkout-city":t.city,"checkout-zip":t.zip};Object.entries(e).forEach(([i,a])=>{const n=document.getElementById(i);n&&a&&(n.value=a)});const s=document.getElementById("checkout-country");if(s&&t.country){for(let i of s.options)if(i.text===t.country){s.value=i.value;break}}}function ys(t){document.querySelectorAll(".shipping-option").forEach(e=>e.classList.remove("selected")),t.classList.add("selected")}function ye(){const t=document.getElementById("checkout-summary");if(!t)return;const e=ge(),s=m("settings")||{},i=s.freeShippingLimit||50,a=s.shippingCost||4.9,n=e>=i?0:a,r=e+n;t.innerHTML=`
    <div class="summary-row"><span>Ürünler (${st()} adet)</span><span>&euro;${e.toFixed(2).replace(".",",")}</span></div>
    <div class="summary-row"><span>Kargo</span><span>${n===0?"Ücretsiz":"€"+a.toFixed(2).replace(".",",")}</span></div>
    <div class="summary-row total"><span>Toplam</span><span>&euro;${r.toFixed(2).replace(".",",")}</span></div>
  `;const o=document.getElementById("pay-btn");o&&(o.textContent=`Siparişi Tamamla — €${r.toFixed(2).replace(".",",")}`)}function vs(){const t=Je(),e=m("cart")||[],s=ge(),i=m("settings")||{},a=s>=(i.freeShippingLimit||50)?0:i.shippingCost||4.9,n="SHR-"+new Date().getFullYear()+"-"+String(Math.floor(Math.random()*9e3)+1e3),r=new Date,o=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],l=`${r.getDate()} ${o[r.getMonth()]} ${r.getFullYear()}`,c={orderId:n,customer:t?t.name:"Misafir",email:t?t.email:"",date:l,total:s+a,status:"new",items:e.map(g=>({productId:g.productId,name:g.name,qty:g.qty,price:g.price,colorName:g.colorName,size:g.size}))};me("orders",c);const d=document.getElementById("order-number");d&&(d.textContent="#"+n),os(),rt("success")}function bs(t){const e=m("blogPosts")||[],s=e.find(o=>o.id===t)||e[t];if(!s)return;const i=document.getElementById("blog-detail-img"),a=document.getElementById("blog-detail-date"),n=document.getElementById("blog-detail-title"),r=document.getElementById("blog-detail-content");i&&(i.src=s.image),a&&(a.textContent=s.date),n&&(n.textContent=s.title),r&&(r.innerHTML=s.content.map(o=>`<p>${o}</p>`).join(""))}function lt(){const t=document.getElementById("blog-cards");if(!t)return;const e=m("blogPosts")||[];t.innerHTML=e.map(s=>`
    <div class="blog-card" onclick="navigateTo('blog-detail', ${s.id})">
      <img src="${s.image}" alt="${s.title}" class="blog-card-img" loading="lazy">
      <div class="blog-card-info">
        <span class="blog-card-date">${s.date}</span>
        <h3 class="blog-card-title">${s.title}</h3>
        <p class="blog-card-summary">${s.summary}</p>
      </div>
    </div>
  `).join("")}function ws(){const t=Pe(),e=S("products",t);if(!e)return;const s=m("reviews")||[],i=e.reviews||s.length,a=[];for(let c=0;c<i;c++)a.push(s[c%s.length]);const n=a.length>0?(a.reduce((c,d)=>c+d.stars,0)/a.length).toFixed(1):"0.0",r=document.getElementById("reviews-summary"),o=document.getElementById("reviews-list"),l=document.getElementById("reviews-title");l&&(l.textContent=`Yorumlar — ${e.name}`),r&&(r.innerHTML=`
      <div class="reviews-avg-score">${n}</div>
      <div class="reviews-avg-stars">${"★".repeat(Math.round(parseFloat(n)))}${"☆".repeat(5-Math.round(parseFloat(n)))}</div>
      <div class="reviews-count">${i} yorum</div>
    `),o&&(o.innerHTML=a.map(c=>`
      <div class="review-card">
        <div class="review-stars">${"★".repeat(c.stars)}${"☆".repeat(5-c.stars)}</div>
        <span class="review-date">${c.date}</span>
        <p class="review-author">${c.author}</p>
        <p class="review-text">${c.text}</p>
      </div>
    `).join(""))}let b=null;function ct(){b||(b=document.getElementById("confirm-modal"),b||(b=document.createElement("div"),b.id="confirm-modal",b.className="modal-overlay",b.innerHTML=`
      <div class="modal-box">
        <h3 class="modal-title" id="modal-title"></h3>
        <p class="modal-message" id="modal-message"></p>
        <div class="modal-actions">
          <button class="modal-cancel-btn" id="modal-cancel">İptal</button>
          <button class="modal-confirm-btn" id="modal-confirm">Onayla</button>
        </div>
      </div>
    `,document.body.appendChild(b)))}function ve(t,e,s){ct();const i=document.getElementById("modal-title"),a=document.getElementById("modal-message"),n=document.getElementById("modal-confirm"),r=document.getElementById("modal-cancel");i&&(i.textContent=t),a&&(a.textContent=e),b.classList.add("visible");const o=n.cloneNode(!0),l=r.cloneNode(!0);n.parentNode.replaceChild(o,n),r.parentNode.replaceChild(l,r),o.addEventListener("click",()=>{j(),s&&s()}),l.addEventListener("click",()=>{j()}),b.addEventListener("click",c=>{c.target===b&&j()},{once:!0})}function dt(t,e){ct();const s=document.getElementById("modal-title"),i=document.getElementById("modal-message"),a=document.getElementById("modal-confirm"),n=document.getElementById("modal-cancel");s&&(s.textContent=t),i&&(i.textContent=e),n&&(n.style.display="none"),a&&(a.textContent="Tamam"),b.classList.add("visible");const r=a.cloneNode(!0);a.parentNode.replaceChild(r,a),r.addEventListener("click",()=>{j();const o=document.getElementById("modal-cancel");o&&(o.style.display="");const l=document.getElementById("modal-confirm");l&&(l.textContent="Onayla")})}function j(){b&&b.classList.remove("visible")}let mt=()=>{},Q="dashboard",ut={};function ks(t){t.navigateTo&&(mt=t.navigateTo)}function Ss(t){ut=t}const Es=[{key:"dashboard",icon:"&#128200;",label:"Dashboard"},{key:"products",icon:"&#128722;",label:"Ürünler"},{key:"categories",icon:"&#128193;",label:"Kategoriler"},{key:"orders",icon:"&#128230;",label:"Siparişler"},{key:"customers",icon:"&#128100;",label:"Müşteriler"},{key:"settings",icon:"&#9881;",label:"Ayarlar"}];function pt(){const t=document.getElementById("admin-nav");t&&(t.innerHTML=Es.map(e=>`
    <button class="admin-nav-item ${e.key===Q?"active":""}"
            onclick="switchAdminSection('${e.key}')">
      <span class="admin-nav-icon">${e.icon}</span>
      <span>${e.label}</span>
    </button>
  `).join(""))}function $s(t){Q=t,pt(),ht(),X()}function ht(){const t=ut[Q];t&&t()}function Is(){Q="dashboard",pt(),ht()}function gt(){X(),mt("home")}function _s(){const t=document.getElementById("admin-sidebar"),e=document.getElementById("admin-mobile-overlay");if(!t)return;t.classList.contains("open")?X():(t.classList.add("open"),e&&e.classList.add("visible"))}function X(){const t=document.getElementById("admin-sidebar"),e=document.getElementById("admin-mobile-overlay");t&&t.classList.remove("open"),e&&e.classList.remove("visible")}const Ms={new:"Yeni",shipped:"Kargoda",delivered:"Teslim",cancelled:"İptal"};function As(){const t=document.getElementById("admin-main");if(!t)return;const e=m("orders")||[],s=m("products")||[],i=m("customers")||[],a=m("categories")||[],n=e.reduce((l,c)=>l+(c.total||0),0),r=e.filter(l=>l.status==="new").length,o=[...e].sort((l,c)=>c.id-l.id).slice(0,5);t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Dashboard</h2>
        <p class="admin-subtitle">Mağaza genel bakış</p>
      </div>
    </div>

    <div class="admin-metrics">
      <div class="metric-card">
        <div class="metric-icon">&#128230;</div>
        <div>
          <div class="metric-value">${e.length}</div>
          <div class="metric-label">Toplam Sipariş</div>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">&euro;</div>
        <div>
          <div class="metric-value">&euro;${n.toFixed(0)}</div>
          <div class="metric-label">Toplam Gelir</div>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">&#128722;</div>
        <div>
          <div class="metric-value">${s.length}</div>
          <div class="metric-label">Ürün</div>
        </div>
      </div>
      <div class="metric-card">
        <div class="metric-icon">&#128100;</div>
        <div>
          <div class="metric-value">${i.length}</div>
          <div class="metric-label">Müşteri</div>
        </div>
      </div>
    </div>

    <div class="admin-card">
      <h3 class="admin-card-title">Son Siparişler</h3>
      ${o.length===0?'<p style="font-size:0.85rem;color:var(--gray-text)">Henüz sipariş yok.</p>':`
        <table class="admin-table">
          <thead>
            <tr>
              <th>Sipariş No</th>
              <th>Müşteri</th>
              <th>Tarih</th>
              <th>Tutar</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            ${o.map(l=>`
              <tr>
                <td style="font-weight:500">#${l.orderId||l.id}</td>
                <td>${l.customer}</td>
                <td>${l.date}</td>
                <td>&euro;${(l.total||0).toFixed(2).replace(".",",")}</td>
                <td><span class="admin-status ${l.status}">${Ms[l.status]||l.status}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <div class="admin-card">
        <h3 class="admin-card-title">Kategoriler</h3>
        ${a.map(l=>{const c=s.filter(d=>d.category===l.slug).length;return`<div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.85rem;border-bottom:1px solid var(--gray-light);">
            <span>${l.name}</span>
            <span style="color:var(--gray-text)">${c} ürün</span>
          </div>`}).join("")}
      </div>
      <div class="admin-card">
        <h3 class="admin-card-title">Hızlı Bilgi</h3>
        <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.85rem;border-bottom:1px solid var(--gray-light);">
          <span>Yeni Siparişler</span>
          <span style="font-weight:500;color:#1565C0">${r}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.85rem;border-bottom:1px solid var(--gray-light);">
          <span>Toplam Ürün</span>
          <span style="font-weight:500">${s.length}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;font-size:0.85rem;">
          <span>Toplam Kategori</span>
          <span style="font-weight:500">${a.length}</span>
        </div>
      </div>
    </div>
  `}let $=null;function W(){$=null;const t=document.getElementById("admin-main");if(!t)return;const e=m("products")||[],s=m("categories")||[],i={};s.forEach(a=>{i[a.slug]=a.name}),t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Ürünler</h2>
        <p class="admin-subtitle">${e.length} ürün listeleniyor</p>
      </div>
      <div class="admin-header-actions">
        <button class="admin-add-btn" onclick="adminNewProduct()">+ Yeni Ürün</button>
      </div>
    </div>

    <div class="admin-card">
      ${e.length===0?`
        <div class="admin-empty">
          <div class="admin-empty-icon">&#128722;</div>
          <p class="admin-empty-text">Henüz ürün eklenmemiş.</p>
        </div>
      `:`
        <table class="admin-table">
          <thead>
            <tr>
              <th>Görsel</th>
              <th>Ürün Adı</th>
              <th>Kategori</th>
              <th>Fiyat</th>
              <th>Stok</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(a=>{var n;return`
              <tr>
                <td><img src="${((n=a.colors[0])==null?void 0:n.images[0])||""}" class="admin-table-img" alt="${a.name}"></td>
                <td style="font-weight:500">${a.name}</td>
                <td>${i[a.category]||a.category}</td>
                <td>&euro;${a.price.toFixed(2).replace(".",",")}</td>
                <td>${a.stock||0}</td>
                <td>
                  <div class="admin-table-actions">
                    <button class="admin-btn-edit" onclick="adminEditProduct(${a.id})">Düzenle</button>
                    <button class="admin-btn-delete" onclick="adminDeleteProduct(${a.id})">Sil</button>
                  </div>
                </td>
              </tr>
            `}).join("")}
          </tbody>
        </table>
      `}
    </div>
  `}function ft(t){$=t||null;const e=document.getElementById("admin-main");if(!e)return;const s=m("categories")||[],i=t?S("products",t):null,a=!!i,n=a?"Ürünü Düzenle":"Yeni Ürün Ekle";e.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">${n}</h2>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-form">
        <div class="form-group">
          <label>Ürün Adı *</label>
          <input type="text" class="form-input" id="ap-name" value="${a?i.name:""}" placeholder="Ürün adını girin">
          <div class="form-error" id="ap-name-error"></div>
        </div>
        <div class="form-group">
          <label>Açıklama</label>
          <textarea class="form-input" id="ap-desc" rows="3" placeholder="Ürün açıklaması">${a?i.desc:""}</textarea>
        </div>
        <div class="form-row">
          <div class="form-group half">
            <label>Kategori *</label>
            <select class="form-input" id="ap-category">
              <option value="">Seçin</option>
              ${s.map(r=>`<option value="${r.slug}" ${a&&i.category===r.slug?"selected":""}>${r.name}</option>`).join("")}
            </select>
            <div class="form-error" id="ap-category-error"></div>
          </div>
          <div class="form-group half">
            <label>Malzeme</label>
            <input type="text" class="form-input" id="ap-material" value="${a&&i.material||""}" placeholder="%100 Pamuk">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group half">
            <label>Fiyat (&euro;) *</label>
            <input type="number" step="0.01" class="form-input" id="ap-price" value="${a?i.price:""}" placeholder="0.00">
            <div class="form-error" id="ap-price-error"></div>
          </div>
          <div class="form-group half">
            <label>Eski Fiyat (&euro;)</label>
            <input type="number" step="0.01" class="form-input" id="ap-oldprice" value="${a&&i.oldPrice?i.oldPrice:""}" placeholder="0.00">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group half">
            <label>Stok</label>
            <input type="number" class="form-input" id="ap-stock" value="${a?i.stock||0:50}" placeholder="0">
          </div>
          <div class="form-group half">
            <label>Badge</label>
            <input type="text" class="form-input" id="ap-badge" value="${a&&i.badge||""}" placeholder="Yeni, %20 vb.">
          </div>
        </div>
        <div class="form-group">
          <label>Görsel URL (virgülle ayrılmış)</label>
          <textarea class="form-input" id="ap-images" rows="2" placeholder="https://...">${a&&i.colors[0]?i.colors[0].images.join(`,
`):""}</textarea>
        </div>

        <div class="admin-form-actions">
          <button class="admin-save-btn" onclick="adminSaveProduct()">${a?"Güncelle":"Kaydet"}</button>
          <button class="admin-cancel-btn" onclick="adminCancelProductForm()">İptal</button>
        </div>
      </div>
    </div>
  `}function Ts(){var w,f,q,we,ke,Se,Ee,$e,Ie,_e;const t=(w=document.getElementById("ap-name"))==null?void 0:w.value.trim(),e=(f=document.getElementById("ap-desc"))==null?void 0:f.value.trim(),s=(q=document.getElementById("ap-category"))==null?void 0:q.value,i=(we=document.getElementById("ap-material"))==null?void 0:we.value.trim(),a=parseFloat((ke=document.getElementById("ap-price"))==null?void 0:ke.value),n=(Se=document.getElementById("ap-oldprice"))==null?void 0:Se.value,r=n?parseFloat(n):null,o=parseInt((Ee=document.getElementById("ap-stock"))==null?void 0:Ee.value)||0,l=($e=document.getElementById("ap-badge"))==null?void 0:$e.value.trim(),c=(Ie=document.getElementById("ap-images"))==null?void 0:Ie.value.trim();let d=!0;if(["ap-name-error","ap-category-error","ap-price-error"].forEach(y=>{const Me=document.getElementById(y);Me&&(Me.textContent="")}),!t){const y=document.getElementById("ap-name-error");y&&(y.textContent="Ürün adı zorunludur"),d=!1}if(!s){const y=document.getElementById("ap-category-error");y&&(y.textContent="Kategori seçimi zorunludur"),d=!1}if(!a||a<=0){const y=document.getElementById("ap-price-error");y&&(y.textContent="Geçerli bir fiyat girin"),d=!1}if(!d)return;const g=c?c.split(",").map(y=>y.trim()).filter(Boolean):["https://images.unsplash.com/photo-1600369672770-985fd30004eb?w=600&q=80"],p={name:t,desc:e,category:s,material:i,price:a,stock:o,badge:l||void 0,oldPrice:r||void 0,reviews:$&&((_e=S("products",$))==null?void 0:_e.reviews)||0,colors:[{name:"Doğal",hex:"#E8DDD0",images:g}]};if($){const y=S("products",$);y&&!c&&(p.colors=y.colors),ue("products",$,p),u("Ürün güncellendi")}else me("products",p),u("Yeni ürün eklendi");W()}function Cs(t){const e=S("products",t);e&&ve("Ürünü Sil",`"${e.name}" ürününü silmek istediğinize emin misiniz? Bu işlem geri alınamaz.`,()=>{De("products",t),u("Ürün silindi"),W()})}function qs(){W()}let D=null;function yt(t){return t.toLowerCase().replace(/[çÇ]/g,"c").replace(/[şŞ]/g,"s").replace(/[ğĞ]/g,"g").replace(/[üÜ]/g,"u").replace(/[öÖ]/g,"o").replace(/[ıİ]/g,"i").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}function J(){D=null;const t=document.getElementById("admin-main");if(!t)return;const e=m("categories")||[],s=m("products")||[];t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Kategoriler</h2>
        <p class="admin-subtitle">${e.length} kategori</p>
      </div>
      <div class="admin-header-actions">
        <button class="admin-add-btn" onclick="adminNewCategory()">+ Yeni Kategori</button>
      </div>
    </div>

    <div class="admin-card">
      ${e.length===0?`
        <div class="admin-empty">
          <div class="admin-empty-icon">&#128193;</div>
          <p class="admin-empty-text">Henüz kategori eklenmemiş.</p>
        </div>
      `:`
        <table class="admin-table">
          <thead>
            <tr>
              <th>Sıra</th>
              <th>Kategori Adı</th>
              <th>Slug</th>
              <th>Ürün Sayısı</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            ${e.sort((i,a)=>i.order-a.order).map(i=>{const a=s.filter(n=>n.category===i.slug).length;return`
                <tr>
                  <td>${i.order+1}</td>
                  <td style="font-weight:500">${i.name}</td>
                  <td style="color:var(--gray-text)">${i.slug}</td>
                  <td>${a}</td>
                  <td>
                    <div class="admin-table-actions">
                      <button class="admin-btn-edit" onclick="adminEditCategory(${i.id})">Düzenle</button>
                      <button class="admin-btn-delete" onclick="adminDeleteCategory(${i.id})">Sil</button>
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      `}
    </div>
  `}function vt(t){D=t||null;const e=document.getElementById("admin-main");if(!e)return;const s=t?S("categories",t):null,i=m("categories")||[],a=!!s,n=a?"Kategoriyi Düzenle":"Yeni Kategori Ekle";e.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">${n}</h2>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-form">
        <div class="form-group">
          <label>Kategori Adı *</label>
          <input type="text" class="form-input" id="ac-name" value="${a?s.name:""}" placeholder="Kategori adı" oninput="adminAutoSlug()">
          <div class="form-error" id="ac-name-error"></div>
        </div>
        <div class="form-group">
          <label>Slug (URL-dostu isim)</label>
          <input type="text" class="form-input" id="ac-slug" value="${a?s.slug:""}" placeholder="otomatik oluşturulur">
        </div>
        <div class="form-group">
          <label>Sıralama</label>
          <input type="number" class="form-input" id="ac-order" value="${a?s.order:i.length}" placeholder="0">
        </div>

        <div class="admin-form-actions">
          <button class="admin-save-btn" onclick="adminSaveCategory()">${a?"Güncelle":"Kaydet"}</button>
          <button class="admin-cancel-btn" onclick="adminCancelCategoryForm()">İptal</button>
        </div>
      </div>
    </div>
  `}function Bs(){const t=document.getElementById("ac-name"),e=document.getElementById("ac-slug");t&&e&&!D&&(e.value=yt(t.value))}function Ls(){var n,r,o;const t=(n=document.getElementById("ac-name"))==null?void 0:n.value.trim(),e=((r=document.getElementById("ac-slug"))==null?void 0:r.value.trim())||yt(t||""),s=parseInt((o=document.getElementById("ac-order"))==null?void 0:o.value)||0,i=document.getElementById("ac-name-error");if(i&&(i.textContent=""),!t){i&&(i.textContent="Kategori adı zorunludur");return}const a={name:t,slug:e,order:s};D?(ue("categories",D,a),u("Kategori güncellendi")):(me("categories",a),u("Yeni kategori eklendi")),J()}function xs(t){const e=S("categories",t);if(!e)return;const i=(m("products")||[]).filter(a=>a.category===e.slug).length;if(i>0){dt("Kategori Silinemez",`"${e.name}" kategorisinde ${i} ürün bulunuyor. Önce ürünleri başka bir kategoriye taşıyın.`);return}ve("Kategoriyi Sil",`"${e.name}" kategorisini silmek istediğinize emin misiniz?`,()=>{De("categories",t),u("Kategori silindi"),J()})}function zs(){J()}let N="all";const G={new:"Yeni",shipped:"Kargoda",delivered:"Teslim",cancelled:"İptal"};function be(){const t=document.getElementById("admin-main");if(!t)return;const e=m("orders")||[],i=[...N==="all"?e:e.filter(a=>a.status===N)].sort((a,n)=>n.id-a.id);t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Siparişler</h2>
        <p class="admin-subtitle">${e.length} toplam sipariş</p>
      </div>
    </div>

    <div class="admin-filters">
      ${["all","new","shipped","delivered"].map(a=>`
        <button class="admin-filter-chip ${N===a?"active":""}" onclick="adminFilterOrders('${a}')">
          ${a==="all"?"Tümü":G[a]}${a!=="all"?` (${e.filter(n=>n.status===a).length})`:""}
        </button>
      `).join("")}
    </div>

    <div class="admin-card">
      ${i.length===0?`
        <div class="admin-empty">
          <div class="admin-empty-icon">&#128230;</div>
          <p class="admin-empty-text">Bu filtreye uygun sipariş yok.</p>
        </div>
      `:`
        <table class="admin-table">
          <thead>
            <tr>
              <th>Sipariş No</th>
              <th>Müşteri</th>
              <th>Tarih</th>
              <th>Tutar</th>
              <th>Durum</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            ${i.map(a=>`
              <tr>
                <td style="font-weight:500">#${a.orderId||a.id}</td>
                <td>${a.customer}</td>
                <td>${a.date}</td>
                <td>&euro;${(a.total||0).toFixed(2).replace(".",",")}</td>
                <td><span class="admin-status ${a.status}">${G[a.status]||a.status}</span></td>
                <td>
                  <button class="admin-btn-edit" onclick="adminViewOrder(${a.id})">Detay</button>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `}
    </div>
  `}function Ds(t){N=t,be()}function Ps(t){const e=document.getElementById("admin-main");if(!e)return;const s=S("orders",t);s&&(e.innerHTML=`
    <div class="admin-order-detail-panel">
      <div class="admin-order-detail-header">
        <div>
          <h2 class="admin-page-title">Sipariş #${s.orderId||s.id}</h2>
          <p class="admin-subtitle">${s.date}</p>
        </div>
        <button class="admin-detail-back" onclick="adminBackToOrders()">&larr; Geri</button>
      </div>

      <div class="admin-order-info-grid">
        <div class="admin-info-block">
          <label>Müşteri</label>
          <span>${s.customer}</span>
        </div>
        <div class="admin-info-block">
          <label>E-posta</label>
          <span>${s.email||"-"}</span>
        </div>
        <div class="admin-info-block">
          <label>Toplam Tutar</label>
          <span>&euro;${(s.total||0).toFixed(2).replace(".",",")}</span>
        </div>
        <div class="admin-info-block">
          <label>Durum</label>
          <select class="admin-status-select" id="order-status-select" onchange="adminUpdateOrderStatus(${s.id})">
            ${Object.entries(G).map(([i,a])=>`<option value="${i}" ${s.status===i?"selected":""}>${a}</option>`).join("")}
          </select>
        </div>
      </div>

      ${s.items&&s.items.length>0?`
        <h3 style="font-size:0.9rem;font-weight:500;margin:16px 0 12px;padding-top:16px;border-top:1px solid var(--gray-light)">Sipariş Kalemleri</h3>
        <table class="admin-table">
          <thead>
            <tr>
              <th>Ürün</th>
              <th>Adet</th>
              <th>Fiyat</th>
              <th>Toplam</th>
            </tr>
          </thead>
          <tbody>
            ${s.items.map(i=>`
              <tr>
                <td>${i.name}</td>
                <td>${i.qty}</td>
                <td>&euro;${(i.price||0).toFixed(2).replace(".",",")}</td>
                <td>&euro;${((i.price||0)*i.qty).toFixed(2).replace(".",",")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `:'<p style="font-size:0.85rem;color:var(--gray-text);margin-top:16px;">Sipariş kalemi bilgisi mevcut değil.</p>'}
    </div>
  `)}function Hs(t){const e=document.getElementById("order-status-select");if(!e)return;const s=e.value;ue("orders",t,{status:s}),u(`Sipariş durumu "${G[s]}" olarak güncellendi`)}function Fs(){be()}function Os(){const t=document.getElementById("admin-main");if(!t)return;const e=m("customers")||[],s=[...e].sort((i,a)=>a.id-i.id);t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Müşteriler</h2>
        <p class="admin-subtitle">${e.length} kayıtlı müşteri</p>
      </div>
    </div>

    <div class="admin-card">
      ${s.length===0?`
        <div class="admin-empty">
          <div class="admin-empty-icon">&#128100;</div>
          <p class="admin-empty-text">Henüz müşteri kaydı yok.</p>
        </div>
      `:`
        <table class="admin-table">
          <thead>
            <tr>
              <th></th>
              <th>Müşteri</th>
              <th>E-posta</th>
              <th>Sipariş</th>
              <th>Toplam Harcama</th>
              <th>Kayıt Tarihi</th>
            </tr>
          </thead>
          <tbody>
            ${s.map(i=>`
                <tr>
                  <td><div class="admin-customer-avatar">${i.name.split(" ").map(n=>n[0]).join("")}</div></td>
                  <td style="font-weight:500">${i.name}</td>
                  <td style="color:var(--gray-text)">${i.email}</td>
                  <td>${i.orders} sipariş</td>
                  <td>&euro;${(i.totalSpent||0).toFixed(2).replace(".",",")}</td>
                  <td>${i.date||"-"}</td>
                </tr>
              `).join("")}
          </tbody>
        </table>
      `}
    </div>
  `}function Rs(){var o,l;const e=(m("settings")||{}).shopify||{},s=e.enabled||!1,i=pe(),a=((o=i==null?void 0:i.getSyncStatus)==null?void 0:o.call(i))||null,n=((l=i==null?void 0:i.getLastSyncTime)==null?void 0:l.call(i))||null,r=n?n.toLocaleDateString("tr-TR")+" "+n.toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"}):"Henüz senkron yapılmadı";return`
    <div class="admin-settings-section shopify-settings-section">
      <h3>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 6px;">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
        Shopify Entegrasyonu
      </h3>

      <div class="admin-toggle-row">
        <span>Shopify entegrasyonunu aktif et</span>
        <div class="admin-toggle ${s?"active":""}" id="as-shopify-enabled" onclick="toggleAdminToggle(this)"></div>
      </div>

      <div id="shopify-config-area" style="${s?"":"opacity: 0.5; pointer-events: none;"}">
        <div class="form-group">
          <label>Mağaza Domain</label>
          <input type="text" class="form-input" id="as-shopify-domain"
            value="${e.storeDomain||""}"
            placeholder="my-store.myshopify.com">
          <small class="form-hint">Shopify mağazanızın domain adresi</small>
        </div>

        <div class="form-group">
          <label>Proxy URL</label>
          <input type="text" class="form-input" id="as-shopify-proxy"
            value="${e.proxyUrl||"/api/shopify"}"
            placeholder="/api/shopify">
          <small class="form-hint">Serverless proxy endpoint (varsayılan: /api/shopify)</small>
        </div>

        <div class="admin-toggle-row">
          <span>Günlük otomatik senkronizasyon</span>
          <div class="admin-toggle ${e.autoSync!==!1?"active":""}" id="as-shopify-autosync" onclick="toggleAdminToggle(this)"></div>
        </div>

        <div class="shopify-status-panel">
          <div class="shopify-status-row">
            <span>Durum</span>
            <span class="shopify-status-value">
              ${s?`<span class="shopify-status-dot ${a!=null&&a.isOnline?"online":"offline"}"></span>
                   ${a!=null&&a.isOnline?"Çevrimiçi":"Çevrimdışı"}`:'<span class="shopify-status-dot offline"></span> Devre dışı'}
            </span>
          </div>
          <div class="shopify-status-row">
            <span>Son Senkronizasyon</span>
            <span class="shopify-status-value">${r}</span>
          </div>
          ${a?`
            <div class="shopify-status-row">
              <span>Kuyrukta bekleyen</span>
              <span class="shopify-status-value">${a.queuedOperations} işlem</span>
            </div>
          `:""}
        </div>

        <div class="shopify-actions">
          <button class="admin-btn-secondary" onclick="adminTestShopifyConnection()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Bağlantı Test Et
          </button>
          <button class="admin-btn-secondary" onclick="adminTriggerSync()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 10"/>
              <polyline points="1 20 1 14 7 14"/>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            Manuel Senkronize Et
          </button>
        </div>
      </div>
    </div>
  `}function js(){var t,e,s,i;return{enabled:((t=document.getElementById("as-shopify-enabled"))==null?void 0:t.classList.contains("active"))??!1,storeDomain:((e=document.getElementById("as-shopify-domain"))==null?void 0:e.value.trim())||"",proxyUrl:((s=document.getElementById("as-shopify-proxy"))==null?void 0:s.value.trim())||"/api/shopify",autoSync:((i=document.getElementById("as-shopify-autosync"))==null?void 0:i.classList.contains("active"))??!0}}function Ns(){const t=document.getElementById("as-shopify-enabled"),e=document.getElementById("shopify-config-area");if(!t||!e)return;new MutationObserver(()=>{const i=t.classList.contains("active");e.style.opacity=i?"1":"0.5",e.style.pointerEvents=i?"auto":"none"}).observe(t,{attributes:!0,attributeFilter:["class"]})}function Ks(){var s,i,a;const t=document.getElementById("admin-main");if(!t)return;const e=m("settings")||{};t.innerHTML=`
    <div class="admin-main-header">
      <div>
        <h2 class="admin-page-title">Ayarlar</h2>
        <p class="admin-subtitle">Mağaza yapılandırması</p>
      </div>
    </div>

    <div class="admin-card">
      <div class="admin-form">
        <div class="admin-settings-section">
          <h3>Mağaza Bilgileri</h3>
          <div class="form-group">
            <label>Mağaza Adı</label>
            <input type="text" class="form-input" id="as-storename" value="${e.storeName||"SHERIANA"}">
          </div>
          <div class="form-group">
            <label>İletişim E-posta</label>
            <input type="email" class="form-input" id="as-email" value="${e.email||""}">
          </div>
          <div class="form-group">
            <label>Telefon</label>
            <input type="tel" class="form-input" id="as-phone" value="${e.phone||""}">
          </div>
        </div>

        <div class="admin-settings-section">
          <h3>Kargo Ayarları</h3>
          <div class="form-row">
            <div class="form-group half">
              <label>Ücretsiz Kargo Limiti (&euro;)</label>
              <input type="number" step="0.01" class="form-input" id="as-freelimit" value="${e.freeShippingLimit||50}">
            </div>
            <div class="form-group half">
              <label>Standart Kargo Ücreti (&euro;)</label>
              <input type="number" step="0.01" class="form-input" id="as-shipcost" value="${e.shippingCost||4.9}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label>Standart Teslimat Süresi</label>
              <input type="text" class="form-input" id="as-deliverytime" value="${e.deliveryTime||"3-5 iş günü"}">
            </div>
            <div class="form-group half">
              <label>Hızlı Kargo Ücreti (&euro;)</label>
              <input type="number" step="0.01" class="form-input" id="as-fastcost" value="${e.fastDeliveryCost||9.9}">
            </div>
          </div>
        </div>

        <div class="admin-settings-section">
          <h3>Bildirimler</h3>
          <div class="admin-toggle-row">
            <span>Yeni sipariş bildirimi</span>
            <div class="admin-toggle ${((s=e.notifications)==null?void 0:s.newOrder)!==!1?"active":""}" id="as-notify-order" onclick="toggleAdminToggle(this)"></div>
          </div>
          <div class="admin-toggle-row">
            <span>Stok uyarıları</span>
            <div class="admin-toggle ${((i=e.notifications)==null?void 0:i.stockAlert)!==!1?"active":""}" id="as-notify-stock" onclick="toggleAdminToggle(this)"></div>
          </div>
          <div class="admin-toggle-row">
            <span>Pazarlama e-postaları</span>
            <div class="admin-toggle ${(a=e.notifications)!=null&&a.marketing?"active":""}" id="as-notify-marketing" onclick="toggleAdminToggle(this)"></div>
          </div>
        </div>

        ${Rs()}

        <div class="admin-form-actions">
          <button class="admin-save-btn" onclick="adminSaveSettings()">Ayarları Kaydet</button>
        </div>
      </div>
    </div>
  `,setTimeout(()=>Ns(),0)}function Gs(){var e,s,i,a,n,r,o,l,c,d;const t={storeName:((e=document.getElementById("as-storename"))==null?void 0:e.value.trim())||"SHERIANA",email:((s=document.getElementById("as-email"))==null?void 0:s.value.trim())||"",phone:((i=document.getElementById("as-phone"))==null?void 0:i.value.trim())||"",freeShippingLimit:parseFloat((a=document.getElementById("as-freelimit"))==null?void 0:a.value)||50,shippingCost:parseFloat((n=document.getElementById("as-shipcost"))==null?void 0:n.value)||4.9,deliveryTime:((r=document.getElementById("as-deliverytime"))==null?void 0:r.value.trim())||"3-5 iş günü",fastDeliveryCost:parseFloat((o=document.getElementById("as-fastcost"))==null?void 0:o.value)||9.9,fastDeliveryTime:"1-2 iş günü",notifications:{newOrder:((l=document.getElementById("as-notify-order"))==null?void 0:l.classList.contains("active"))??!0,stockAlert:((c=document.getElementById("as-notify-stock"))==null?void 0:c.classList.contains("active"))??!0,marketing:((d=document.getElementById("as-notify-marketing"))==null?void 0:d.classList.contains("active"))??!1},shopify:js()};I("settings",t),u("Ayarlar kaydedildi")}function Ys(t){t.classList.toggle("active")}Tt(Dt);function Us(){const t=document.getElementById("favorites-content");if(!t)return;const e=m("favorites")||[],i=(m("products")||[]).filter(a=>e.includes(a.id));if(i.length===0){t.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">&#10084;</div>
        <p>Henüz favoriniz yok.</p>
        <button class="btn-outline" onclick="navigateTo('home')">Alışverişe Başla</button>
      </div>
    `;return}t.innerHTML=`
    <div class="product-grid">
      ${i.map(a=>{var r;const n=((r=a.colors[0])==null?void 0:r.images[0])||"";return`
          <div class="product-card" onclick="navigateTo('product', ${a.id})">
            <div class="product-card-img-wrap">
              <img src="${n}" alt="${a.name}" class="product-card-img" loading="lazy">
              ${a.badge?`<span class="badge">${a.badge}</span>`:""}
              <button class="fav-btn active" onclick="event.stopPropagation(); toggleFav(${a.id})">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--primary)" stroke="var(--primary)" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
            </div>
            <div class="product-card-info">
              <h3 class="product-card-name">${a.name}</h3>
              <div class="product-card-price">
                <span>&euro;${a.price.toFixed(2).replace(".",",")}</span>
                ${a.oldPrice?`<span class="old-price">&euro;${a.oldPrice.toFixed(2).replace(".",",")}</span>`:""}
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
  `}function Qs(){const t=document.getElementById("orders-content");if(!t)return;const e=m("session");if(!e||!e.isLoggedIn)return;const i=(m("orders")||[]).filter(n=>n.email===e.user.email||n.customer===e.user.name).sort((n,r)=>r.id-n.id),a={new:"Yeni",shipped:"Kargoda",delivered:"Teslim",cancelled:"İptal"};if(i.length===0){t.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">&#128230;</div>
        <p>Henüz siparişiniz yok.</p>
        <button class="btn-outline" onclick="navigateTo('home')">Alışverişe Başla</button>
      </div>
    `;return}t.innerHTML=i.map(n=>`
    <div class="order-card">
      <div class="order-card-header">
        <div>
          <span class="order-card-number">#${n.orderId||n.id}</span>
          <span class="order-card-date">${n.date}</span>
        </div>
        <span class="admin-status ${n.status}">${a[n.status]||n.status}</span>
      </div>
      ${n.items?`
        <div class="order-card-items">
          ${n.items.map(r=>`
            <div class="order-card-item">
              <span>${r.name} x ${r.qty}</span>
              <span>&euro;${((r.price||0)*r.qty).toFixed(2).replace(".",",")}</span>
            </div>
          `).join("")}
        </div>
      `:""}
      <div class="order-card-footer">
        <span>Toplam</span>
        <strong>&euro;${(n.total||0).toFixed(2).replace(".",",")}</strong>
      </div>
    </div>
  `).join("")}Pt({updateProductDetail:ms,renderCart:fe,resetCheckout:gs,renderCheckoutSummary:ye,isLoggedIn:We,isAdmin:Vt,setRedirectAfterLogin:Ve,showAllReviews:ws,openBlogPost:bs,initAdmin:Is,exitAdmin:gt,renderFavorites:Us,renderUserOrders:Qs,renderBlogCards:lt});Jt({navigateTo:v,renderCheckoutSummary:ye});as({navigateTo:v,isLoggedIn:We,setRedirectAfterLogin:Ve});ds({getCurrentProductId:Pe});hs({navigateTo:v});ks({navigateTo:v});Ss({dashboard:As,products:W,categories:J,orders:be,customers:Os,settings:Ks});Nt(()=>({navigateTo:v}));Kt(()=>({renderProducts:T,filterByCategory:it}));window.navigateTo=v;window.goBack=Ht;window.goHome=Ft;window.loginWithEmail=es;window.loginWithGoogle=ts;window.logout=ss;window.addToCart=is;window.removeCartItem=ns;window.changeCartQty=rs;window.goToCheckout=cs;window.applyCoupon=ls;window.renderProducts=T;window.filterByCategory=it;window.selectColor=us;window.selectSize=ps;window.nextStep=ot;window.completePurchase=vs;window.selectShipping=ys;window.showToast=u;window.toggleMenu=Ot;window.closeMenuAndGo=Rt;window.closeMenuAndFilter=jt;window.toggleSearch=Gt;window.filterProducts=Yt;window.toggleFav=Wt;window.openBlogPost=t=>v("blog-detail",t);window.showAllReviews=()=>v("reviews");window.exitAdmin=gt;window.switchAdminSection=$s;window.toggleAdminSidebar=_s;window.closeMobileSidebar=X;window.adminNewProduct=()=>ft();window.adminEditProduct=t=>ft(t);window.adminDeleteProduct=Cs;window.adminSaveProduct=Ts;window.adminCancelProductForm=qs;window.adminNewCategory=()=>vt();window.adminEditCategory=t=>vt(t);window.adminDeleteCategory=xs;window.adminSaveCategory=Ls;window.adminCancelCategoryForm=zs;window.adminAutoSlug=Bs;window.adminFilterOrders=Ds;window.adminViewOrder=Ps;window.adminUpdateOrderStatus=Hs;window.adminBackToOrders=Fs;window.adminSaveSettings=Gs;window.toggleAdminToggle=Ys;window.showConfirm=ve;window.showAlert=dt;window.adminTestShopifyConnection=async()=>{const t=pe();if(t&&t.testConnection){u("Bağlantı test ediliyor...");const e=await t.testConnection();e.success?u("Shopify bağlantısı başarılı!"):u("Bağlantı başarısız: "+(e.error||"Bilinmeyen hata"))}else u("Shopify entegrasyonu aktif değil")};window.adminTriggerSync=async()=>{const t=pe();if(t&&t.performSync){u("Senkronizasyon başlatıldı...");const e=await t.performSync();e.success?(u("Senkronizasyon tamamlandı!"),x(),T(),le()):u("Sync hatası: "+(e.error||e.reason||""))}else u("Shopify entegrasyonu aktif değil")};document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem("sheriana_settings")||"{}").shopify||null;Ct(e?{shopify:e}:void 0),setTimeout(()=>{v("home",void 0,!0)},2500),x(),T(),le(),lt(),A(),de(),Zt(),Ut(),Xt(),V("products",()=>{x(),T()}),V("categories",()=>{x(),le()}),V("favorites",()=>{de()}),document.addEventListener("click",s=>{const i=document.getElementById("menu-overlay");i&&i.classList.contains("open")&&s.target===i&&i.classList.remove("open")})});
