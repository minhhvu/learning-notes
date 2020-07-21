import React, {ChangeEvent, FunctionComponent} from "react";

interface SearchBoxProps {
    setKeywords: any
}
const SearchBox: FunctionComponent<SearchBoxProps> = (props: SearchBoxProps): JSX.Element => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setKeywords(event.target.value);
    }
    return (
        <input placeholder={'Search ...'} onChange={handleOnChange}/>
    )
}

export default SearchBox