import React, {FunctionComponent} from "react";

export interface FilterProps {
    isChecked: boolean,
    setIsChecked: any
}
export const Filter: FunctionComponent<FilterProps> = (props:FilterProps): JSX.Element => {
    const handleOnchange = (event: any): void => {
        props.setIsChecked(event.target.checked)
    }
    return (
      <div>
        <input type={'checkbox'} checked={props.isChecked} onChange={handleOnchange}/>
        Only show products in stock
      </div>
    )
}

// export Filter;