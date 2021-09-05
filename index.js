import NewsApiService from './news-service'
const refs = {
    searchForm: document.querySelector('#search-form'),
    images: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load_more"]')
}

const newsApiService = new NewsApiService()


refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadMoreBtn.addEventListener('click', onloadMore);

let searchQuery = '';

function onSearchForm(e){
e.preventDefault(); 
searchQuery = e.currentTarget.elements.query.value;
newsApiService.fetchArticles(searchQuery)
}

function onloadMore(){
    newsApiService.fetchArticles(searchQuery)
}


