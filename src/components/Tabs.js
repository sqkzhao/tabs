import React, {useState} from 'react'

const Tabs = () => {
    const [state, setState] = useState({
        tabs: [
            {tab: "Tab1", content: "Tab1 content is here."},
            {tab: "Tab2", content: "Tab2 content is here."},
            {tab: "Tab3", content: "Tab3 content is here."},],
        currentTab: ""
    })
    const onClickHandler = (e) => {
        e.preventDefault()
        setState({
            ...state,
            currentTab: e.target.name
        })
    }
    return (
        <div className="col-2 mx-auto mt-5">
            {state.tabs.map((tab, i) => 
                <input key={i} type="button" name={tab.content} value={tab.tab} onClick={onClickHandler} className="mx-2"/>
            )}
            <div className="card pb-5 mt-3">{state.currentTab}</div>
        </div>
    ) 
}
export default Tabs