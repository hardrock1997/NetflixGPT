export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
export const HERO = 'https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg'
export const USERICON = 'https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229'

export const EMAILREGX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
export const PASSWORDREGX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTRiMDM2YWI1NmNiYjBiNDQyZmZmNDVhNjg3ZWM2OCIsInN1YiI6IjY1MTAyZWQ0M2E0YTEyMDBhZDk5ZTA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dN9tJpIZYnY3siO9GKFIuhPINA1JEEt3BOQKKWH3tmU'
    }
  }

export const IMG_CDN_URL='https://image.tmdb.org/t/p/w500/'


export const NOWPLAYINGMOVIESAPI='https://api.themoviedb.org/3/movie/now_playing?page=1'
export const POPULARMOVIESAPI='https://api.themoviedb.org/3/movie/popular?page=1'
export const TOPRATEDMOVIESAPI='https://api.themoviedb.org/3/movie/top_rated?page=1'
export const UPCOMINGMOVIESAPI='https://api.themoviedb.org/3/movie/upcoming?page=1'

export const SUPPORTED_LANGUAGES = [
  {identifier:'en',name:'English'},
  {identifier:'hindi',name:'Hindi'},
  {identifier:'spanish',name:'Spanish'}
]