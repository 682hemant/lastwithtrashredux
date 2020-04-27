import  {ARTICLE_CREATE ,SHOW_AREA,REMOVE_ARTICLE,ARTICLE_LOAD ,ARTICLE_UPDATE,ARTICLE_FAVOURITE} from '../actions/actionTypes'
import { updateObject } from './Utility'

const initialState={
    articles: [
        {
          id: 'abcd',
          title: 'click on + button to add article',
          description: 'Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.',
          category: 'Default',
          favourite:false
         
        },
        {
          id: 'jklmn',
          title: 'welcome to our Articles',
          description: 'Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.',
          category: 'Edited',
          favourite:true
         
        }
      ],
      showArticle: {
        id: undefined,
        article: ''
      },
      article:{
          id: '',
      title: '',
      description: '',
      category: '',
    },
      editing:{
          id:false
      },
      Trash:[],
      
      
}

const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
      case ARTICLE_CREATE:
        return {
          ...state,
          articles: [
            ...state.articles,
            {
              id: action.id,
              title: action.payload.article.title,
              category: action.payload.article.category
                .trim()
                .toLowerCase()
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" "),          
              description: action.payload.article.description,
              favourite:false
              
            }
          ],
         editing:{id:false},
         article:{
            id: '',
        title: '',
        description: '',
        category: '',
      },
      
         
        }
        case SHOW_AREA:
      for (let article of state.articles) {
        if (action.showAreaId === article.id) {
            
        
          return {
            ...state,
            showArticle: {
              id: article.id,
              article: article.description
            }
          }
        }
      }
      case REMOVE_ARTICLE: {
        const showArticle = state.showArticle.id === action.articleId 
          ? {
            id: undefined,
            article: ''
          }
          : state.showArticle

        return updateObject(state, {
          articles: state.articles.filter(article => article.id !== action.articleId),
          showArticle,
          Trash:[
            ...state.Trash,
            state.articles.find(article => article.id === action.articleId)
          ]
        })
      }
      case ARTICLE_UPDATE: 
        
      return {
        ...state,
        articles: state.articles.map(article => {
            // debugger    
          return article.id !== action.payload.article.id
            ? article
            : {
              ...article,
              title: action.payload.article.title,
              description: action.payload.article.description,
              category: action.payload.article.category
            }
        }),
        editing: { id: false },
        article:{
            id: '',
        title: '',
        description: '',
        category: '',
      }
      }
      case ARTICLE_LOAD:

        return {
          ...state,
          article: state.articles.find(article => {
            
            return article.id === action.payload.articleId
          })
        }
        case ARTICLE_FAVOURITE:
          return{
            ...state,
            articles:state.articles.map(article=>{
             
              return article.id!==action.payload.articleId
              ? article
              :{
                ...article,
                favourite:!article.favourite
              }
            }
              )
          }
    }
        

    return state;
}

export default ArticleReducer;