import React, {FunctionComponent} from "react";

interface SearchBoxProps {
    setKeywords: any
}
const SearchBox: FunctionComponent<SearchBoxProps> = (props: SearchBoxProps): JSX.Element => {
    const handleOnChange = (event: any): void => {
        props.setKeywords(event.target.value);
    }
    return (
        <input placeholder={'Search ...'} onChange={handleOnChange}/>
    )
}

export default SearchBox