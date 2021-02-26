import WordCard  from '../cards/WordCard'

function LearnLanguage(props) {

   
    return( 
 

    props.words.map((word) => { 
    return <WordCard word={word}
    />
    
    
})
)
}
    

export default LearnLanguage



    