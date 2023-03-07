import react from 'react';
import { Article } from './Article'

export const NewsList = (props) => {
    return (
        <section>
            {props.articlesList.articles.map((singleArticle) => {
                return (
                <Article key={singleArticle.id} articleDetails={singleArticle}/>
                )
            }
            )}
        </section>
    );
};