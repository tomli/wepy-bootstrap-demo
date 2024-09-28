
const _ = require('./underscore.wx');

function transResult (mv) {
  const { film, director, dbid, doubanInfo } = mv
  let item = { text: '《' + film + '》 \n 导演：' + director, value: { film, director, dbid, image: doubanInfo.images } }
  return item
}

export function searchFilm(value, selectableFilms) {
  console.log('searchFilm', value)
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let result = [];

      if(value && value.length>0){
        const rege = new RegExp(value)
        _.each(selectableFilms, (mv) => {
          if (rege.test(mv.film)){
            let item = transResult(mv)
            result.push(item)
          }
        })
      }
      resolve(result)
    }, 200)
  })
}
