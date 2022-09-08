export interface IPagePicker {
    setPage: (v: number) => void
}
export function PagePicker(props: IPagePicker) {
    return (<div className="pagePicker">
        {[1, 2, 3, 4].map(ix => <button
            key={ix}
            onClick={() => props.setPage(ix)}
        >{ix}</button>)}
    </div>
    );
}
