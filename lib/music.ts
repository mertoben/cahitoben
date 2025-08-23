export type Track = { id:string; title:string; duration?:string; spotify?:string; youtube?:string }
export type Album = {
  id:string; title:string; year?:number; cover?:string;
  tracks: Track[];
  external?: { spotify?:string; apple?:string; discogs?:string; youtube?:string }
}
export const ALBUMS: Album[] = [{
  id:'arsiv-vol1', title:'Arşiv Kayıtları, Cilt 1', year:1970, cover:'/images/covers/arsiv-vol1.jpg',
  tracks:[
    { id:'t1', title:'Makaram Sarı Bağlar', duration:'PT2M50S' },
    { id:'t2', title:'Silifke’nin Yoğurdu', duration:'PT2M35S' },
    { id:'t3', title:'Her Gün Kavga', duration:'PT2M45S' },
  ],
  external:{ spotify:'https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH', apple:'https://music.apple.com/tr/artist/cahit-oben/95145871', discogs:'https://www.discogs.com/artist/7381103-Cahit-Oben-D%C3%B6rtl%C3%BCs%C3%BC', youtube:'https://www.youtube.com/results?search_query=cahit+oben' }
}]
