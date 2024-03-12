
/*
let girilenSayi = parseInt (prompt("Lütfen birden 100e kadar sayı giriniz.", "20"))
let ondalikSayi= Math.random()
let üretilenSayi= Math.floor(ondalikSayi * 100)
console.log("Girdiğiniz sayı:"+ girilenSayi +  " : Üretilen Sayı: "+ üretilenSayi)

let toplam1 = aralıklarıTopla(20,30) 
let toplam2 = aralıklarıTopla(20,40)

console.log( "Toplam1 : " + toplam1 + " toplam2 : " + toplam2);

function aralıklarıTopla(baslangıc,bitis) {
let toplam = 0;

for(i= baslangıc; i< bitis; i++)
toplam= (toplam + i)
console.log("Girdiğiniz aralık sayıların toplamı" + toplam);    
return toplam;

}
let karesiniAl = function(sayi)
{
return sayi*sayi
}
console.log(karesiniAl(28))

let satılarıTopla = (s1,s2) => (s1+s2)
console.log(satılarıTopla(10,20));




    let sayi1 = 20 ;
    let sayi2 = 40  ;
    let toplam2 = sayi1 + sayi2
    console.log("selam :" + toplam2)

        
    
    let toplam =0
        for (i = 0; i < 10; i++) {
            toplam = toplam + i
            console.log(toplam)
        }
        console.log("verinin toplamı : " + toplam)

let sayılar = [1, 2, 3, 4]
diziYazdir (sayılar ,  function (değer , index){

console.log ("değer : "+ değer + "index :" + index );
})
function diziYazdir (dizi ,callback) {
    for ( let i = 0; i < dizi; i++);
    callback(dizi[i],i)

}
const sayilar = [1,2,3,4,5,6 ]
const yenisayilar = sayilar.map(function(sayi2){
    return sayi2 * 2
})

console.log(sayilar)
console.log(yenisayilar)
console.log(sayilar)
const kitaplar = [ 
    { adi: "1" , sayfaSayisi : 30},
    { adi: "2" , sayfaSayisi : 40},
    { adi: "3" , sayfaSayisi : 50},
]
const sayfaSayilar = kitaplar.map ( function(kitap) { 
 return kitap , sayfaSayisi
} 
)
console.log(sayfaSayilar)
const kişiler = [
    {ad: "yunus ", soyad: " emre"},
    {ad: "ferhat ", soyad: " sezgin"},
    {ad: "enes ", soyad: " demirci"},
    
]
const yeniİsim = kişiler.map(kişiler => kişi.ad + "" + kişi.soyad)
console.log(yeniİsim)

const sayilar = [1,2,3,4,5,6 ]
function sayilar2(dizi){
const yeniDizi = [];
return dizi 
}
const yeniSayi = sayilar2(sayilar)
console.log(yeniSayi)
const myDizi = document.querySelector('table.tablo')
console.log(myDizi);

myDizi.style.backgroundColor = "red"
myDizi.style.margin = "20px"
myDizi.style.padding = "20px"
const baslik = document.getElementById('baslık')
console.log(baslık);
baslık.style.backgroundColor = 'black'
*/
const yeniEleman = document.createElement('li')
yeniEleman.textContent = 'İstanbul'
yeniEleman.className = 'deneme'
yeniEleman.id = 'yunus'
yeniEleman.style.color = 'yellow'
document.querySelector('ul').appendChild (yeniEleman)


console.log(yeniEleman);
const logo = document.getElementById('logo')
logo.style.color = 'black'
logo.style.backgroundColor = 'white'
logo.style.justifyContent = 'center'
logo.style.alignItems = 'center'
console.log(logo);