import react from 'react';
import { NewsList } from './NewsList';

export const Article = (props) => {
    return(
        <article className="article">
            <h2>{props.articleDetails.title}</h2>
            <p>{props.articleDetails.description}</p>
            <p>{new Date(props.articleDetails.date).toLocaleDateString('en-UK', {
			    weekday: 'long',
			    month: 'long',
		        })}
            </p>
            <img src={props.articleDetails.image} alt="Lorem picsum"/>
            <div className="tag-container">
                {props.articleDetails.tags.map((singleTag) => {
                    return (
                        <span key={singleTag} className="tag">
                            {singleTag}
                        </span>
                    )
                })}
            </div>
        </article>
    );
}