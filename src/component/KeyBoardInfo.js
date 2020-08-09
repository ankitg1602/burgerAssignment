import React from "react";

const KeyBoardInfo = ({ data }) => {
    const { highest_rank, search_volume, theme_list } = data

    return (
        <div className="keyboard-container">
            <div class="flex-context-around"><div>HIGHEST RANK</div><div>{highest_rank}</div></div>
            <div class="flex-context-around"><div>SEARCH VOLUME</div><div>{search_volume}</div></div>
            <div class="flex-context-around"><div>THEME</div><div>{theme_list.map(name => <div>{name}</div>)}</div>  </div>
        </div>
    )
}

export default KeyBoardInfo