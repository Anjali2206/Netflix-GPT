export const NETFLIX_BG='https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg'
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmY4ZDk3YjFkMGI1YWRmYmZhZGZmYTI4NDU5ZDE5MiIsInN1YiI6IjY2NWVlMmRkMDEzMzk4YzE2ODY1ODE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pjsn0wFTrzxQDY4gszhT-o0CRE2dm3S-z6pOI1OiwE0'
    }
  };
  
  export const CDN_URL='https://image.tmdb.org/t/p/w400'

  export const SUPPORTED_LANG=[
    {identifier:'en', name:"English"},
    {identifier:'hindi', name:"Hindi"},
    {identifier:'marathi', name:"Marathi"},
    {identifier:'spanish', name:"Spanish"},
    {identifier:'tamil', name:"Tamil"},
    {identifier:'arabic', name:"Arabic"},
    {identifier:'chinese', name:"Chinese"},
  ]

  export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY ? process.env.REACT_APP_OPENAI_KEY : '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'