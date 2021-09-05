export default class NewsApiService {
    constructor(){}
    fetchArticles(){
        const options = {
            headers:{
                Authorization:'23210508-f6b5f09e6f5a868a1633393ca'
            }
        }
         const url = 'https://pixabay.com/api/?&image_type=photo&orientation=horizontal'
        
         fetch(url, options)
         .then(r=>r.json())
         .then(console.log) 
    }
}