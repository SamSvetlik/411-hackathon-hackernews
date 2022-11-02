import React from 'react'

function ListComponent(props){

    
    return (
        props.searchResults.map((result) => {
            return(
                <li key={result.objectID} style={{backgroundColor: 'rebeccapurple'}}>
                    <span>
                        {result.title}
                        <a href={result.title}>{result.url}</a>
                    </span>
                    <h2>
                        {result.points} | {result.author} | {result.created_at} | {result.num_comments} comments
                    </h2>
                </li>
            )

        })
    )
}

export default ListComponent