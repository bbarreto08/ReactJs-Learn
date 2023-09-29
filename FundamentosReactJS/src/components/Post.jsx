import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';


import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({author, publishedAt, content}){

    // const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
    //     day: "2-digit",
    //     month: "long",
    //     hour: "2-digit",
    //     minute: "2-digit"
    // }).format(publishedAt);

    const [comments, setComments] = useState([1,2])

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{locale: ptBr});
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBr, addSuffix: true} );

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, comments.length + 1]);
    }

    return(
        <article className={styles.post}>

            <header>
                <div className={styles.author}>
                    <Avatar 
                        src={author.avatarUrl}                        
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateRelativeToNow} dateTime={publishedAt.toISOString()}>
                    {publishedDateFormated}                
                </time>

            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if(line.type === "paragraph"){
                            return <p>{line.content}</p>
                        }else if(line.type === "link"){
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea placeholder="Deixe seu comentário" />

                <footer className={styles.footer}>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment />
                    })
                }
            </div>


        </article>
    )
}