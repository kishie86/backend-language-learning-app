import SpanishLanguageCard  from '../cards/SpanishLanguageCard'
import SearchBar from '../cards/SearchBar'

function PickLanguage(props) {
    return( 

    <div className ="pick-lang-options">
 
    <SearchBar searchBar={props.searchBar} />    
    {
    props.spanish_languages.map((spanish_language) => { 
    return <SpanishLanguageCard spanish_language={spanish_language}
    />

})

}
</div>
)

}

    

export default PickLanguage