import { ARTICLE_CREATE ,SHOW_AREA,REMOVE_ARTICLE,ARTICLE_UPDATE} from './actionTypes'

export const articleCreate = article => ({
    type:ARTICLE_CREATE,
    id: Math.random(),
    payload: article
  })

  export const showArea=(valueId)=>{
    return{
        type:SHOW_AREA,
        showAreaId:valueId
    }
}

export const deleteArticle =(valueId)=>{
    return{
        type:REMOVE_ARTICLE,
         articleId:valueId

    }
}

export const articleUpdate = article => ({
    type: ARTICLE_UPDATE,
    payload: {article}
  })
  